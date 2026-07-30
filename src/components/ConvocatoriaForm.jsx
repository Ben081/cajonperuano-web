import { useState } from 'react'
import { CheckCircle2 } from 'lucide-react'

const HABILIDADES = ['Voluntario/a','Artista', 'Beneficiario', 'Otro']

export default function ConvocatoriaForm({ onSuccess }) {
  const [enviado, setEnviado] = useState(false)
  const [error, setError] = useState('')
  const [enviando, setEnviando] = useState(false)
  const [mayorEdad, setMayorEdad] = useState(false)
  const [habilidad, setHabilidad] = useState(HABILIDADES[0])

  async function handleSubmit(e) {
    e.preventDefault()
    setError('')
    setEnviando(true)

    const form = e.target
    const nombre = form.nombre?.value || ''
    const correo = form.correo?.value || ''
    const juntaVecinal = form.juntaVecinal?.value || ''
    const mensaje = form.mensaje?.value || ''

    try {
      const res = await fetch('/api/convocatoria', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          proyecto: 'cajon-peruano',
          nombre,
          correo,
          juntaVecinal,
          habilidad,
          mensaje,
          mayorEdad,
        }),
      })

      const data = await res.json()

      if (!data.ok) {
        setError(data.error || 'Hubo un error al enviar. Intenta de nuevo.')
        setEnviando(false)
        return
      }

      setEnviado(true)
    } catch {
      setError('Error de conexión. Verifica tu internet e intenta de nuevo.')
      setEnviando(false)
    }
  }

  if (enviado) {
    return (
      <div className="flex flex-col items-center py-6 text-center">
        <CheckCircle2 className="text-copper-bright" size={44} />
        <h3 className="mt-4 font-display text-xl font-semibold text-cream">
          ¡Postulación enviada!
        </h3>
        <p className="mt-2 font-body text-[13.5px] text-cream/60">
          Te contactaremos a través de tu correo con los siguientes pasos.
        </p>
        {onSuccess && (
          <button
            onClick={onSuccess}
            className="mt-6 rounded-lg border border-meter/40 px-6 py-2.5 font-mono text-sm font-semibold text-cream transition-colors duration-200 hover:bg-meter/10"
          >
            Cerrar
          </button>
        )}
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label className="block font-mono text-[12px] font-semibold text-cream/70">
            Nombre completo
          </label>
          <input
            required
            name="nombre"
            placeholder="su nombre"
            className="mt-1.5 w-full rounded-lg border border-meter/25 bg-wood-deep px-4 py-2.5 font-body text-cream outline-none focus:border-meter"
          />
        </div>
        <div>
          <label className="block font-mono text-[12px] font-semibold text-cream/70">
            Correo
          </label>
          <input
            required
            type="email"
            name="correo"
            placeholder="suemail@ejemplo.com"
            className="mt-1.5 w-full rounded-lg border border-meter/25 bg-wood-deep px-4 py-2.5 font-body text-cream outline-none focus:border-meter"
          />
        </div>
      </div>

      <div className="mt-4">
        <label className="block font-mono text-[12px] font-semibold text-cream/70">
          Junta Vecinal a la que pertenece(si esque pertenece a alguna)
        </label>
        <input
          required
          name="juntaVecinal"
          placeholder="ej. Junta Vecinal Las Moras, Amarilis"
          className="mt-1.5 w-full rounded-lg border border-meter/25 bg-wood-deep px-4 py-2.5 font-body text-cream outline-none focus:border-meter"
        />
      </div>

      <div className="mt-4">
        <label className="block font-mono text-[12px] font-semibold text-cream/70">
          ¿ Cual es su participacion ?
        </label>
        <div className="mt-2 flex flex-wrap gap-2">
          {HABILIDADES.map((h) => (
            <button
              type="button"
              key={h}
              onClick={() => setHabilidad(h)}
              className={`rounded-full px-3.5 py-1.5 font-mono text-[12.5px] transition-colors duration-200 ${
                habilidad === h
                  ? 'bg-meter text-wood-deep'
                  : 'border border-meter/25 text-cream/70 hover:border-meter/50'
              }`}
            >
              {h}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-4">
        <label className="block font-mono text-[12px] font-semibold text-cream/70">
          Mensaje (opcional)
        </label>
        <textarea
          rows={3}
          name="mensaje"
          placeholder="Cuéntanos quién eres y cómo te gustaría aportar…"
          className="mt-1.5 w-full resize-none rounded-lg border border-meter/25 bg-wood-deep px-4 py-2.5 font-body text-cream outline-none focus:border-meter"
        />
      </div>

      <label className="mt-4 flex items-start gap-2.5">
        <input
          type="checkbox"
          required
          checked={mayorEdad}
          onChange={(e) => setMayorEdad(e.target.checked)}
          className="mt-0.5 h-4 w-4 accent-meter"
        />
        <span className="font-body text-[12.5px] leading-snug text-cream/65">
          Confirmo que tengo 18 años y pertenezco a una
          Junta Vecinal .
        </span>
      </label>

      {error && <p className="mt-3 font-body text-[13px] text-copper-bright">{error}</p>}

      <button
        type="submit"
        disabled={enviando}
        className="mt-6 w-full rounded-lg bg-copper py-3.5 font-mono text-sm font-semibold text-cream transition-colors duration-200 hover:bg-copper-bright disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {enviando ? 'Enviando…' : 'Enviar postulación'}
      </button>
    </form>
  )
}
