import { Service } from '@/types'

interface ServiceCardProps {
  service: Service
}

export default function ServiceCard({ service }: ServiceCardProps) {
  const { title, metadata } = service
  const icon = metadata.icon || '🛠️'
  const description = metadata.description || ''
  const image = metadata.featured_image

  return (
    <div className="group bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl hover:border-brand-200 transition-all duration-300 hover:-translate-y-1">
      {/* Image */}
      {image && (
        <div className="relative h-48 overflow-hidden">
          <img
            src={`${image.imgix_url}?w=800&h=400&fit=crop&auto=format,compress`}
            alt={title}
            width={400}
            height={200}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        </div>
      )}

      {/* Content */}
      <div className="p-6">
        {/* Icon */}
        <div className="w-12 h-12 rounded-xl bg-brand-50 flex items-center justify-center text-2xl mb-4 group-hover:bg-brand-100 transition-colors duration-300">
          {icon}
        </div>

        <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
        <p className="text-gray-500 leading-relaxed text-sm">{description}</p>

        {/* Learn more link */}
        <div className="mt-5 flex items-center text-brand-600 text-sm font-semibold group-hover:text-brand-700 transition-colors">
          <span>Learn more</span>
          <svg
            className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
      </div>
    </div>
  )
}