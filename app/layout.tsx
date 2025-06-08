import type { Metadata } from 'next'
import { Inter, Poppins, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
})

export const metadata: Metadata = {
  title: 'MJEngi',
  description: 'Data & ML engineer with expertise in cloud computing, machine learning, and data infrastructure. Building end-to-end data pipelines and ML-powered applications.',
  keywords: ['Data Engineer', 'Machine Learning', 'ML Engineer', 'Cloud Computing', 'AWS', 'GCP', 'Snowflake', 'Python', 'Data Science', 'Mouad Jaouhari', 'MJ'],
  authors: [{ name: 'Mouad Jaouhari' }],
  creator: 'Mouad Jaouhari',
  publisher: 'Mouad Jaouhari',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://yourusername.github.io/ProPortfolio',
    title: 'Mouad Jaouhari | Data & ML Engineer Portfolio',
    description: 'Data & ML engineer with expertise in cloud computing, machine learning, and data infrastructure.',
    siteName: 'MJ Portfolio',
  },
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
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${poppins.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
} 