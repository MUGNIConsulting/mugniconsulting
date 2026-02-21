/**
 * Sanity CMS Configuration
 *
 * To connect to your Sanity project:
 * 1. Create a Sanity project at https://www.sanity.io/manage
 * 2. Install Sanity CLI: npm install -g @sanity/cli
 * 3. Update projectId and dataset below
 * 4. Create schemas matching the types in ./schemas.ts
 *
 * For local development without Sanity, the website uses
 * static data defined directly in the components.
 */

export const sanityConfig = {
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "your-project-id",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: "2024-01-01",
  useCdn: true,
};

/**
 * Example Sanity schemas you would create:
 *
 * - service: { title, description, icon, slug }
 * - teamMember: { name, role, bio, photo, credentials }
 * - testimonial: { quote, clientName, company, rating }
 * - insight: { title, body, category, publishedAt, author }
 * - siteSettings: { companyName, tagline, phone, email, address }
 */
