"use client"

import { useRouter } from 'next/navigation'
import { Button } from '../../components/ui/button';

export default function Navbar() {

    const router = useRouter();

    return (
        <div className='px-32 py-8 flex justify-between'>
            <div className="menu-btn text-white">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.2h16.5" />
                </svg>
            </div>
            <div className="logo-container flex items-center ">
                <div className="logo m-2 mr-4 relative flex items-center">
                    <div className=" w-12 h-12 rounded-full bg-gradient-to-br from-fuchsia-600 to-pink-700"></div>
                    <div className=" w-6 h-6 absolute -right-2 bg-white rounded-lg bg-opacity-20 backdrop-blur-sm border-2 border-white border-opacity-5 "></div>
                </div>
                <div className="name text-2xl text-white ">
                    Quantumgaze
                </div>
            </div>
            <div className="auth-nav flex items-center">
                <Button onClick={() => router.push('/sign-in')} className='mx-5'>Login</Button>
                <Button onClick={() => router.push('/sign-up')}>SignUp</Button>
            </div>


        </div>
    )
}
