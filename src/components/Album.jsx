import Reveal from './Reveal'
import { generos } from '../data/content'
import { AudioLines } from 'lucide-react'

export default function Album() {
  return (
    <section id="album" className="border-y border-copper/15 bg-wood-deep">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <Reveal className="max-w-xl">
          <div className="font-mono text-xs font-semibold tracking-[0.15em] text-meter-bright">
            PRODUCTO
          </div>
          <h2 className="mt-3 font-display text-[1.8rem] leading-tight text-cream">
            24 canciones que recorren
          </h2>
          <p className="mt-3 font-body text-[15px] leading-relaxed text-cream/65">
            Ritmos de la costa, sierra y selva del Perú, producidos de forma colaborativa por los participantes del taller.
          </p>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {generos.map((g, gi) => (
            <Reveal key={g.letra} delay={gi * 0.06}>
              <div>
                <div className="mb-4 flex items-center gap-2.5">
                  <div className="flex h-7 w-7 items-center justify-center rounded-md bg-copper font-display text-xs font-semibold text-cream">
                    {g.letra}
                  </div>
                  <div className="font-display text-[15px] font-medium text-cream">{g.nombre}</div>
                </div>
                <div className="flex flex-col gap-0">
                  {g.pistas.map((p, pi) => (
                    <div
                      key={p}
                      className="flex items-center gap-2.5 border-b border-copper/10 py-2.5 font-mono text-[11.5px] text-cream/60"
                    >
                      <span className="text-copper/60">{String(pi + 1).padStart(2, '0')}</span>
                      <AudioLines size={12} className="shrink-0 text-meter/50" />
                      <span className="leading-snug text-cream/70">{p}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
