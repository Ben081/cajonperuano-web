import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { X, Heart, CheckCircle2 } from 'lucide-react'
import { normalizeFullName } from '../utils/normalizeName'

const EASE_OUT = [0.23, 1, 0.32, 1]
const MONTO_MINIMO = 15

// Los pasos: monto -> pago (Culqui) -> datos (anónimo o no) -> confirmación
export default function DonarModal({ open, onClose, onDonacionCompletada }) {
  const [step, setStep] = useState('monto')
  const [monto, setMonto] = useState('')
  const [error, setError] = useState('')
  const [procesando, setProcesando] = useState(false)
  const [anonimo, setAnonimo] = useState(false)
  const [nombre, setNombre] = useState('')
  const [apellido, setApellido] = useState('')
  const [autoriza, setAutoriza] = useState(false)

  function reset() {
    setStep('monto')
    setMonto('')
    setError('')
    setProcesando(false)
    setAnonimo(false)
    setNombre('')
    setApellido('')
    setAutoriza(false)
  }

  function handleClose() {
    onClose()
    setTimeout(reset, 250)
  }

  function handleContinuarMonto(e) {
    e.preventDefault()
    const valor = Number(monto)
    if (!monto || Number.isNaN(valor)) {
      setError('Ingresa un monto válido.')
      return
    }
    if (valor < MONTO_MINIMO) {
      setError(`El monto mínimo para donar es S/ ${MONTO_MINIMO}.`)
      return
    }
    setError('')
    setStep('pago')

    // Aquí se integra la API de Culqui (checkout / token + cargo en backend).
    // Se simula el flujo de pago mientras se conecta el backend real.
    setProcesando(true)
    setTimeout(() => {
      setProcesando(false)
      setStep('datos')
    }, 1400)
  }

  function handleFinalizar() {
    if (!anonimo && !autoriza) {
      setError('Marca la autorización para mostrar tu nombre, o dona en anonimato.')
      return
    }
    if (!anonimo && !nombre.trim()) {
      setError('Ingresa tu nombre, o marca "Donar en anonimato".')
      return
    }
    setError('')

    const donante = anonimo
      ? { nombre: 'Donante anónimo', monto: Number(monto), anonimo: true }
      : {
          nombre: normalizeFullName(nombre, apellido),
          monto: Number(monto),
          anonimo: false,
        }

    onDonacionCompletada?.(donante)
    setStep('exito')
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-wood-deep/80 p-4 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 10 }}
            transition={{ duration: 0.25, ease: EASE_OUT }}
            onClick={(e) => e.stopPropagation()}
            className="wood-border relative w-full max-w-md rounded-2xl bg-wood p-7"
          >
            <button
              onClick={handleClose}
              className="absolute right-5 top-5 text-cream/50 transition-colors duration-200 hover:text-cream"
              aria-label="Cerrar"
            >
              <X size={20} />
            </button>

            <AnimatePresence mode="wait">
              {step === 'monto' && (
                <motion.form
                  key="monto"
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{ duration: 0.2, ease: EASE_OUT }}
                  onSubmit={handleContinuarMonto}
                >
                <div className="mb-1 flex items-center gap-2 font-mono text-xs font-semibold tracking-[0.1em] text-copper-bright">
                  <Heart size={14} /> APOYAR EL PROYECTO
                </div>
                <h3 className="mt-2 font-display text-xl font-semibold text-cream">
                  Elige el monto de tu donación
                </h3>
                <p className="mt-2 font-body text-[13px] text-cream/55">
                  Monto mínimo es de S/ {MONTO_MINIMO}
                </p>

                <label className="mt-5 block font-mono text-[12px] font-semibold text-cream/70">
                  Monto (S/)
                </label>
                <input
                  type="number"
                  min={MONTO_MINIMO}
                  step="1"
                  value={monto}
                  onChange={(e) => setMonto(e.target.value)}
                  placeholder="15"
                  className="mt-1.5 w-full rounded-lg border border-meter/25 bg-wood-deep px-4 py-3 font-body text-cream outline-none focus:border-meter"
                />

                <div className="mt-3 flex gap-2">
                  {[15, 25, 50, 100].map((m) => (
                    <button
                      type="button"
                      key={m}
                      onClick={() => setMonto(String(m))}
                      className="rounded-full border border-meter/25 px-3.5 py-1.5 font-mono text-[12.5px] text-cream/70 transition-colors duration-200 hover:border-meter"
                    >
                      S/ {m}
                    </button>
                  ))}
                </div>

                {error && <p className="mt-3 font-body text-[13px] text-copper-bright">{error}</p>}

                <button
                  type="submit"
                  className="mt-6 w-full rounded-lg bg-copper py-3.5 font-mono text-sm font-semibold text-cream transition-colors duration-200 hover:bg-copper-bright"
                >
                  Continuar con Culqui
                </button>
                </motion.form>
              )}

              {step === 'pago' && (
                <motion.div
                  key="pago"
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{ duration: 0.2, ease: EASE_OUT }}
                  className="flex flex-col items-center py-8 text-center"
                >
                  <div className="h-9 w-9 animate-spin rounded-full border-2 border-meter/30 border-t-meter" />
                  <p className="mt-5 font-body text-[14px] text-cream/70">
                    Procesando tu pago de S/ {monto} de forma segura…
                  </p>
                </motion.div>
              )}

              {step === 'datos' && (
                <motion.div
                  key="datos"
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{ duration: 0.2, ease: EASE_OUT }}
                >
                <h3 className="font-display text-xl font-semibold text-cream">
                  ¡Pago confirmado!
                </h3>
                <p className="mt-2 font-body text-[13.5px] text-cream/60">
                  ¿Cómo quieres aparecer en la sección de donadores?
                </p>

                <label className="mt-5 flex items-center gap-3 rounded-lg border border-meter/20 bg-wood-deep px-4 py-3">
                  <input
                    type="checkbox"
                    checked={anonimo}
                    onChange={(e) => setAnonimo(e.target.checked)}
                    className="h-4 w-4 accent-meter"
                  />
                  <span className="font-body text-[13.5px] text-cream/85">
                    Donar en anonimato
                  </span>
                </label>

                {!anonimo && (
                  <div className="mt-4 flex flex-col gap-3">
                    <div>
                      <label className="block font-mono text-[12px] font-semibold text-cream/70">
                        Nombre
                      </label>
                      <input
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                        placeholder="ej. maria jose"
                        className="mt-1.5 w-full rounded-lg border border-meter/25 bg-wood-deep px-4 py-2.5 font-body text-cream outline-none focus:border-meter"
                      />
                    </div>
                    <div>
                      <label className="block font-mono text-[12px] font-semibold text-cream/70">
                        Apellido
                      </label>
                      <input
                        value={apellido}
                        onChange={(e) => setApellido(e.target.value)}
                        placeholder="ej. rojas de la cruz"
                        className="mt-1.5 w-full rounded-lg border border-meter/25 bg-wood-deep px-4 py-2.5 font-body text-cream outline-none focus:border-meter"
                      />
                    </div>

                    <label className="mt-1 flex items-start gap-2.5">
                      <input
                        type="checkbox"
                        checked={autoriza}
                        onChange={(e) => setAutoriza(e.target.checked)}
                        className="mt-0.5 h-4 w-4 accent-meter"
                      />
                      <span className="font-body text-[12.5px] leading-snug text-cream/65">
                        Autorizo el uso de mi nombre y apellido para que se
                        muestre en la sección de donadores.
                      </span>
                    </label>
                  </div>
                )}

                {error && <p className="mt-3 font-body text-[13px] text-copper-bright">{error}</p>}

                <button
                  onClick={handleFinalizar}
                  className="mt-6 w-full rounded-lg bg-meter py-3.5 font-mono text-sm font-semibold text-wood-deep transition-colors duration-200 hover:bg-copper-bright"
                >
                  Finalizar
                </button>
                </motion.div>
              )}

              {step === 'exito' && (
                <motion.div
                  key="exito"
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.25, ease: EASE_OUT }}
                  className="flex flex-col items-center py-6 text-center"
                >
                  <CheckCircle2 className="text-copper-bright" size={44} />
                  <h3 className="mt-4 font-display text-xl font-semibold text-cream">
                    ¡Gracias por tu donación!
                  </h3>
                  <p className="mt-2 font-body text-[13.5px] text-cream/60">
                    Tu aporte de S/ {monto} ayuda a llevar este programa a más
                    instituciones.
                  </p>
                  <button
                    onClick={handleClose}
                    className="mt-6 rounded-lg border border-meter/40 px-6 py-2.5 font-mono text-sm font-semibold text-cream transition-colors duration-200 hover:bg-meter/10"
                  >
                    Cerrar
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
