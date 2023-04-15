import Container from './components/Container'
import Navbar from './components/Navbar/Navbar'
import './globals.css'

export const metadata = {
  title: 'Airbnb clone',
  description: 'Airbnb clone built with Next.js',
  keywords: 'airbnb, clone, next.js, react, typescript, reserver, book, hotel, apartment, house, vacation, travel, trip, stay, rent, rental, lodging, accommodation, accommodation'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
        <main>   
         <Container>
            {children}
         </Container>
        </main>
      </body>
    </html>
  )
}
