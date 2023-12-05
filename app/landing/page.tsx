"use client"
import Footer from '@/components/Footer'
import Navbar from './navbar'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

export default function Landing() {

    const [parentSize, setParentSize] = useState({ width: 0, height: 0 });

    useEffect(() => {
        const updateSize = () => {
            const parentDiv = document.querySelector('.right');
            if (parentDiv) {
                const { clientWidth, clientHeight } = parentDiv;
                setParentSize({ width: clientWidth, height: clientHeight });
            }
        };

        updateSize();
        window.addEventListener('resize', updateSize);

        return () => {
            window.removeEventListener('resize', updateSize);
        };
    }, []); // Run only once on component mount



    return (
        <main className='bg-black'>
            <Navbar />
            <div className="s-hero text-8xl font-bold text-white mx-40 my-12 flex items-center justify-around">
                <div className="left">
                    <div>IMAGINE</div>
                    <div>CREATE</div>
                    <div>SHARE</div>
                </div>
                <div className="right bg-zinc-500 rounded-2xl w-4/12 aspect-[6/8]">
                    <div className="rounded-2xl overflow-hidden">
                        <Image
                            src="/world2.jpg"
                            width={parentSize.width}
                            height={parentSize.height}
                            alt="Picture of the author"
                        />
                    </div>

                </div>
            </div>
            <div className="s-1 grid grid-cols-2">
                <div className="left relative flex items-center justify-center ">
                    <div className="w-24 h-24 absolute backdrop-blur-md -translate-x-16 -translate-y-32 rounded-lg border-[1px] border-blue-500 bg-blue-500 bg-opacity-30 flex items-center justify-center"><div className="logo-img"></div></div>
                    <div className="w-36 h-36 absolute backdrop-blur-md translate-x-40 -translate-y-14 rounded-lg border-[1px] border-fuchsia-500 bg-fuchsia-500 bg-opacity-30 flex items-center justify-center"><div className="logo-img"></div></div>
                    <div className="w-32 h-32 absolute backdrop-blur-md translate-x-20 translate-y-16 rounded-lg border-[1px] border-green-500 bg-green-500 bg-opacity-30 flex items-center justify-center"><div className="logo-img"></div></div>
                    <div className="w-20 h-20 absolute backdrop-blur-md -translate-x-20 translate-y-8 rounded-lg border-[1px] border-gray-500 bg-gray-500 bg-opacity-30 flex items-center justify-center"><div className="logo-img"></div></div>
                </div>
                <div className="right flex items-center justify-center py-20">
                    <div className="text-5xl text-white leading-[70px] font-bold ">
                        Choose from<br /> Arsenal of Image <br /> Generation Tools
                    </div>
                </div>
            </div>
            <div className="s-2 px-40 ">
                <div className="head font-bold text-2xl text-white ">Top Prompts</div>
                <div className="cards-list flex items-center justify-center ">
                    <div className="card w-72 h-96 rounded-lg m-4 relative overflow-hidden group">
                        <div className="image absolute group-hover:opacity-10 group-hover:delay-0 delay-50 group-hover:pointer-events-none duration-300 bg-zinc-600 w-full h-full">

                        </div>
                        <div className="prompt  top-0 p-4 border-px ">
                            <span className='text-xl  my-2 text-white block '>Prompt-1</span>
                            <span className='text-zinc-400'>
                                Portrait painting of batman with black leather armor, ultra realistic, concept art, intricate details, eerie, highly detailed, photorealistic, octane render, 8 k, unreal engine. art by artgerm and Jim Lee, Pen and Ink Drawing, City Scape, Full Body, Night time
                            </span>
                        </div>
                    </div>
                    <div className="card w-72 h-96 rounded-lg m-4 relative overflow-hidden group">
                        <div className="image absolute group-hover:opacity-10 group-hover:delay-0 delay-1000 group-hover:pointer-events-none duration-300 bg-zinc-600 w-full h-full">

                        </div>
                        <div className="prompt  top-0 p-4 border-px ">
                            <span className='text-xl  my-2 text-white block '>Prompt-2</span>
                            <span className='text-zinc-400'>
                                illustration of Washington Square Park in the style of propaganda poster, flat colours, detailed, sunny day, attention to detail, 8k
                            </span>
                        </div>
                    </div>
                    <div className="card w-72 h-96 rounded-lg m-4 relative overflow-hidden group">
                        <div className="image absolute group-hover:opacity-10 group-hover:delay-0 delay-1000 group-hover:pointer-events-none duration-300 bg-zinc-600 w-full h-full">

                        </div>
                        <div className="prompt  top-0 p-4 border-px ">
                            <span className='text-xl  my-2 text-white block '>Prompt-3</span>
                            <span className='text-zinc-400'>
                                A stunning minimal PC case designed by Dieter Rams, BRAUN. Product ad retro. industrial design inspiration, warm retro natural lighting, on desk, natural scene in the home.
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="s-3 px-40">
                <div className="head font-bold text-2xl text-white "><span className='mx-2'></span>Testimonials</div>
                <div className="testimonials-list my-10 flex overflow-y-hidden  overflow-x-auto scroll  ">
                    <div className="p-4 rounded-2xl m-4 shrink-0 text-zinc-200 bg-zinc-700 w-72">
                        <div className='truncate'>Lorem ipsum dolor sit amet consectetur.</div>
                        <div className="text-right">- Lorem, ipsum.</div>
                    </div>
                    <div className="p-4 rounded-2xl m-4 shrink-0 text-zinc-200 bg-zinc-700 w-72">
                        <div className='truncate'>Lorem ipsum dolor sit amet consectetur.</div>
                        <div className="text-right">- Lorem, ipsum.</div>
                    </div>
                    <div className="p-4 rounded-2xl m-4 shrink-0 text-zinc-200 bg-zinc-700 w-72">
                        <div className='truncate'>Lorem ipsum dolor sit amet consectetur.</div>
                        <div className="text-right">- Lorem, ipsum.</div>
                    </div>
                    <div className="p-4 rounded-2xl m-4 shrink-0 text-zinc-200 bg-zinc-700 w-72">
                        <div className='truncate'>Lorem ipsum dolor sit amet consectetur.</div>
                        <div className="text-right">- Lorem, ipsum.</div>
                    </div>
                    <div className="p-4 rounded-2xl m-4 shrink-0 text-zinc-200 bg-zinc-700 w-72">
                        <div className='truncate'>Lorem ipsum dolor sit amet consectetur.</div>
                        <div className="text-right">- Lorem, ipsum.</div>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    )
}
