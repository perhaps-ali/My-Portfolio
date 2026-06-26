'use client'

import { useActionState } from 'react'
import { sendContactEmail, type ContactState } from '@/app/actions/contact'

const initialState: ContactState = { status: 'idle', message: '' }

const inputClass =
  'w-full bg-transparent border border-line px-4 py-3 text-12 text-ink font-mono placeholder:text-ink-mute focus:outline-none focus:border-accent transition-colors duration-150'

export default function ContactForm() {
  const [state, formAction, pending] = useActionState(sendContactEmail, initialState)

  if (state.status === 'success') {
    return (
      <div className="border border-accent px-6 py-8 text-center">
        <div className="text-10 uppercase tracking-018 text-accent mb-2">Sent</div>
        <p className="font-display italic text-20 text-ink">{state.message}</p>
      </div>
    )
  }

  return (
    <form action={formAction} className="grid gap-4">
      <div className="grid grid-cols-1 md:grid-cols-2-even gap-4">
        <div>
          <label className="text-10 uppercase tracking-018 text-accent block mb-2">Name *</label>
          <input
            name="name"
            type="text"
            required
            placeholder="Your name"
            className={inputClass}
          />
        </div>
        <div>
          <label className="text-10 uppercase tracking-018 text-accent block mb-2">Email *</label>
          <input
            name="email"
            type="email"
            required
            placeholder="you@example.com"
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label className="text-10 uppercase tracking-018 text-accent block mb-2">Subject</label>
        <input
          name="subject"
          type="text"
          placeholder="What's this about?"
          className={inputClass}
        />
      </div>

      <div>
        <label className="text-10 uppercase tracking-018 text-accent block mb-2">Message *</label>
        <textarea
          name="message"
          required
          rows={6}
          placeholder="Tell me about your project…"
          className={`${inputClass} resize-none`}
        />
      </div>

      {state.status === 'error' && (
        <p className="text-11 text-red-400 border border-red-400/30 px-4 py-2" aria-live="polite">
          {state.message}
        </p>
      )}

      <button
        type="submit"
        disabled={pending}
        className="self-start px-8 py-3 text-11 uppercase tracking-018 font-mono border transition-colors duration-150 disabled:opacity-50 disabled:cursor-not-allowed"
        style={{
          borderColor: 'var(--accent)',
          color: pending ? 'var(--ink-mute)' : 'var(--accent)',
        }}
      >
        {pending ? 'Sending…' : 'Send message →'}
      </button>
    </form>
  )
}
