import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'OPTIK Ecosystem | Solana DeFi Gaming Platform',
  description: 'The ultimate Solana DeFi ecosystem combining DEX trading, staking vaults, play-to-earn games, and memecoin launchpad.',
  keywords: 'Solana, DeFi, DEX, Staking, Gaming, Crypto, OPTIK, Memecoin, Launchpad',
  openGraph: {
    title: 'OPTIK Ecosystem',
    description: 'Solana DeFi Gaming Platform',
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
