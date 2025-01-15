import { type Metadata } from 'next'
import { Toaster } from 'sonner'
import { Montserrat } from 'next/font/google'
import Header from './ui/components/Header'
import Footer from './ui/components/Footer'
import './globals.css'

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'SnapEvent',
    description: 'Book tickets. Attend Events.',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body
                className={`${montserrat.className} m-0 p-0 antialiased `}
            >
                <Header />
                <main className='mt-4'>
                    {children}                    
                </main>    
                <Toaster />            
                <Footer />
            </body>
        </html>
    )
}
