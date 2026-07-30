import Reveal from './Reveal'

const INSTRUMENTOS = [
  { titulo: 'Evaluación de competencia comunicativa', detalle: 'Expresión oral, trabajo en equipo, resolución de conflictos y comunicación efectiva.' },
  { titulo: 'Evaluación de competencia emocional', detalle: 'Autoconocimiento, manejo del estrés, empatía y resiliencia.' },
  { titulo: 'Evaluación de competencia tecnológica', detalle: 'Manejo de estudio de grabación (DAW): grabación multipista, edición, efectos y exportación.' },
  { titulo: 'Entrevistas y espacios grupales', detalle: 'Conversaciones abiertas sobre la experiencia, identidad cultural y cohesión comunitaria.' },
]

export default function Metodologia() {
  return (
    <section id="metodologia" className="mx-auto max-w-6xl px-6 py-24">
      <Reveal className="max-w-xl">
        <div className="font-mono text-xs font-semibold tracking-[0.15em] text-meter-bright">
          METODOLOGÍA
        </div>
        <h2 className="mt-3 font-display text-[1.8rem] leading-tight text-cream">
          Cómo medimos el cambio
        </h2>
        <p className="mt-3 font-body text-[15px] leading-relaxed text-cream/65">
          Se evalúa a los participantes antes de empezar y después del proceso de producción,
          combinando pruebas concretas con conversaciones abiertas sobre su experiencia.
        </p>
      </Reveal>

      <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
        {INSTRUMENTOS.map((ins, i) => (
          <Reveal key={ins.titulo} delay={i * 0.06}>
            <div className="wood-border h-full rounded-xl bg-wood-deep p-5">
              <div className="font-display text-[15px] font-medium text-cream">{ins.titulo}</div>
              <div className="mt-2 font-body text-[13px] leading-relaxed text-cream/65">
                {ins.detalle}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
