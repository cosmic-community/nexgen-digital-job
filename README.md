# NexGen Digital

![NexGen Digital](https://imgix.cosmicjs.com/f15d1720-11a2-11f1-9b1d-01a3fa4a4153-photo-1561070791-2526d30994b5-1771952694752.jpg?w=1200&h=300&fit=crop&auto=format,compress)

A modern, responsive website for a digital services company — showcasing services, team members, and client testimonials. Built with Next.js 16 and powered by [Cosmic](https://www.cosmicjs.com).

## Features

- 🎨 **Modern Dark-to-Light Design** — Bold hero with gradient accents and clean content sections
- 🛠️ **Dynamic Services Section** — CMS-powered service cards with icons and featured images
- 👥 **Team Profiles** — Photo cards with bios, roles, and contact info
- ⭐ **Client Testimonials** — Quote cards with client photos and company names
- 📱 **Fully Responsive** — Mobile-first layouts with adaptive grids
- ⚡ **Server-Side Rendering** — Fast initial load with Next.js 16 App Router
- 🔄 **CMS-Managed Content** — Update everything through the Cosmic dashboard

## Clone this Project

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Project](https://img.shields.io/badge/Clone%20this%20Project-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](http://localhost:3040/projects/new?clone_bucket=699dd4c6c17a6dfd89f0482e&clone_repository=699ddc35cf8f1a87b23b9a35)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "A digital services company website with services, team members, and testimonials"

### Code Generation Prompt

> "Based on the content model I created for 'A digital services company website with services, team members, and testimonials', now build a complete web application that showcases this content. Include a modern, responsive design with proper navigation, content display, and user-friendly interface."

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## Technologies

- [Next.js 16](https://nextjs.org/) — React framework with App Router
- [React 19](https://react.dev/) — UI library
- [Tailwind CSS 3](https://tailwindcss.com/) — Utility-first CSS
- [Cosmic](https://www.cosmicjs.com/docs) — Headless CMS
- [TypeScript 5](https://www.typescriptlang.org/) — Type safety

## Getting Started

### Prerequisites

- [Bun](https://bun.sh/) (or Node.js 18+)
- A [Cosmic](https://www.cosmicjs.com) account with the content model set up

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd nexgen-digital

# Install dependencies
bun install

# Set up environment variables
cp .env.example .env.local
# Edit .env.local with your Cosmic credentials

# Start the development server
bun dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Cosmic SDK Examples

### Fetching Services

```typescript
import { cosmic } from '@/lib/cosmic'

const { objects: services } = await cosmic.objects
  .find({ type: 'services' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1)
```

### Fetching Team Members

```typescript
const { objects: team } = await cosmic.objects
  .find({ type: 'team-members' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1)
```

### Fetching Testimonials

```typescript
const { objects: testimonials } = await cosmic.objects
  .find({ type: 'testimonials' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1)
```

## Cosmic CMS Integration

This application uses three content types from your Cosmic bucket:

| Content Type | Fields | Purpose |
|---|---|---|
| **Services** | description, icon, featured_image | Showcase company offerings |
| **Team Members** | role, bio, photo, email | Display team profiles |
| **Testimonials** | quote, client_name, company, photo | Show client feedback |

All content is fetched server-side using the Cosmic SDK and rendered with Next.js Server Components for optimal performance.

## Deployment Options

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the project into [Vercel](https://vercel.com)
3. Add environment variables in the Vercel dashboard:
   - `COSMIC_BUCKET_SLUG`
   - `COSMIC_READ_KEY`
   - `COSMIC_WRITE_KEY`
4. Deploy!

### Netlify

1. Push your code to GitHub
2. Import into [Netlify](https://netlify.com)
3. Set build command: `bun run build`
4. Set publish directory: `.next`
5. Add environment variables in site settings
6. Deploy!

---

Built with [Cosmic](https://www.cosmicjs.com) 🚀
<!-- README_END -->