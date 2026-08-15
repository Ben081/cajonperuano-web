export default function Footer() {
  return (
    <footer className="border-t border-copper/15 bg-wood-deep">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-4">
          <div>
            <div className="font-display text-lg text-cream">
              Cajón Peruano 2026
            </div>
            <p className="mt-2 font-body text-[13px] leading-relaxed text-cream/55">
              Proyecto de fortalecimiento cultural y comunitario
            </p>
          </div>

          <div>
            <div className="font-mono text-xs font-semibold tracking-[0.1em] text-copper-bright">
              EXPLORA
            </div>
            <ul className="mt-3 flex flex-col gap-2 font-body text-[13.5px] text-cream/65">
              <li><a href="#proyecto" className="transition-colors duration-200 hover:text-cream">Proyecto</a></li>
              <li><a href="#album" className="transition-colors duration-200 hover:text-cream">Álbum</a></li>
              <li><a href="#metodologia" className="transition-colors duration-200 hover:text-cream">Metodología</a></li>
              <li><a href="#cronograma" className="transition-colors duration-200 hover:text-cream">Cronograma</a></li>
              <li><a href="#donadores" className="transition-colors duration-200 hover:text-cream">Donadores</a></li>
              <li><a href="#facilitadores" className="transition-colors duration-200 hover:text-cream">Aliados</a></li>
              <li><a href="#convocatoria" className="transition-colors duration-200 hover:text-cream">Convocatoria</a></li>
            </ul>
          </div>

          <div>
            <div className="font-mono text-xs font-semibold tracking-[0.1em] text-copper-bright">
              CONTACTO
            </div>
            <ul className="mt-3 flex flex-col gap-2 font-body text-[13.5px] text-cream/65">
              <li>
                <a href="mailto:info@frate.lat" className="transition-colors duration-200 hover:text-cream">
                  info@frate.lat
                </a>
              </li>
              <li className="text-cream/45">Huánuco, Perú</li>
            </ul>
          </div>

          <div>
            <div className="font-mono text-xs font-semibold tracking-[0.1em] text-copper-bright">
              LEGAL
            </div>
            <ul className="mt-3 flex flex-col gap-2 font-body text-[13.5px] text-cream/65">
              <li><a href="https://frate.lat/reclamaciones" target="_blank" rel="noopener noreferrer" className="transition-colors duration-200 hover:text-cream">Libro de Reclamaciones</a></li>
              <li><a href="https://frate.lat/privacidad" target="_blank" rel="noopener noreferrer" className="transition-colors duration-200 hover:text-cream">Política de Privacidad</a></li>
              <li><a href="https://frate.lat/terminos" target="_blank" rel="noopener noreferrer" className="transition-colors duration-200 hover:text-cream">Términos y Condiciones</a></li>
              <li><a href="https://frate.lat" target="_blank" rel="noopener noreferrer" className="transition-colors duration-200 hover:text-cream">Sitio oficial</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-copper/10 pt-6 font-body text-[12.5px] text-cream/45 sm:flex-row">
          <p>
            © {new Date().getFullYear()} Cajón Peruano —  Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
