import { motion } from 'framer-motion'

const EASE_OUT = [0.23, 1, 0.32, 1]

export default function Reveal({ children, delay = 0, className = '' }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, ease: EASE_OUT, delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
