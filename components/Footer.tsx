export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer id="contact" className="bg-dark-light border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-500 to-purple-600 flex items-center justify-center">
                <span className="text-white font-bold text-sm">N</span>
              </div>
              <span className="text-lg font-bold text-white">
                NexGen Digital
              </span>
            </div>
            <p className="text-gray-400 leading-relaxed max-w-md text-sm">
              We design and build exceptional digital experiences — from custom
              web applications and stunning interfaces to data-driven marketing
              strategies that grow your business.
            </p>

            {/* Social links placeholder */}
            <div className="flex gap-4 mt-6">
              {['Twitter', 'LinkedIn', 'GitHub'].map((platform) => (
                <a
                  key={platform}
                  href="#"
                  className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all duration-200"
                  aria-label={platform}
                >
                  <span className="text-xs font-semibold">
                    {platform.charAt(0)}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                { label: 'Services', href: '#services' },
                { label: 'Team', href: '#team' },
                { label: 'Testimonials', href: '#testimonials' },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">
              Get in Touch
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:hello@nexgen.digital"
                  className="text-gray-400 hover:text-white text-sm transition-colors duration-200"
                >
                  hello@nexgen.digital
                </a>
              </li>
              <li className="text-gray-400 text-sm">
                San Francisco, CA
              </li>
            </ul>

            <a
              href="mailto:hello@nexgen.digital"
              className="inline-flex items-center mt-6 px-5 py-2.5 rounded-lg bg-brand-600 text-white text-sm font-medium hover:bg-brand-700 transition-colors duration-200"
            >
              Start a Project
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {currentYear} NexGen Digital. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm">
            Powered by{' '}
            <a
              href="https://www.cosmicjs.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-400 hover:text-brand-300 transition-colors"
            >
              Cosmic
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}