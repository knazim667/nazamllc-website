import { Helmet } from 'react-helmet-async';

const SITE_URL = 'https://nazamllc.com';
const DEFAULT_IMAGE = `${SITE_URL}/og-image.jpg`;

export default function SEOMeta({
  title,
  description,
  path = '/',
  image = DEFAULT_IMAGE,
}) {
  const fullTitle = title
    ? `${title} | Nazam LLC`
    : 'Nazam LLC | Technology. Strategy. Results.';
  const canonical = `${SITE_URL}${path}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />

      {/* Geo */}
      <meta name="geo.region" content="US-WY" />
      <meta name="geo.placename" content="Wyoming" />
      <meta name="geo.position" content="43.0759678;-107.2902839" />
      <meta name="ICBM" content="43.0759678, -107.2902839" />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonical} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="Nazam LLC" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Schema.org LocalBusiness */}
      <script type="application/ld+json">{JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        name: 'Nazam LLC',
        description: 'AI automation, Amazon & Walmart marketplace management, custom app development, and financial intelligence.',
        url: SITE_URL,
        logo: `${SITE_URL}/favicon.svg`,
        email: 'admin@nazamllc.com',
        address: {
          '@type': 'PostalAddress',
          addressRegion: 'WY',
          addressCountry: 'US',
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: 43.0759678,
          longitude: -107.2902839,
        },
        areaServed: {
          '@type': 'Country',
          name: 'United States',
        },
        sameAs: [
          'https://linkedin.com/in/muhammad-nazam',
        ],
      })}</script>
    </Helmet>
  );
}
