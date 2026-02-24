// Base Cosmic object interface
export interface CosmicObject {
  id: string;
  slug: string;
  title: string;
  content?: string;
  metadata: Record<string, unknown>;
  type?: string;
  created_at?: string;
  modified_at?: string;
}

// File metafield type
export interface CosmicFile {
  url: string;
  imgix_url: string;
}

// Service object type
export interface Service extends CosmicObject {
  metadata: {
    description: string;
    icon?: string;
    featured_image?: CosmicFile;
  };
}

// Team Member object type
export interface TeamMember extends CosmicObject {
  metadata: {
    role: string;
    bio?: string;
    photo?: CosmicFile;
    email?: string;
  };
}

// Testimonial object type
export interface Testimonial extends CosmicObject {
  metadata: {
    quote: string;
    client_name: string;
    company?: string;
    photo?: CosmicFile;
  };
}