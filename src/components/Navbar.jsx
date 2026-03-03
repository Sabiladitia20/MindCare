import { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { path: '/', label: 'Beranda' },
  { path: '/about', label: 'Tentang' },
  { path: '/artikel', label: 'Artikel' },
  { path: '/kuis', label: 'Self-Check' },
  { path: '/layanan', label: 'Layanan' },
  { path: '/contact', label: 'Kontak' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close menu on route change
  const handleLinkClick = () => setIsOpen(false)

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-lg shadow-lg shadow-teal/5'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group" onClick={handleLinkClick}>
            <div className="w-9 h-9 bg-gradient-to-br from-sage to-calm rounded-xl 
                          flex items-center justify-center group-hover:scale-110 
                          transition-transform duration-300 shadow-md shadow-sage/20">
              <span className="text-white text-lg font-bold">M</span>
            </div>
            <span className="font-heading text-xl font-bold text-teal">
              Mind<span className="text-sage">Care</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.path === '/'}
                className={({ isActive }) =>
                  `px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                    isActive
                      ? 'bg-sage/10 text-sage font-semibold'
                      : 'text-teal/70 hover:text-sage hover:bg-sage/5'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <a
              href="tel:119"
              className="ml-2 bg-gradient-to-r from-sage to-sage-dark text-white text-sm 
                       font-semibold px-5 py-2.5 rounded-xl hover:shadow-lg 
                       hover:shadow-sage/25 transition-all duration-300 hover:scale-105"
            >
              🆘 Darurat
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden relative w-10 h-10 flex items-center justify-center 
                     rounded-xl hover:bg-sage/10 transition-colors"
            aria-label="Toggle menu"
            id="mobile-menu-toggle"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <motion.span
                animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                className="w-full h-0.5 bg-teal rounded-full origin-left"
              />
              <motion.span
                animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                className="w-full h-0.5 bg-teal rounded-full"
              />
              <motion.span
                animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                className="w-full h-0.5 bg-teal rounded-full origin-left"
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white/95 backdrop-blur-lg border-t border-calm/20 overflow-hidden"
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <NavLink
                    to={link.path}
                    end={link.path === '/'}
                    onClick={handleLinkClick}
                    className={({ isActive }) =>
                      `block px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                        isActive
                          ? 'bg-sage/10 text-sage font-semibold'
                          : 'text-teal/70 hover:text-sage hover:bg-sage/5'
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                </motion.div>
              ))}
              <motion.a
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.05 }}
                href="tel:119"
                className="block text-center mt-2 bg-gradient-to-r from-red-500 to-red-600 
                         text-white text-sm font-bold px-5 py-3 rounded-xl"
              >
                🆘 Butuh Bantuan Darurat? 119 ext 8
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
