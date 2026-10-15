import './globals.css';

export const metadata = {
  title: 'ScanVault - Fast, Secure QR Scanner & Personal Vault for Android',
  description: 'Generate custom stylized QR codes, scan instantly with sub-second camera detection, and keep an encrypted, searchable offline vault of every link, contact, and note.',
  keywords: 'QR Scanner, Android QR App, Encrypted QR Vault, Offline QR Code Generator, Barcode Reader, Privacy QR, Zero Telemetry Scanner',
  authors: [{ name: 'NomiDev' }],
  metadataBase: new URL('https://scanvault.nomidev.com'),
  icons: {
    icon: '/images/logo.png',
    apple: '/images/logo.png',
  },
  openGraph: {
    title: 'ScanVault - Fast, Secure QR Scanner & Personal Vault for Android',
    description: 'Instant QR decoding with confidential on-device storage. Built for privacy, zero-tracking, and offline cryptographic vault.',
    url: 'https://scanvault.nomidev.com',
    siteName: 'ScanVault',
    images: [
      {
        url: '/images/hero-phone.png',
        width: 1200,
        height: 630,
        alt: 'ScanVault Android QR Scanner & Vault',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ScanVault - Fast, Secure QR Scanner & Personal Vault for Android',
    description: 'Instant QR decoding with confidential on-device storage. Built for privacy, zero-tracking, and offline cryptographic vault.',
    images: ['/images/hero-phone.png'],
  },
};

export default function RootLayout({ children }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'ScanVault',
    operatingSystem: 'ANDROID',
    applicationCategory: 'UtilitiesApplication',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    description: 'Fast, Secure QR Scanner & Personal Vault for Android with on-device AES-256 encryption and custom styling.',
  };

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
