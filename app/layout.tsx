import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'OPTIK Gold Inc | Premium Web3 Ecommerce',
  description: 'Shop premium products with cryptocurrency on Solana. Secure, fast, and decentralized ecommerce powered by blockchain technology.',
  keywords: 'Ecommerce, Crypto, Solana, Web3, Shopping, OPTIK Gold, Blockchain, DeFi',
  openGraph: {
    title: 'OPTIK Gold Inc - Web3 Ecommerce',
    description: 'Premium ecommerce with crypto payments',
    images: ['/android-chrome-192x192.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="optik-bg-animated">
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
