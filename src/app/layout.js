'use client'
import Header from './components/Header'
import { AppWrapper } from './context/index'

import { Inter } from 'next/font/google'
import './globals.css'


const inter = Inter({ subsets: ['latin'] })

//TODO: Ver donde poner metada ya que hemos tenido que eliminarlo de este archivo

export default function RootLayout({ children }) {
  return (
      <html lang="en">
        <body className={inter.className}>
          <AppWrapper>
            <Header />
            {children}
          </AppWrapper>
        </body>
      </html>
  )
}
