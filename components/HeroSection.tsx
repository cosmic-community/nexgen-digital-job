export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-dark overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-brand-600/20 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-purple-600/15 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-brand-500/5 blur-3xl" />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/10 backdrop-blur-sm mb-8">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-sm text-gray-300 font-medium">
              Available for new projects
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.1] tracking-tight mb-6">
            Digital services that{' '}
            <span className="bg-gradient-to-r from-brand-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              drive results
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-gray-400 leading-relaxed mb-10 max-w-2xl">
            We design and build exceptional digital experiences — from custom web
            applications and stunning interfaces to data-driven marketing
            strategies that grow your business.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#services"
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-brand-600 text-white font-semibold text-base hover:bg-brand-700 transition-all duration-200 shadow-lg shadow-brand-600/25 hover:shadow-brand-600/40"
            >
              Explore Our Services
              <svg
                className="ml-2 w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </a>
            <a
              href="#team"
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-white/10 text-white font-semibold text-base hover:bg-white/20 transition-all duration-200 border border-white/10"
            >
              Meet the Team
            </a>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-3 gap-8 max-w-md">
            <div>
              <p className="text-2xl md:text-3xl font-bold text-white">50+</p>
              <p className="text-sm text-gray-500 mt-1">Projects Delivered</p>
            </div>
            <div>
              <p className="text-2xl md:text-3xl font-bold text-white">98%</p>
              <p className="text-sm text-gray-500 mt-1">Client Satisfaction</p>
            </div>
            <div>
              <p className="text-2xl md:text-3xl font-bold text-white">7+</p>
              <p className="text-sm text-gray-500 mt-1">Years Experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}