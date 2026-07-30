import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Reveal from './Reveal'
import { fases } from '../data/content'

const EASE_OUT = [0.23, 1, 0.32, 1]

export default function Cronograma() {
  const [active, setActive] = useState(2)

  return (
    <section id="cronograma" className="border-y border-copper/15 bg-wood-deep">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <Reveal className="max-w-xl">
          <div className="font-mono text-xs font-semibold tracking-[0.15em] text-meter-bright">
            CRONOGRAMA
          </div>
          <h2 className="mt-3 font-display text-[1.8rem] leading-tight text-cream">
            Cómo se desarrolla el proyecto
          </h2>
          <p className="mt-3 font-body text-[15px] leading-relaxed text-cream/65">
            Cinco fases, de la planificación a la publicación científica. Selecciona una fase para ver el detalle de actividades.
          </p>
        </Reveal>

        <div className="relative mt-9 mb-6">
          <div className="absolute left-0 right-0 top-1/2 h-px -translate-y-1/2 bg-copper/20" />
          <div className="relative flex flex-wrap gap-2">
            {fases.map((f, i) => (
              <button
                key={f.numero}
                onClick={() => setActive(i)}
                className={`flex items-center gap-2 rounded-md px-3.5 py-2 font-mono text-[12.5px] font-semibold transition-colors duration-200 ${
                  i === active
                    ? 'bg-meter text-wood-deep'
                    : 'border border-copper/25 bg-wood text-cream/70 hover:border-copper/50'
                }`}
              >
                <span className={i === active ? 'text-wood-deep/60' : 'text-copper/50'}>
                  {f.numero}
                </span>
                {f.nombre}
              </button>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3, ease: EASE_OUT }}
            className="wood-border rounded-2xl bg-gradient-to-br from-wood-deep to-wood p-8"
          >
            <div className="mt-2 font-display text-xl font-semibold text-copper-bright">
              {fases[active].titulo}
            </div>
            <div className="mt-3 max-w-2xl font-body text-[14.5px] leading-relaxed text-cream/75">
              {fases[active].detalle}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}