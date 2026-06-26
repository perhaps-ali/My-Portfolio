'use client'

import { useActionState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import { sendContactEmail, type ContactState } from '@/app/actions/contact'

const initialState: ContactState = { status: 'idle', message: '' }

const inputClass =
  'w-full bg-transparent border border-line px-4 py-3 text-12 text-ink font-mono placeholder:text-ink-mute focus:outline-none focus:border-accent transition-colors duration-150'

interface Props {
  open: boolean
  onClose: () => void
}

export default function ContactOverlay({ open, onClose }: Props) {
  const [state, formAction, pending] = useActionState(sendContactEmail, initialState)

  // close on Escape
  useEffect(() => {
    if (!open) return
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [open, onClose])

  // lock body scroll when open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[300] bg-black/70 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Panel — slides in from right */}
          <motion.div
            initial={{ x: '100%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: '100%', opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.32, 0.72, 0, 1] }}
            className="fixed top-0 right-0 bottom-0 z-[301] w-full max-w-[560px] bg-bg border-l border-line overflow-y-auto flex flex-col"
          >
            {/* Ambient glow */}
            <div
              className="pointer-events-none absolute top-0 right-0 w-80 h-80 opacity-[0.06]"
              style={{ background: 'radial-gradient(circle at top right, var(--accent), transparent 70%)' }}
            />

            {/* Header */}
            <div className="flex items-start justify-between px-8 pt-8 pb-6 border-b border-line shrink-0">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="glow-pulse w-[6px] h-[6px] rounded-full bg-accent block" />
                  <span className="text-10 uppercase tracking-018 text-accent">// contact · open to work</span>
                </div>
                <h2
                  className="font-display italic leading-none tracking-tighter text-ink"
                  style={{ fontSize: 'clamp(36px, 5vw, 56px)' }}
                >
                  Get in<br />
                  <em style={{ color: 'var(--accent)' }}>touch.</em>
                </h2>
              </div>
              <button
                onClick={onClose}
                className="text-ink-mute hover:text-ink transition-colors cursor-pointer bg-transparent border-0 mt-1"
                aria-label="Close contact panel"
              >
                <X size={18} />
              </button>
            </div>

            {/* Body */}
            <div className="flex-1 px-8 py-8">
              {state.status === 'success' ? (
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="h-full flex flex-col items-center justify-center text-center gap-4"
                >
                  <div className="w-12 h-12 border border-accent flex items-center justify-center text-accent text-20">✓</div>
                  <h3 className="font-display italic text-28 text-ink">{state.message}</h3>
                  <p className="text-12 text-ink-mute">I'll get back to you within 24 hours.</p>
                  <button
                    onClick={onClose}
                    className="mt-4 text-11 uppercase tracking-018 border border-line px-6 py-2 text-ink-mute hover:border-accent hover:text-accent transition-colors cursor-pointer bg-transparent"
                  >
                    Close
                  </button>
                </motion.div>
              ) : (
                <form action={formAction} className="grid gap-5">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-10 uppercase tracking-018 text-accent block mb-2">Name *</label>
                      <input name="name" type="text" required placeholder="Your name" className={inputClass} />
                    </div>
                    <div>
                      <label className="text-10 uppercase tracking-018 text-accent block mb-2">Email *</label>
                      <input name="email" type="email" required placeholder="you@example.com" className={inputClass} />
                    </div>
                  </div>

                  <div>
                    <label className="text-10 uppercase tracking-018 text-accent block mb-2">Subject</label>
                    <input name="subject" type="text" placeholder="What's this about?" className={inputClass} />
                  </div>

                  <div>
                    <label className="text-10 uppercase tracking-018 text-accent block mb-2">Message *</label>
                    <textarea name="message" required rows={6} placeholder="Tell me about your project…" className={`${inputClass} resize-none`} />
                  </div>

                  {state.status === 'error' && (
                    <p className="text-11 text-red-400 border border-red-400/30 px-4 py-2" aria-live="polite">
                      {state.message}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={pending}
                    className="w-full py-3 text-11 uppercase tracking-018 font-mono border transition-colors duration-150 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer bg-transparent"
                    style={{
                      borderColor: 'var(--accent)',
                      color: pending ? 'var(--ink-mute)' : 'var(--accent)',
                    }}
                  >
                    {pending ? 'Sending…' : 'Send message →'}
                  </button>
                </form>
              )}
            </div>

            {/* Footer strip */}
            <div className="px-8 py-5 border-t border-line shrink-0 grid grid-cols-2 gap-3 text-11 text-ink-mute">
              <div>
                <div className="text-10 uppercase tracking-018 text-accent mb-1">Response</div>
                Within 24 hours
              </div>
              <div>
                <div className="text-10 uppercase tracking-018 text-accent mb-1">Email</div>
                muhammaddali908@gmail.com
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
