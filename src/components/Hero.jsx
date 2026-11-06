import { motion } from 'framer-motion'

const fadeUp = (delay = 0) => ({
  initial:   { opacity: 0, y: 30 },
  animate:   { opacity: 1, y: 0  },
  transition:{ duration: 0.7, delay, ease: 'easeOut' },
})

export default function Hero() {
  return (
    <section
      id="hero"
      className="hero-gradient min-h-screen flex items-center justify-center relative overflow-hidden pt-16"
    >
      {/* Decorative blobs */}
      <div
        aria-hidden="true"
        className="absolute -top-32 -left-32 w-96 h-96 rounded-full opacity-30 blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, #c4b5fd 0%, transparent 70%)' }}
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full opacity-30 blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, #fda4af 0%, transparent 70%)' }}
      />

      <div className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        {/* Text side */}
        <div className="order-2 md:order-1">
          <motion.p
            {...fadeUp(0.1)}
            className="text-sm font-semibold tracking-widest text-purple-500 uppercase mb-3"
          >
            👋 Hello, I'm
          </motion.p>

          <motion.h1
            {...fadeUp(0.2)}
            className="text-5xl md:text-6xl font-bold leading-tight mb-4"
            style={{ fontFamily: "'Playfair Display', serif", color: '#1f1535' }}
          >
            Krishamae{' '}
            <span className="gradient-text">Ligason</span>
          </motion.h1>

          <motion.p
            {...fadeUp(0.35)}
            className="text-lg text-gray-500 font-medium mb-2"
          >
            Web Systems Technology Student
          </motion.p>
          <motion.p
            {...fadeUp(0.4)}
            className="text-base text-gray-400 leading-relaxed mb-8 max-w-md"
          >
            Passionate frontend developer crafting clean, user-friendly web
            experiences with modern technologies. Open to IT internships and
            entry-level opportunities.
          </motion.p>

          <motion.div {...fadeUp(0.5)} className="flex flex-wrap gap-4">
            <a
              href="#projects"
              onClick={e => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({ behavior:'smooth' }) }}
              className="px-6 py-3 rounded-full text-sm font-semibold text-white shadow-md transition-all hover:opacity-90 hover:shadow-lg hover:-translate-y-0.5"
              style={{ background: 'linear-gradient(135deg, #8b5cf6, #ec4899)' }}
            >
              View My Work
            </a>
            <a
              href="#contact"
              onClick={e => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior:'smooth' }) }}
              className="px-6 py-3 rounded-full text-sm font-semibold border-2 border-purple-300 text-purple-600 hover:bg-purple-50 transition-all hover:-translate-y-0.5"
            >
              Get In Touch
            </a>
          </motion.div>

          {/* Social links */}
          <motion.div {...fadeUp(0.6)} className="flex gap-4 mt-8">
            {/* GitHub */}
            <a
              href="https://github.com/krishamaeligason"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-2.5 rounded-full bg-white shadow-sm border border-purple-100 text-gray-500 hover:text-purple-600 hover:border-purple-300 transition-all hover:-translate-y-0.5"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
              </svg>
            </a>
            {/* Facebook */}
            <a
              href="https://www.facebook.com/share/1DR65YUuY2/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="p-2.5 rounded-full bg-white shadow-sm border border-purple-100 text-gray-500 hover:text-purple-600 hover:border-purple-300 transition-all hover:-translate-y-0.5"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            {/* Email */}
            <a
              href="mailto:krishamae@email.com"
              aria-label="Email"
              className="p-2.5 rounded-full bg-white shadow-sm border border-purple-100 text-gray-500 hover:text-purple-600 hover:border-purple-300 transition-all hover:-translate-y-0.5"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="4" width="20" height="16" rx="2"/>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
              </svg>
            </a>
          </motion.div>
        </div>

        {/* Photo side */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          className="order-1 md:order-2 flex justify-center"
        >
          <div className="relative">
            {/* Outer glow ring */}
            <div
              className="absolute inset-0 rounded-full blur-2xl opacity-40 scale-110"
              style={{ background: 'linear-gradient(135deg, #c4b5fd, #fda4af)' }}
            />
            {/* Photo */}
            <div
              className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-2xl"
              style={{ boxShadow: '0 0 0 8px rgba(196,181,253,0.3), 0 25px 50px rgba(139,92,246,0.2)' }}
            >
              <img
                src="/profile.png"
                alt="Krishamae Ligason"
                className="w-full h-full object-cover object-top"
              />
            </div>

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="absolute -bottom-3 -right-3 bg-white rounded-2xl shadow-lg px-4 py-2 border border-purple-100"
            >
              <p className="text-xs text-gray-400 leading-tight">Available for</p>
              <p className="text-sm font-bold text-purple-600 leading-tight">Internship 🎓</p>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.a
        href="#about"
        onClick={e => { e.preventDefault(); document.getElementById('about')?.scrollIntoView({ behavior:'smooth' }) }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-gray-400 hover:text-purple-500 transition-colors"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="6 9 12 15 18 9"/>
          </svg>
        </motion.div>
      </motion.a>
    </section>
  )
}
