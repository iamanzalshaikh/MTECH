/** Site-wide links and constants */
export const SOCIAL_LINKS = {
  instagram: 'https://www.instagram.com/mtechcomputers_2024?igsh=MTNsYjhmaDhuYXRzNQ==',
  facebook: 'https://www.facebook.com/caddeskindia/',
  linkedin: 'https://www.linkedin.com/in/caddeskindia',
  youtube: 'https://www.youtube.com/@mtechcomputers',
  whatsapp: 'https://wa.me/918976178976?text=Hello%20M-Tech%20Computers,%20I%20want%20to%20enquire%20about%20your%20courses.',
};

/** Google Business Profile — live location / maps */
export const GMB_LOCATIONS = {
  kalyan: 'https://share.google/iQzoKlWTbZeFeUF4Q',
  dombivli: 'https://share.google/h58GYqJxyS1hXdtoa',
} as const;

/** Google Business Profile — write review (Kalyan head office) */
export const GOOGLE_REVIEW_URL =
  process.env.NEXT_PUBLIC_GOOGLE_REVIEW_URL || GMB_LOCATIONS.kalyan;

export const STUDENTS_TRAINED = '5000+';
