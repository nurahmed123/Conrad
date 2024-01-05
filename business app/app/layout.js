// 'use client'
import { Inter } from 'next/font/google'
import './globals.css'
import NextNProgress from 'nextjs-progressbar';
// import Navbar from '@/components/Navbar'
import dynamic from 'next/dynamic'
// import NextNProgress from 'nextjs-progressbar';



const Navbar = dynamic(() => import('@/components/Navbar'), { ssr: false })


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <>
      <html lang="en">

        {/* <NextNProgress color='#7e22ce' /> */}
        <body className={inter.className}>
          {/* <NextNProgress /> */}
          <Navbar />
          {children}
        </body>
      </html>
    </>
  )
}
