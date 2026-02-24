import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { getServices, getTeamMembers } from '@/lib/cosmic'
import { Service, TeamMember } from '@/types'

export const revalidate = 60

export const metadata = {
  title: 'About Us — NexGen Digital',
  description:
    'Learn about our mission, meet our talented team, and discover the services that set us apart in the digital landscape.',
}

export default async function AboutPage() {
  const [services, teamMembers] = await Promise.all([
    getServices(),
    getTeamMembers(),
  ])

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 bg-dark overflow-hidden">
          {/* Background gradient orbs */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-brand-600/20 blur-3xl" />
            <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-purple-600/15 blur-3xl" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-brand-300 text-sm font-semibold mb-6">
                About Us
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-[1.1] tracking-tight mb-6">
                We build digital{' '}
                <span className="bg-gradient-to-r from-brand-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  experiences
                </span>{' '}
                that matter
              </h1>
              <p className="text-lg md:text-xl text-gray-400 leading-relaxed max-w-2xl mx-auto">
                Founded in 2018, NexGen Digital partners with businesses of all
                sizes to create exceptional digital products and strategies that
                drive real, measurable growth.
              </p>
            </div>
          </div>
        </section>

        {/* Mission & Values Section */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Left: Mission */}
              <div>
                <span className="inline-block px-4 py-1.5 rounded-full bg-brand-100 text-brand-700 text-sm font-semibold mb-4">
                  Our Mission
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Empowering businesses to thrive in the digital landscape
                </h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  We believe every business deserves access to world-class
                  digital solutions. Our mission is to bridge the gap between
                  ambitious ideas and exceptional execution, helping our clients
                  stand out in an increasingly competitive digital world.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  From startups to established enterprises, we bring the same
                  level of dedication, creativity, and technical excellence to
                  every project. Our approach is collaborative, transparent, and
                  laser-focused on delivering results that matter.
                </p>
              </div>

              {/* Right: Values */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <ValueCard
                  icon="🎯"
                  title="Client-First Approach"
                  description="Your goals are our goals. We listen, understand, and deliver solutions tailored to your unique needs."
                />
                <ValueCard
                  icon="💡"
                  title="Innovation Driven"
                  description="We stay at the forefront of technology and design trends to give you a competitive edge."
                />
                <ValueCard
                  icon="🤝"
                  title="Transparent Partnership"
                  description="Open communication and honest feedback are the foundation of every client relationship."
                />
                <ValueCard
                  icon="🚀"
                  title="Results Obsessed"
                  description="We measure success by the tangible impact our work has on your business growth."
                />
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        {teamMembers && teamMembers.length > 0 && (
          <section className="py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <span className="inline-block px-4 py-1.5 rounded-full bg-purple-100 text-purple-700 text-sm font-semibold mb-4">
                  Our People
                </span>
                <h2 className="section-heading">The Team Behind the Work</h2>
                <p className="section-subheading">
                  Meet the talented individuals who bring passion, expertise, and
                  creativity to every project we take on.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {teamMembers.map((member: TeamMember) => (
                  <AboutTeamCard key={member.id} member={member} />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Services Overview Section */}
        {services && services.length > 0 && (
          <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <span className="inline-block px-4 py-1.5 rounded-full bg-brand-100 text-brand-700 text-sm font-semibold mb-4">
                  What We Offer
                </span>
                <h2 className="section-heading">Our Core Services</h2>
                <p className="section-subheading">
                  End-to-end digital solutions designed to help your business
                  succeed online and beyond.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {services.map((service: Service) => (
                  <AboutServiceCard key={service.id} service={service} />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA Section */}
        <section className="py-24 bg-dark relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-brand-600/10 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-purple-600/10 blur-3xl" />

          <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to start your next project?
            </h2>
            <p className="text-lg text-gray-400 mb-10 max-w-xl mx-auto">
              Let&apos;s discuss how we can help bring your vision to life. Our
              team is ready to partner with you on your next big idea.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/#contact"
                className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-brand-600 text-white font-semibold text-base hover:bg-brand-700 transition-all duration-200 shadow-lg shadow-brand-600/25 hover:shadow-brand-600/40"
              >
                Get in Touch
              </a>
              <a
                href="/#services"
                className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-white/10 text-white font-semibold text-base hover:bg-white/20 transition-all duration-200 border border-white/10"
              >
                View Services
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

// Changed: Inline component for value cards on the about page
function ValueCard({
  icon,
  title,
  description,
}: {
  icon: string
  title: string
  description: string
}) {
  return (
    <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:shadow-md transition-all duration-300">
      <span className="text-3xl mb-4 block">{icon}</span>
      <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
    </div>
  )
}

// Changed: Team card specific to the about page with extended bio
function AboutTeamCard({ member }: { member: TeamMember }) {
  const { metadata } = member
  const role = metadata.role || ''
  const bio = metadata.bio || ''
  const photo = metadata.photo
  const email = metadata.email || ''

  return (
    <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      {/* Photo */}
      <div className="aspect-[4/3] overflow-hidden bg-gray-100">
        {photo ? (
          <img
            src={`${photo.imgix_url}?w=800&h=600&fit=crop&auto=format,compress`}
            alt={member.title}
            width={400}
            height={300}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-brand-100 to-purple-100 flex items-center justify-center">
            <span className="text-5xl font-bold text-brand-300">
              {member.title.charAt(0)}
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-lg font-bold text-gray-900 mb-1">
          {member.title}
        </h3>
        <p className="text-brand-600 text-sm font-medium mb-3">{role}</p>
        {bio && (
          <p className="text-gray-600 text-sm leading-relaxed mb-4">{bio}</p>
        )}
        {email && (
          <a
            href={`mailto:${email}`}
            className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-brand-600 transition-colors"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            {email}
          </a>
        )}
      </div>
    </div>
  )
}

// Changed: Service card specific to the about page with featured image
function AboutServiceCard({ service }: { service: Service }) {
  const { metadata } = service
  const description = metadata.description || ''
  const icon = metadata.icon || ''
  const featuredImage = metadata.featured_image

  return (
    <div className="bg-gray-50 rounded-2xl border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      {/* Featured Image */}
      {featuredImage && (
        <div className="aspect-[16/9] overflow-hidden">
          <img
            src={`${featuredImage.imgix_url}?w=800&h=450&fit=crop&auto=format,compress`}
            alt={service.title}
            width={400}
            height={225}
            className="w-full h-full object-cover"
          />
        </div>
      )}

      {/* Content */}
      <div className="p-6">
        <div className="flex items-center gap-3 mb-3">
          {icon && <span className="text-2xl">{icon}</span>}
          <h3 className="text-lg font-bold text-gray-900">{service.title}</h3>
        </div>
        <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  )
}