import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#1a56db',
  colorScheme: 'normal',
}

export const metadata: Metadata = {
  metadataBase: new URL('https://lwbarkertransport.com'),
  title: {
    default: 'L.W. Barker Transport Services LTD | Professional Flatbed Transport',
    template: '%s | L.W. Barker Transport Services LTD'
  },
  description: "Family-run business since 2004 providing professional flatbed transport solutions with 24/7 availability. When you need something delivered, we're always on hand to say YES! We will NOT let you down.",
  keywords: ['flatbed transport', 'transport services', 'logistics', 'UK transport', 'local transport', 'long distance transport', 'specialized transport', 'vehicle transportation', 'haulage services', 'delivery services', 'engineering transport', 'construction transport', 'manufacturing transport', 'abnormal loads', 'emergency transport', 'flexible transport solutions', '24/7 transport'],
  authors: [{ name: 'L.W. Barker Transport Services LTD' }],
  creator: 'L.W. Barker Transport Services LTD',
  publisher: 'L.W. Barker Transport Services LTD',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://lwbarkertransport.com',
    siteName: 'L.W. Barker Transport Services LTD',
    title: 'L.W. Barker Transport Services LTD | Professional Flatbed Transport',
    description: "Family-run business since 2004 providing professional flatbed transport solutions with 24/7 availability. When you need something delivered, we're always on hand to say YES! We will NOT let you down.",
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'L.W. Barker Transport Services LTD - Professional Flatbed Transport',
        type: 'image/jpeg',
      },
      {
        url: '/LOGO.png',
        width: 800,
        height: 800,
        alt: 'L.W. Barker Transport Services LTD Logo',
        type: 'image/png',
      },
      {
        url: '/fleet-showcase.jpg',
        width: 1200,
        height: 630,
        alt: 'L.W. Barker Transport Fleet',
        type: 'image/jpeg',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'L.W. Barker Transport Services LTD | Professional Flatbed Transport',
    description: "Family-run business since 2004 providing professional flatbed transport solutions with 24/7 availability. When you need something delivered, we're always on hand to say YES! We will NOT let you down.",
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'L.W. Barker Transport Services LTD - Professional Flatbed Transport'
      },
      {
        url: '/LOGO.png',
        width: 800,
        height: 800,
        alt: 'L.W. Barker Transport Services LTD Logo'
      }
    ],
    site: '@lwbarkertransport',
    creator: '@lwbarkertransport',
  },
  verification: {
    google: 'google-site-verification-code', // Replace with actual code when available
    yandex: 'yandex-verification-code', // Replace with actual code when available
    other: {
      'msvalidate.01': 'bing-verification-code', // Bing/Microsoft verification
    }
  },
  alternates: {
    canonical: 'https://lwbarkertransport.com',
    languages: {
      'en-GB': 'https://lwbarkertransport.com',
    },
  },
  applicationName: 'L.W. Barker Transport Services',
  referrer: 'origin-when-cross-origin',
  formatDetection: {
    email: false,
    address: false,
    telephone: true,
  },
  category: 'Transport Services',
  generator: 'Next.js',
  itunes: {
    appId: 'myAppStoreID',
    appArgument: 'https://lwbarkertransport.com',
  },
  appleWebApp: {
    capable: true,
    title: 'L.W. Barker Transport',
    statusBarStyle: 'black-translucent',
  },
  appLinks: {
    web: {
      url: 'https://lwbarkertransport.com',
      should_fallback: true,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en-GB">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <script src="/register-sw.js" defer></script>
        <meta name="theme-color" content="#1a56db" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={inter.className}>
        {children}
        <Analytics />
      </body>
    </html>
  )
} 