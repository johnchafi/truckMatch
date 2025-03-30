import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'TruckMatch App',
  description: 'TruckMatch',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" >
      <body suppressHydrationWarning>
        {children}</body>
    </html>
  )
}
