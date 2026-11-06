import { motion } from 'framer-motion'
import { useState } from 'react'

function FadeIn({ children, delay = 0, className = '' }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = e => {
    e.preventDefault()
    // Opens mailto — replace with a real service (Formspree, EmailJS, etc.) later
    const subject = encodeURIComponent(`Portfolio Message from ${form.name}`)
    const body    = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)
    window.open(`mailto:krishamae@email.com?subject=${subject}&body=${body}`)
    setSent(true)
    setTimeout(() => setSent(false), 4000)
  }

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-6">

        <FadeIn className="mb-16 text-center">
          <p className="text-sm font-semibold tracking-widest text-purple-500 uppercase mb-2">Let's connect</p>
          <h2 className="section-title mx-auto">Get In Touch</h2>
          <p className="text-gray-500 mt-6 max-w-md mx-auto text-base leading-relaxed">
            I'm actively looking for IT internship and junior developer opportunities.
            Whether you have a question, a project idea, or just want to say hi — my inbox is always open! 💜
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-12 items-start">

          {/* Contact info cards */}
          <FadeIn delay={0.1} className="space-y-5">
            {[
              {
                icon: (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="4" width="20" height="16" rx="2"/>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                  </svg>
                ),
                label: 'Email',
                value: 'krishamae@email.com',
                href:  'mailto:krishamae@email.com',
              },
              {
                icon: (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                ),
                label: 'LinkedIn',
                value: 'linkedin.com/in/krishamae',
                href:  'https://linkedin.com/',
              },
              {
                icon: (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                  </svg>
                ),
                label: 'GitHub',
                value: 'https://github.com/krishamaeligason',
                href:  'https://github.com/krishamaeligason',
              },
            ].map(({ icon, label, value, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-5 rounded-2xl border border-purple-100 bg-gradient-to-br from-purple-50 to-pink-50 hover:shadow-md hover:-translate-y-0.5 transition-all group"
              >
                <div className="p-3 rounded-xl bg-white shadow-sm text-purple-500 group-hover:text-pink-500 transition-colors">
                  {icon}
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wide font-medium">{label}</p>
                  <p className="text-sm font-semibold text-gray-700">{value}</p>
                </div>
              </a>
            ))}
          </FadeIn>

          {/* Contact form */}
          <FadeIn delay={0.2}>
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-2xl shadow-sm border border-purple-100 p-8 space-y-5"
            >
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1.5" htmlFor="name">
                  Your Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="e.g. Jane Recruiter"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-700 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-300 focus:border-transparent transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1.5" htmlFor="email">
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@company.com"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-700 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-300 focus:border-transparent transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1.5" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Hi Krishamae, I'd love to chat about an opportunity..."
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-700 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-300 focus:border-transparent transition-all resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 rounded-xl text-sm font-semibold text-white transition-all hover:opacity-90 hover:-translate-y-0.5 shadow-md"
                style={{ background: 'linear-gradient(135deg, #8b5cf6, #ec4899)' }}
              >
                {sent ? '✅ Message sent!' : 'Send Message →'}
              </button>
              <p className="text-xs text-center text-gray-400">
                Or email me directly at{' '}
                <a href="mailto:krishamae@email.com" className="text-purple-500 hover:underline">
                  krishamae@email.com
                </a>
              </p>
            </form>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
