import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion'
import { useEffect, useRef } from 'react'

const EASE_OUT = [0.23, 1, 0.32, 1]

function Counter({ value }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  const numericValue = parseInt(value.replace(/,/g, ''), 10)
  const hasComma = value.includes(',')

  const count = useMotionValue(1)
  const rounded = useTransform(count, (latest) => {
    const n = Math.round(latest)
    return hasComma ? n.toLocaleString('es-PE') : n.toString()
  })

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, numericValue, {
        duration: 1.6,
        ease: EASE_OUT,
      })
      return controls.stop
    }
  }, [isInView, count, numericValue])

  return <motion.span ref={ref}>{rounded}</motion.span>
}
const WAVE_HEIGHTS = [18, 34, 22, 48, 30, 56, 26, 40, 20, 44, 28, 52, 24, 38, 16]

export default function Hero({ onDonar }) {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 pb-16 pt-16 md:grid-cols-[1.1fr_0.9fr] md:pt-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE_OUT }}
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-copper/40 bg-copper/10 px-3.5 py-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-meter" />
            <span className="font-mono text-[11px] font-semibold tracking-[0.12em] text-meter-bright">
              PROGRAMA DE PRODUCCIÓN MUSICAL COLABORATIVA
            </span>
          </div>

          <h1 className="max-w-xl font-display text-[2.5rem] font-semibold leading-[1.12] text-cream md:text-[3.1rem]">
            Del cajón de madera a la{' '}
            <span className="italic text-copper-bright">consola de grabación</span>.
          </h1>

          <p className="mt-6 max-w-md font-body text-[15.5px] leading-relaxed text-cream/75">
            Producción musical colaborativa del álbum <strong className="text-cream">Tokosh de
            Cajón Peruano</strong>, el cual estara conformado por ritmos afroperuanos, criollos 
            y de fusión selva-andina.<br /><br />
            Grabados junto a líderes y miembros de las Juntas Vecinales de Huánuco. Un proyecto impulsado por
            la Universidad Daniel Alomía Robles (UNDAR) en alianza con la Municipalidad Provincial de Huánuco.<br /><br />
            El proyecto contempla la publicación de un artículo científico en una revista indexada Scopus 
            como uno de sus productos finales.
          </p>

          <div className="mt-9 flex flex-wrap gap-3.5">
            <a
              href="#proyecto"
              className="rounded-lg bg-copper px-6 py-3.5 font-mono text-sm font-semibold text-cream transition-colors duration-200 hover:bg-copper-bright"
            >
              Conocer el proyecto
            </a>
            <button
              onClick={onDonar}
              className="rounded-lg border border-meter/60 px-6 py-3.5 font-mono text-sm font-semibold text-cream transition-colors duration-200 hover:bg-meter/15"
            >
              Apoyar con una donación
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1], delay: 0.15 }}
          className="relative mx-auto w-full max-w-2xl"
        >
          <div className="relative">
          <img
            src="/img2.png"
            alt="img1"
            className="h-full w-full object-contain"
            style={{
              maskImage: 'linear-gradient(to bottom, black 70%, transparent 100%)',
              WebkitMaskImage: 'linear-gradient(to bottom, black 70%, transparent 100%)',
            }}
          />
        </div>
        </motion.div>
      </div>

      <div className="mx-auto grid max-w-6xl grid-cols-2 divide-x divide-gold/15 md:grid-cols-4">
        {[
          ['15', 'Líderes vecinales participantes'],
          ['24', 'Pistas del álbum Tokosh'],
          ['19', 'Juntas Vecinales de Huánuco'],
          ['4', 'Generos musicales del álbum'],
        ].map(([value, label]) => (
          <div key={label} className="bg-wood px-6 py-6">
            <div className="font-display text-3xl font-semibold text-meter-bright">
              <Counter value={value} />
            </div>
            <div className="mt-1 font-body text-[12.5px] leading-snug text-cream/60">{label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
