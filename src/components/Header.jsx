import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const EASE_OUT = [0.23, 1, 0.32, 1]

const NAV = [
  { href: '#proyecto', label: 'Proyecto' },
  { href: '#album', label: 'Álbum' },
  { href: '#metodologia', label: 'Metodología' },
  { href: '#cronograma', label: 'Cronograma' },
  { href: '#donadores', label: 'Donadores' },
]

export default function Header({ onDonar, onConvocatoria }) {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-copper/25 bg-wood-deep/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-3.5">
        <a href="#top" className="flex items-center shrink-0">
          <img
            src="/FRATE.svg"
            alt="Freestyle Católico"
            className="h-9 w-auto object-contain"
          />
        </a>

        <nav className="hidden items-center gap-7 font-mono text-[12.5px] font-medium text-cream/80 md:flex">
          {NAV.map((n) => (
            <a key={n.href} href={n.href} className="transition-colors duration-200 hover:text-meter-bright">
              {n.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <button
            onClick={onConvocatoria}
            className="font-mono text-[12.5px] font-medium text-cream/80 transition-colors duration-200 hover:text-meter-bright"
          >
            Convocatoria
          </button>
          <button
            onClick={onDonar}
            className="rounded-full bg-copper px-5 py-2 font-mono text-[12.5px] font-semibold text-cream shadow-[0_0_0_1px_rgba(194,112,61,0.4)] transition-colors duration-200 hover:bg-copper-bright"
          >
            Donar
          </button>
        </div>

        <button className="md:hidden text-cream" onClick={() => setOpen((o) => !o)} aria-label="Abrir menú">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: EASE_OUT }}
            className="overflow-hidden border-t border-copper/25 bg-wood-deep md:hidden"
          >
            <div className="flex flex-col gap-1 px-6 py-4">
              {NAV.map((n) => (
                <a
                  key={n.href}
                  href={n.href}
                  onClick={() => setOpen(false)}
                  className="py-2 font-mono text-sm text-cream/85 transition-colors duration-200 hover:text-meter-bright"
                >
                  {n.label}
                </a>
              ))}
              <button
                onClick={() => { setOpen(false); onConvocatoria() }}
                className="py-2 text-left font-mono text-sm text-cream/85 transition-colors duration-200 hover:text-meter-bright"
              >
                Convocatoria
              </button>
              <button
                onClick={() => { setOpen(false); onDonar() }}
                className="mt-2 rounded-full bg-copper px-5 py-2.5 text-center font-mono text-sm font-semibold text-cream transition-colors duration-200 hover:bg-copper-bright"
              >
                Donar
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
