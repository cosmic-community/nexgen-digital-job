import { TeamMember } from '@/types'

interface TeamMemberCardProps {
  member: TeamMember
}

export default function TeamMemberCard({ member }: TeamMemberCardProps) {
  const { title, metadata } = member
  const role = metadata.role || ''
  const bio = metadata.bio || ''
  const photo = metadata.photo
  const email = metadata.email

  return (
    <div className="group bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      {/* Photo */}
      <div className="relative h-72 overflow-hidden bg-gray-100">
        {photo ? (
          <img
            src={`${photo.imgix_url}?w=600&h=600&fit=crop&auto=format,compress`}
            alt={title}
            width={300}
            height={300}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-brand-100 to-purple-100">
            <span className="text-6xl">👤</span>
          </div>
        )}
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Info */}
      <div className="p-6">
        <h3 className="text-lg font-bold text-gray-900">{title}</h3>
        <p className="text-brand-600 text-sm font-semibold mt-1">{role}</p>

        {bio && (
          <p className="text-gray-500 text-sm leading-relaxed mt-3 line-clamp-3">
            {bio}
          </p>
        )}

        {/* Contact */}
        {email && (
          <a
            href={`mailto:${email}`}
            className="inline-flex items-center gap-2 mt-4 text-sm text-gray-400 hover:text-brand-600 transition-colors duration-200"
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
                strokeWidth={2}
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