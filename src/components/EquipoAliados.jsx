import Reveal from './Reveal'
import { facilitadores, aliados, equipo, initials } from '../data/content'

export default function EquipoAliados() {
  return (
    <>
      <section id="facilitadores" className="mx-auto max-w-6xl px-6 py-24">
        <Reveal className="max-w-xl">
          <div className="font-mono text-xs font-semibold tracking-[0.15em] text-meter-bright">
            QUIÉNES ACOMPAÑAN
          </div>
          <h2 className="mt-3 font-display text-[1.8rem] leading-tight text-cream">
            Facilitadores del taller
          </h2>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {facilitadores.map((f, i) => (
            <Reveal key={f.titulo} delay={i * 0.06}>
              <div className="h-full rounded-xl border border-copper/15 bg-wood-deep p-5">
                <div className="font-display text-[15px] font-medium text-cream">{f.titulo}</div>
                <div className="mt-2 font-body text-[13px] leading-relaxed text-cream/60">
                  {f.detalle}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="aliados" className="border-y border-copper/15 bg-wood-deep">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <Reveal className="max-w-xl">
            <div className="font-mono text-xs font-semibold tracking-[0.15em] text-meter-bright">
              RED DE COLABORACIÓN
            </div>
            <h2 className="mt-3 font-display text-[1.8rem] leading-tight text-cream">Aliados</h2>
          </Reveal>

          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {aliados.map((a, i) => (
              <Reveal key={a.nombre} delay={i * 0.06}>
                <div className="h-full rounded-xl border border-copper/15 bg-wood p-5">
                  <div className="font-display text-[15px] font-medium text-cream">{a.nombre}</div>
                  <div className="mt-2 font-body text-[13px] leading-relaxed text-cream/60">
                    {a.rol}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="equipo" className="mx-auto max-w-6xl px-6 py-24">
        <Reveal className="max-w-xl">
          <div className="font-mono text-xs font-semibold tracking-[0.15em] text-meter-bright">
            INVESTIGADORES
          </div>
          <h2 className="mt-3 font-display text-[1.8rem] leading-tight text-cream">
            Equipo del proyecto
          </h2>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {equipo.map((e, i) => (
            <Reveal key={e.nombre} delay={i * 0.06}>
              <div className="flex items-start gap-4 rounded-xl border border-copper/15 bg-wood-deep p-5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-copper font-display text-sm font-semibold text-cream">
                  {initials(e.nombre)}
                </div>
                <div>
                  <div className="font-display text-[14.5px] font-medium text-cream">
                    {e.nombre}
                  </div>
                  <div className="mt-1 font-body text-[12.5px] leading-snug text-cream/55">
                    {e.rol}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  )
}
