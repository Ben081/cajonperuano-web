import Reveal from './Reveal'
import { Heart } from 'lucide-react'

export default function Donadores({ donantes }) {
  if (!donantes || donantes.length === 0) return null

  return (
    <section id="donadores" className="border-y border-meter/15 bg-wood-deep">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <Reveal className="max-w-xl">
          <div className="font-mono text-xs font-semibold tracking-[0.15em] text-copper-bright">
            GRATITUD
          </div>
          <h2 className="mt-3 font-display text-[1.8rem] leading-tight text-cream">
            Donadores del proyecto
          </h2>
          <p className="mt-3 font-body text-[15px] leading-relaxed text-cream/65">
            Gracias a quienes ya apoyan este programa.
          </p>
        </Reveal>

        <div className="mt-8 flex flex-col gap-2.5">
          {donantes.map((d, i) => (
            <Reveal key={i} delay={i * 0.04}>
              <div className="flex items-center justify-between rounded-lg border border-meter/15 bg-wood px-5 py-3.5">
                <div className="flex items-center gap-3">
                  <Heart size={15} className="text-copper-bright" />
                  <span className="font-body text-[14px] text-cream/85">{d.nombre}</span>
                </div>
                <span className="font-mono text-[13px] font-semibold text-copper-bright">
                  S/ {d.monto}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
