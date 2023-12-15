import type { Metadata } from 'next'
import { Urbanist } from 'next/font/google'
import '../globals.css'

import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
// import ModalProvider from '@/providers/modal-provider'
// import ToastProvider from '@/providers/toast-provider'

const font = Urbanist({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Marketplace Dashboard',
    description: 'Customize Prompts',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className={font.className}>
                {/* <ToastProvider />
                <ModalProvider /> */}
                <Navbar />
                {children}
                <Footer />
            </body>
        </html>
    )
}
