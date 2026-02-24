import { Testimonial } from '@/types'

interface TestimonialCardProps {
  testimonial: Testimonial
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  const { metadata } = testimonial
  const quote = metadata.quote || ''
  const clientName = metadata.client_name || ''
  const company = metadata.company || ''
  const photo = metadata.photo

  return (
    <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 flex flex-col">
      {/* Quote icon */}
      <svg
        className="w-10 h-10 text-brand-400 mb-6 flex-shrink-0"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
      </svg>

      {/* Quote text */}
      <p className="text-gray-300 leading-relaxed text-base flex-1 mb-8">
        &ldquo;{quote}&rdquo;
      </p>

      {/* Client info */}
      <div className="flex items-center gap-4 mt-auto">
        {photo ? (
          <img
            src={`${photo.imgix_url}?w=96&h=96&fit=crop&auto=format,compress`}
            alt={clientName}
            width={48}
            height={48}
            className="w-12 h-12 rounded-full object-cover ring-2 ring-white/20"
          />
        ) : (
          <div className="w-12 h-12 rounded-full bg-brand-600/30 flex items-center justify-center ring-2 ring-white/20">
            <span className="text-white font-bold text-lg">
              {clientName.charAt(0)}
            </span>
          </div>
        )}

        <div>
          <p className="text-white font-semibold text-sm">{clientName}</p>
          {company && (
            <p className="text-gray-400 text-sm">{company}</p>
          )}
        </div>
      </div>
    </div>
  )
}