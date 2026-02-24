'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navLinks = [
  { label: 'Services', href: '/#services' },
  { label: 'Team', href: '/#team' },
  { label: 'About', href: '/about' }, // Changed: Added About page link
  { label: 'Testimonials', href: '/#testimonials' },
  { label: 'Contact', href: '/#contact' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  // Changed: Determine if we're on a page with a dark hero (home or about)
  const isDarkHero = pathname === '/' || pathname === '/about'

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div
              className={`w-8 h-8 rounded-lg bg-gradient-to-br from-brand-500 to-purple-600 flex items-center justify-center`}
            >
              <span className="text-white font-bold text-sm">N</span>
            </div>
            <span
              className={`text-lg font-bold transition-colors duration-300 ${
                scrolled ? 'text-gray-900' : isDarkHero ? 'text-white' : 'text-gray-900'
              }`}
            >
              NexGen
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              // Changed: Use Link for internal pages, anchor for hash links
              const isHashLink = link.href.includes('#')
              const isActive = !isHashLink && pathname === link.href

              if (isHashLink) {
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    className={`text-sm font-medium transition-colors duration-300 hover:text-brand-500 ${
                      scrolled ? 'text-gray-600' : isDarkHero ? 'text-gray-300 hover:text-white' : 'text-gray-600'
                    }`}
                  >
                    {link.label}
                  </a>
                )
              }

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium transition-colors duration-300 hover:text-brand-500 ${
                    isActive
                      ? 'text-brand-500'
                      : scrolled
                        ? 'text-gray-600'
                        : isDarkHero
                          ? 'text-gray-300 hover:text-white'
                          : 'text-gray-600'
                  }`}
                >
                  {link.label}
                </Link>
              )
            })}
            <a
              href="/#contact"
              className="inline-flex items-center px-5 py-2.5 rounded-lg bg-brand-600 text-white text-sm font-medium hover:bg-brand-700 transition-colors duration-200"
            >
              Get Started
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors ${
              scrolled ? 'text-gray-600' : isDarkHero ? 'text-white' : 'text-gray-600'
            }`}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {menuOpen && (
          <div className="md:hidden bg-white rounded-xl shadow-lg border border-gray-100 mt-2 p-4 mb-4">
            <nav className="flex flex-col gap-1">
              {navLinks.map((link) => {
                const isHashLink = link.href.includes('#')

                if (isHashLink) {
                  return (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                      className="text-gray-700 hover:text-brand-600 hover:bg-brand-50 px-4 py-3 rounded-lg text-sm font-medium transition-colors"
                    >
                      {link.label}
                    </a>
                  )
                }

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="text-gray-700 hover:text-brand-600 hover:bg-brand-50 px-4 py-3 rounded-lg text-sm font-medium transition-colors"
                  >
                    {link.label}
                  </Link>
                )
              })}
              <a
                href="/#contact"
                onClick={() => setMenuOpen(false)}
                className="mt-2 text-center px-5 py-3 rounded-lg bg-brand-600 text-white text-sm font-medium hover:bg-brand-700 transition-colors"
              >
                Get Started
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}