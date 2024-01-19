import { GeistSans } from 'geist/font/sans'
import localFont from 'next/font/local'
import Script from 'next/script'

import './globals.css'

export const metadata = {
  title: 'AIGA Lou 100 Show',
  description: 'AIGA Lou 100 Show',
}

const bely = localFont({
  src: 'belyFont.woff2',
  variable: '--font-bely',
})

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <head>
        <script
          defer
          src='https://us.umami.is/script.js'
          data-website-id='8dce5e52-3afd-4ad5-9135-13cf849bc522'
        ></script>
      </head>
      <body className={`${GeistSans.className} ${bely.variable}`}>{children}</body>
    </html>
  )
}
