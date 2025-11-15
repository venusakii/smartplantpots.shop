import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ subsets: ["latin"] });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Smart Plant Pots - Never Kill a Plant Again',
  description: 'Smart Plant Pots with AI-powered care. Automated watering, real-time monitoring, and personalized recommendations for thriving plants.',
  generator: 'v0.app',
  keywords: ['smart plant pots', 'intelligent gardening', 'automated watering', 'plant care technology', 'IoT plant monitoring'],
  icons: {
    icon: [
      {
        url: '/favicon.svg',
        type: 'image/svg+xml',
      },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
