import Container from './components/Container'
import Navbar from './components/Navbar/Navbar'
import {Nunito} from 'next/font/google'
import './globals.css'
import RegisterModal from './components/Modals/RegisterModal'
import ToastProvider from './components/ToastProvider'
import { Metadata } from 'next'
import LoginModal from './components/Modals/LoginModal'
import axios from 'axios'
import { SafeUser } from './types'
import getCurrentUser from './actions/getCurrentUser'

export const metadata : Metadata = {
  title: 'Airbnb clone',
  description: 'Airbnb clone built with Next.js',
  keywords: 'airbnb, clone, next.js, react, typescript, reserver, book, hotel, apartment, house, vacation, travel, trip, stay, rent, rental, lodging, accommodation, accommodation',
  icons: "/favicon.png"
}

const nunito = Nunito({weight: ["200", "400", "500", "600", "800"], subsets: ['latin']})

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const user = await getCurrentUser()

  return (
    <html lang="en">
      <body className={nunito.className}>
        <ToastProvider/>
        <Navbar currentUser={user}/>
        <RegisterModal/>
        <LoginModal/>

        <main className='pt-28'>   
         <Container>
            {children}
         </Container>
        </main>
      </body>
    </html>
  )
}
