import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import ServicesSection from '@/components/ServicesSection'
import TeamSection from '@/components/TeamSection'
import TestimonialsSection from '@/components/TestimonialsSection'
import Footer from '@/components/Footer'
import { getServices, getTeamMembers, getTestimonials } from '@/lib/cosmic'

export const revalidate = 60

export default async function HomePage() {
  const [services, teamMembers, testimonials] = await Promise.all([
    getServices(),
    getTeamMembers(),
    getTestimonials(),
  ])

  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ServicesSection services={services} />
        <TeamSection teamMembers={teamMembers} />
        <TestimonialsSection testimonials={testimonials} />
      </main>
      <Footer />
    </>
  )
}