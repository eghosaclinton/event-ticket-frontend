import type { Metadata } from 'next'
import { Toaster } from 'sonner'
import { Montserrat } from 'next/font/google'
import './globals.css'
import Header from './ui/components/Header'
import Footer from './ui/components/Footer'

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'SnapEvent',
    description: 'Book tickets. Attend Events.',
}

type Layout = {
    children: React.ReactNode
    searchParams: Promise<{ login: boolean; register: boolean }>
}

export default function RootLayout({ children }: Readonly<Layout>) {
    return (
        <html lang="en">
            <body
                className={`${montserrat.className} flex flex-col gap-4 min-h-screen`}
            >
                <Header />
                <main>{children}</main>
                <Toaster />
                <Footer />
            </body>
        </html>
    )
}
