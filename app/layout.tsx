import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from '../components/Navbar';
import Template from './template';


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Anytube',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <Template>
        {children}
        </Template>
      </body>
    </html>
  )
}
