import { Helmet } from 'react-helmet-async';

const SITE_URL = 'https://nazamllc.com';
const DEFAULT_IMAGE = `${SITE_URL}/og-image.jpg`;
const ORGANIZATION_ID = `${SITE_URL}/#organization`;

export default function SEOMeta({
  title,
  description,
  path = '/',
  image = DEFAULT_IMAGE,
  serviceName,
  serviceDescription,
}) {
  const fullTitle = title
    ? `${title} | Nazam LLC`
    : 'Nazam LLC | Technology. Strategy. Results.';
  const canonical = `${SITE_URL}${path}`;
  const pageId = `${canonical}#webpage`;
  const schemaGraph = [
    {
      '@type': 'Organization',
      '@id': ORGANIZATION_ID,
      name: 'Nazam LLC',
      url: SITE_URL,
      logo: `${SITE_URL}/favicon.svg`,
      description: 'Nazam LLC builds AI automations, marketplace workflows, app and web products, and financial intelligence resources.',
      email: 'admin@nazamllc.com',
      founder: {
        '@type': 'Person',
        name: 'Muhammad Nazam',
        sameAs: 'https://linkedin.com/in/muhammad-nazam',
      },
      sameAs: [
        'https://linkedin.com/in/muhammad-nazam',
      ],
      areaServed: {
        '@type': 'Country',
        name: 'United States',
      },
      knowsAbout: [
        'AI automation',
        'n8n workflow automation',
        'autonomous AI agents',
        'Amazon marketplace management',
        'Walmart marketplace management',
        'custom app development',
        'financial intelligence',
      ],
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: SITE_URL,
      name: 'Nazam LLC',
      publisher: {
        '@id': ORGANIZATION_ID,
      },
      inLanguage: 'en-US',
    },
    {
      '@type': 'WebPage',
      '@id': pageId,
      url: canonical,
      name: fullTitle,
      description,
      isPartOf: {
        '@id': `${SITE_URL}/#website`,
      },
      about: {
        '@id': ORGANIZATION_ID,
      },
      image,
      inLanguage: 'en-US',
    },
  ];

  if (serviceName && serviceDescription) {
    schemaGraph.push({
      '@type': 'Service',
      '@id': `${canonical}#service`,
      name: serviceName,
      description: serviceDescription,
      provider: {
        '@id': ORGANIZATION_ID,
      },
      areaServed: {
        '@type': 'Country',
        name: 'United States',
      },
      url: canonical,
    });
  }

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="bingbot" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <link rel="canonical" href={canonical} />
      <link rel="alternate" type="text/plain" href={`${SITE_URL}/llms.txt`} title="Nazam LLC AI search summary" />

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

      <script type="application/ld+json">{JSON.stringify({
        '@context': 'https://schema.org',
        '@graph': schemaGraph,
      })}</script>
    </Helmet>
  );
}
