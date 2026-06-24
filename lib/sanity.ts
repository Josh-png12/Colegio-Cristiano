import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type SanityImageSource = any;

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "your-project-id";
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2024-01-01";

export const sanityClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: process.env.NODE_ENV === "production",
  perspective: "published",
  stega: {
    enabled: false,
  },
});

const builder = imageUrlBuilder(sanityClient);

export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}

// ─── GROQ Queries ───────────────────────────────────────────────

export const queries = {
  posts: `*[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    publishedAt,
    excerpt,
    "imageUrl": mainImage.asset->url
  }`,

  postBySlug: `*[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    publishedAt,
    excerpt,
    body,
    "imageUrl": mainImage.asset->url
  }`,

  testimonials: `*[_type == "testimonial"] | order(_createdAt desc) {
    _id,
    name,
    role,
    quote,
    "photoUrl": photo.asset->url
  }`,

  siteSettings: `*[_type == "siteSettings"][0] {
    siteTitle,
    siteDescription,
    heroHeading,
    heroSubheading,
    missionStatement,
    visionStatement,
    "heroImageUrl": heroImage.asset->url,
    "heroVideoUrl": heroVideo.asset->url
  }`,
};

// ─── Helpers ────────────────────────────────────────────────────

/**
 * Fetches data from Sanity. Falls back to mock data when Sanity is not configured.
 */
export async function fetchSanity<T>(
  query: string,
  params?: Record<string, unknown>,
): Promise<T | null> {
  try {
    if (projectId === "your-project-id") {
      console.warn("⚠ Sanity no está configurado. Usa datos mock.");
      return null;
    }
    return await sanityClient.fetch<T>(query, params || {});
  } catch (error) {
    console.error("Error fetching from Sanity:", error);
    return null;
  }
}
