'use server'

import nodemailer from 'nodemailer'

export type ContactState = {
  status: 'idle' | 'success' | 'error'
  message: string
}

export async function sendContactEmail(
  _prevState: ContactState,
  formData: FormData,
): Promise<ContactState> {
  const name    = (formData.get('name')    as string | null)?.trim()
  const email   = (formData.get('email')   as string | null)?.trim()
  const subject = (formData.get('subject') as string | null)?.trim()
  const message = (formData.get('message') as string | null)?.trim()

  if (!name || !email || !message) {
    return { status: 'error', message: 'Name, email, and message are required.' }
  }

  const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRe.test(email)) {
    return { status: 'error', message: 'Please enter a valid email address.' }
  }

  const user = process.env.GMAIL_USER
  const pass = process.env.GMAIL_APP_PASSWORD

  if (!user || !pass) {
    console.error('Missing GMAIL_USER or GMAIL_APP_PASSWORD env vars')
    return { status: 'error', message: 'Email service is not configured. Please reach out directly.' }
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: { user, pass },
  })

  await transporter.sendMail({
    from:    `"Portfolio Contact" <${user}>`,
    to:      'muhammaddali908@gmail.com',
    replyTo: email,
    subject: subject ? `[Portfolio] ${subject}` : `[Portfolio] Message from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    html: `
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
      ${subject ? `<p><strong>Subject:</strong> ${subject}</p>` : ''}
      <hr/>
      <p style="white-space:pre-wrap">${message}</p>
    `,
  })

  return { status: 'success', message: 'Message sent! I\'ll get back to you soon.' }
}
