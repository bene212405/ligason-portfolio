import { motion } from 'framer-motion'

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

export default function Projects() {
  return (
    <section id="projects" className="py-24 gradient-bg">
      <div className="max-w-5xl mx-auto px-6">

        <FadeIn className="mb-16">
          <p className="text-sm font-semibold tracking-widest text-purple-500 uppercase mb-2">What I've built</p>
          <h2 className="section-title">Featured Projects</h2>
        </FadeIn>

        {/* Single featured project — wide card layout */}
        <FadeIn delay={0.15}>
          <motion.div
            whileHover={{ y: -6 }}
            transition={{ type: 'spring', stiffness: 280, damping: 22 }}
            className="group relative bg-white rounded-3xl overflow-hidden border border-purple-100"
            style={{ boxShadow: '0 8px 40px rgba(139,92,246,0.10)' }}
          >
            {/* ── Decorative top banner ── */}
            <div className="relative bg-gradient-to-br from-violet-100 via-purple-50 to-fuchsia-100 h-52 flex items-center justify-between px-10 overflow-hidden">

              {/* Ghost number watermark */}
              <span
                className="absolute right-6 bottom-0 leading-none font-black select-none pointer-events-none"
                style={{
                  fontSize: '11rem',
                  color: 'rgba(139,92,246,0.10)',
                  fontFamily: "'Playfair Display', serif",
                  lineHeight: 1,
                }}
              >
                01
              </span>

              {/* Left side: label + featured badge */}
              <div className="relative z-10 flex flex-col gap-3">
                <span className="text-xs font-bold tracking-widest uppercase text-purple-400">
                  Project 01
                </span>
                <span
                  className="inline-flex items-center gap-1.5 text-xs font-bold px-4 py-1.5 rounded-full text-white w-fit"
                  style={{ background: 'linear-gradient(135deg, #8b5cf6, #ec4899)' }}
                >
                  ✦ Featured Project
                </span>
                <h3
                  className="text-3xl md:text-4xl font-bold text-gray-800 mt-1 leading-tight"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Study Habit Tracker
                </h3>
              </div>

              {/* Right side: frosted icon chips */}
              <div className="relative z-10 flex gap-3 items-center">
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center shadow-sm"
                  style={{ background: 'rgba(255,255,255,0.75)', backdropFilter: 'blur(8px)' }}
                >
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#8b5cf6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
                  </svg>
                </div>
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center shadow-sm"
                  style={{ background: 'rgba(255,255,255,0.75)', backdropFilter: 'blur(8px)' }}
                >
                  {/* Book / study icon */}
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#8b5cf6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
                  </svg>
                </div>
              </div>

              {/* Hover sweep line */}
              <div
                className="absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full transition-all duration-500 ease-out"
                style={{ background: 'linear-gradient(90deg, #8b5cf6, #ec4899)' }}
              />
            </div>

            {/* ── Card body ── */}
            <div className="p-10">
              <div className="grid md:grid-cols-2 gap-10 items-start">

                {/* Description */}
                <div>
                  <p className="text-gray-500 leading-relaxed text-base mb-6">
                    A productivity web app designed to help students build consistent study
                    routines. Features include habit logging, streak tracking, and progress
                    visualization — built to solve a real student problem I personally experienced.
                  </p>

                  {/* Highlights */}
                  <ul className="space-y-2.5">
                    {[
                      'Track daily study habits with streaks',
                      'Visualize progress over time',
                      'Fully responsive, mobile-first design',
                      'Built with real students in mind',
                    ].map(item => (
                      <li key={item} className="flex items-start gap-2.5 text-sm text-gray-500">
                        <span
                          className="mt-0.5 w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0"
                          style={{ background: 'linear-gradient(135deg,#8b5cf6,#ec4899)' }}
                        >
                          <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12"/>
                          </svg>
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech stack + links */}
                <div className="flex flex-col gap-7">
                  <div>
                    <p className="text-xs font-bold tracking-widest uppercase text-gray-400 mb-3">Tech Stack</p>
                    <div className="flex flex-wrap gap-2">
                      {['React', 'Tailwind CSS', 'JavaScript', 'LocalStorage'].map(t => (
                        <span
                          key={t}
                          className="text-sm px-4 py-1.5 rounded-full font-medium border"
                          style={{
                            background: 'rgba(139,92,246,0.07)',
                            borderColor: 'rgba(139,92,246,0.2)',
                            color: '#8b5cf6',
                          }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action buttons */}
                  <div className="flex flex-wrap gap-3 pt-4 border-t border-gray-100">
                    <a
                      href="https://github.com/krishamaeligason"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-5 py-2.5 rounded-full border-2 border-purple-200 text-purple-600 text-sm font-semibold hover:bg-purple-50 transition-all hover:-translate-y-0.5"
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                      </svg>
                      Source Code
                    </a>
                    <a
                      href="https://your-live-link.vercel.app"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-5 py-2.5 rounded-full text-white text-sm font-semibold transition-all hover:opacity-90 hover:-translate-y-0.5 shadow-md"
                      style={{ background: 'linear-gradient(135deg, #8b5cf6, #ec4899)' }}
                    >
                      Live Demo
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </FadeIn>

        {/* CTA */}
        <FadeIn delay={0.3} className="mt-14 text-center">
          <p className="text-gray-400 text-sm mb-5">More projects coming soon — stay tuned! ✨</p>
          <a
            href="https://github.com/krishamaeligason"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full border-2 border-purple-300 text-purple-600 text-sm font-semibold hover:bg-purple-50 transition-all hover:-translate-y-0.5"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
            </svg>
            View GitHub Profile
          </a>
        </FadeIn>

      </div>
    </section>
  )
}
