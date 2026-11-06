import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const links = [
  { label: 'Home',     href: '#hero'     },
  { label: 'About',    href: '#about'    },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact',  href: '#contact'  },
]

export default function Navbar() {
  const [scrolled,     setScrolled]     = useState(false)
  const [menuOpen,     setMenuOpen]     = useState(false)
  const [activeSection,setActiveSection]= useState('hero')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20)
      const sections = ['hero', 'about', 'projects', 'contact']
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id)
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(id); break
        }
      }
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (href) => {
    setMenuOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0,   opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/80 backdrop-blur-md shadow-sm border-b border-purple-100'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#hero"
          onClick={e => { e.preventDefault(); handleNav('#hero') }}
          className="font-display text-xl font-bold gradient-text select-none"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          KL.
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map(({ label, href }) => {
            const id = href.replace('#', '')
            return (
              <li key={label}>
                <button
                  onClick={() => handleNav(href)}
                  className={`text-sm font-medium transition-colors relative pb-1 ${
                    activeSection === id
                      ? 'text-purple-600'
                      : 'text-gray-500 hover:text-purple-500'
                  }`}
                >
                  {label}
                  {activeSection === id && (
                    <motion.span
                      layoutId="underline"
                      className="absolute left-0 -bottom-0.5 w-full h-0.5 rounded-full"
                      style={{ background: 'linear-gradient(90deg,#8b5cf6,#ec4899)' }}
                    />
                  )}
                </button>
              </li>
            )
          })}
        </ul>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(o => !o)}
          aria-label="Toggle menu"
          className="md:hidden p-2 rounded-lg text-gray-500 hover:text-purple-500 hover:bg-purple-50 transition-colors"
        >
          {menuOpen ? (
            /* X icon */
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          ) : (
            /* Hamburger icon */
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="6"  x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/>
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="drawer"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{   opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-white/95 backdrop-blur border-b border-purple-100 shadow-lg"
          >
            <ul className="flex flex-col py-4 px-6 gap-4">
              {links.map(({ label, href }) => (
                <li key={label}>
                  <button
                    onClick={() => handleNav(href)}
                    className="text-gray-600 hover:text-purple-600 font-medium transition-colors w-full text-left"
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
