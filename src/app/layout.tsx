import React from 'react'
import Navigation from '../components/Navigation'
// eslint-disable-next-line camelcase
import { Space_Grotesk } from '@next/font/google'
import '../styles/globals.css'

const font = Space_Grotesk({
  weight: ['400', '700']
})

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head />
      <body className={font.className}>
        <Navigation />
        {children}
      </body>
    </html>
  )
}
