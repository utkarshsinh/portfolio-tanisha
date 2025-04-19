import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair',
})

export const metadata: Metadata = {
  title: 'Tanisha | Professional Model Portfolio',
  description: 'Professional model portfolio showcasing editorial, commercial, and runway work.',
  keywords: ['model', 'portfolio', 'fashion', 'photography', 'runway', 'editorial'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} scroll-smooth`}>
      <body 
        suppressHydrationWarning 
        className="antialiased bg-white selection:bg-primary/20 selection:text-primary"
      >
        <div className="relative">
          {children}
        </div>
      </body>
    </html>
  )
} 