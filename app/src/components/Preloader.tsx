import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Lottie from '../lottieShim'
import capAnimation from '../lottie/grad-cap.json'

const MESSAGES = [
  'Opening the gates...',
  'Polishing the mortarboard...',
  'Lighting up the classrooms...',
  'Rolling out the welcome mat...',
]

export default function Preloader({ onDone }: { onDone: () => void }) {
  const [visible, setVisible] = useState(true)
  const [messageIndex, setMessageIndex] = useState(0)

  useEffect(() => {
    const messageTimer = setInterval(() => {
      setMessageIndex((i) => Math.min(i + 1, MESSAGES.length - 1))
    }, 480)
    const exitTimer = setTimeout(() => setVisible(false), 2100)
    return () => {
      clearInterval(messageTimer)
      clearTimeout(exitTimer)
    }
  }, [])

  return (
    <AnimatePresence onExitComplete={onDone}>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center gap-6 bg-maroon-950"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6, ease: 'easeInOut' } }}
        >
          <div className="h-28 w-28">
            <Lottie animationData={capAnimation} loop autoplay />
          </div>
          <p className="font-display text-lg font-semibold tracking-wide text-gold-300">
            Shibpur Hindu Girls High School
          </p>
          <AnimatePresence mode="wait">
            <motion.p
              key={messageIndex}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3 }}
              className="text-xs font-semibold uppercase tracking-[0.25em] text-cream/50"
            >
              {MESSAGES[messageIndex]}
            </motion.p>
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
