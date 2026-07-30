import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { X } from 'lucide-react'
import ConvocatoriaForm from './ConvocatoriaForm'

const EASE_OUT = [0.23, 1, 0.32, 1]

export default function ConvocatoriaModal({ open, onClose }) {
  const [instanceKey, setInstanceKey] = useState(0)

  useEffect(() => {
    if (open) setInstanceKey((k) => k + 1)
  }, [open])

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-wood-deep/80 p-4 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 10 }}
            transition={{ duration: 0.25, ease: EASE_OUT }}
            onClick={(e) => e.stopPropagation()}
            className="wood-border relative w-full max-w-lg rounded-2xl bg-wood p-7"
          >
            <button
              onClick={onClose}
              className="absolute right-5 top-5 text-cream/50 transition-colors duration-200 hover:text-cream"
              aria-label="Cerrar"
            >
              <X size={20} />
            </button>

            <div className="font-mono text-xs font-semibold tracking-[0.1em] text-copper-bright">
              CONVOCATORIA
            </div>
            <h3 className="mt-2 font-display text-xl font-semibold text-cream">
              Este álbum también es tuyo
            </h3>

            <div className="mt-5">
              <ConvocatoriaForm key={instanceKey} onSuccess={onClose} />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
