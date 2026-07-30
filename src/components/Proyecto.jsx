import { motion } from 'framer-motion'
import Reveal from './Reveal'
import { impacto } from '../data/content'

export default function Proyecto() {
  return (
    <section id="proyecto" className="mx-auto max-w-6xl px-6 py-24">
      <div className="grid grid-cols-1 gap-12 md:grid-cols-[280px_1fr]">
        <div>
          <Reveal>
            <div className="font-mono text-xs font-semibold tracking-[0.15em] text-meter-bright">
              SOBRE EL PROYECTO
            </div>
            <h2 className="mt-3 font-display text-[1.8rem] leading-tight text-cream">
              Del barrio al estudio de grabación
            </h2>
          </Reveal>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1], delay: 0.15 }}
            className="relative mx-auto mt-6 w-full max-w-[300px]"
          >
            <img
              src="/img3.png"
              alt="img1"
              className="h-full w-full object-contain"
              style={{
                maskImage: 'linear-gradient(to bottom, black 70%, transparent 100%)',
                WebkitMaskImage: 'linear-gradient(to bottom, black 70%, transparent 100%)',
              }}
            />
          </motion.div>
        </div>

        <div className="flex flex-col gap-6">
          <Reveal delay={0.05}>
            <p className="font-body text-[15.5px] leading-relaxed text-cream/75">
              El Cajón Peruano, Patrimonio Cultural de la Nación y de la Humanidad, se ha
              enseñado tradicionalmente de forma oral, sin integrar tecnologías de producción
              musical. <br /><br />Este proyecto diseña, implementa y evalúa una estrategia de producción
              colaborativa junto a líderes y miembros de las Juntas Vecinales de Huánuco ademas de la grabación, edición y mezcla de un álbum.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="font-body text-[15.5px] leading-relaxed text-cream/75">
              La apuesta central es que producir música de forma colaborativa, mediada por
              tecnología, mateniendo la identidad cultural y el tejido social del barrio.
            </p>
          </Reveal>

          <div className="mt-2 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {impacto.map((im, i) => (
              <Reveal key={im.titulo} delay={0.15 + i * 0.05}>
                <div className="wood-border h-full rounded-xl bg-wood-deep p-5">
                  <div className="font-mono text-[13px] font-semibold text-meter-bright">
                    {im.titulo}
                  </div>
                  <div className="mt-2 font-body text-[13px] leading-relaxed text-cream/70">
                    {im.detalle}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}