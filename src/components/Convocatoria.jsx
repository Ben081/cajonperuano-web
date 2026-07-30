import Reveal from './Reveal'
import ConvocatoriaForm from './ConvocatoriaForm'

export default function Convocatoria() {
  return (
    <section id="convocatoria" className="mx-auto max-w-6xl px-6 py-24">
      <Reveal className="max-w-xl">
        <div className="font-mono text-xs font-semibold tracking-[0.15em] text-copper-bright">
          CONVOCATORIA
        </div>
        <h2 className="mt-3 font-display text-[1.8rem] leading-tight text-cream">
          Buscamos voces, manos y ritmo
        </h2>
        <p className="mt-3 font-body text-[14px] leading-relaxed text-cream/60">
          Súmate como voluntario/a, beneficiario o artista al proyecto ...<br /> Comparte
          tu habilidad y fortalece las juntas vecinales de Huánuco.
        </p>
      </Reveal>

      <Reveal delay={0.05}>
        <div className="mx-auto mt-10 max-w-lg">
          <ConvocatoriaForm />
        </div>
      </Reveal>
    </section>
  )
}
