import { GeistSans } from 'geist/font/sans'
import localFont from 'next/font/local'
import Script from 'next/script'

import './globals.css'

export const metadata = {
  title: 'AIGA Lou 100 Show',
  description: 'AIGA Lou 100 Show',
  metadataBase: new URL('https://www.aigaloutop100.com/'),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
    },
  },
  openGraph: {
    images: '/appopengraph-image.png',
  },
}

const bely = localFont({
  src: 'belyFont.woff2',
  variable: '--font-bely',
})

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <head>
        <Script
          defer
          src='https://us.umami.is/script.js'
          data-website-id='8dce5e52-3afd-4ad5-9135-13cf849bc522'
        ></Script>
      </head>
      <body className={`${GeistSans.className} ${bely.variable}`}>{children}</body>
    </html>
  )
}
