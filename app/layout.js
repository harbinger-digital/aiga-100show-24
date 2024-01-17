import { GeistSans } from 'geist/font/sans'
import localFont from 'next/font/local'

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
      <body className={`${GeistSans.className} ${bely.variable}`}>{children}</body>
    </html>
  )
}
