"use client";
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { useAuth } from '@clerk/nextjs';
import Link  from 'next/link'
export default function Landing() {
    
    const router = useRouter();
    const { userId } = useAuth();

    return (
        <main>
            <div className='xs:px-8 sm:px-16 md:px-32 py-8 h-24 flex items-center justify-between bg-zinc-900'>
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
                    {
                        userId
                        ?
                        <>
                            <Button variant={'theme'} onClick={() => router.push('/home')} className='mx-5'>Dashboard </Button>
                        </>
                        :
                        <>
                            <Button onClick={() => router.push('/sign-in')} className='mx-5'>Login</Button>
                            <Button onClick={() => router.push('/sign-up')}>SignUp</Button>
                        </>

                    }
                </div>


            </div>
            <div className="hero bg-zinc-900 xl:px-32 lg:px-48 md:px-32 sm:px-16 xs:px-16 grid xl:grid-cols-2 h-full">
                <div className="left m-8 mr-4 rounded-3xl overflow-hidden relative">
                    <div className="inset-0 absolute bg-[#FF31A0] bg-opacity-80">
                        <div className="m-16 font-semibold text-6xl text-white">
                            <div className="my-4">Imagine</div>
                            <div className="my-4">Create</div>
                            <div className="my-4">Share</div>
                        </div>
                        <Link href={'/home'} className="absolute flex items-center justify-center bottom-8 left-8 w-64 h-24 bg-[#7D0044] rounded-xl ">
                            <span className='uppercase  text-white text-xl'> Generate</span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 ml-4 text-white rotate-45">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 11.25l-3-3m0 0l-3 3m3-3v7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>

                        </Link>
                    </div>
                    <Image
                        src={'/world2.jpg'}
                        className='cover h-full w-full '
                        width={800}
                        height={400}
                        alt={'hero image'}
                    />
                </div>
                <div className="right h-full grid grid-rows-2  ">
                    <div className="top relative rounded-3xl m-8 ml-4 mb-4 border-2 border-zinc-600 pb-48">
                        <div className="m-8 text-zinc-300 text-2xl w-3/4 ">Choose  from Arsenal of Image Generation Tools</div>
                        <Link href={'/marketplace'} className="absolute  flex items-center justify-center bottom-8 left-8 w-72 h-20 bg-[#636363] rounded-xl ">
                            <span className='uppercase  text-white text-xl'> Marketplace</span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 ml-4 text-white rotate-45">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 11.25l-3-3m0 0l-3 3m3-3v7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>

                        </Link>
                    </div>
                    <div className="bottom flex">
                        <div className="relative rounded-3xl w-1/2 m-4 mb-8 bg-[#AB82F3] pb-48">
                            
                            <span className="font-bold text-[#350092] m-8 block text-3xl">How did we do this</span>
                            <Link href={'/about'} className="absolute px-8 flex items-center justify-center bottom-2 m-4 w-10/12 h-24 bg-[#8640FF] rounded-xl ">
                                <span className='uppercase  text-white text-xl'>About</span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 ml-4 text-white rotate-45">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11.25l-3-3m0 0l-3 3m3-3v7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </Link>
                        </div>
                        <div className="relative rounded-3xl w-1/2 m-4 mb-8 mr-8 bg-[#AAE63F]">
                            <span className="font-bold text-[#4F7C00] m-8 block text-3xl">Let's Connect</span>
                            <Link href={'/contact'} className="absolute px-8 flex items-center justify-center bottom-2 m-4 h-24 w-10/12 bg-[#76B800] rounded-xl ">
                                <span className='uppercase  text-white text-xl'>Contact</span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 ml-4 text-white rotate-45">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11.25l-3-3m0 0l-3 3m3-3v7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
