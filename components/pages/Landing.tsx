import React from 'react'

export default function Landing() {
    return (
        <main>
            <div className="s-hero text-8xl font-bold text-white mx-40 my-12 flex items-center justify-around">
                <div className="left">
                    <div>IMAGINE</div>
                    <div>CREATE</div>
                    <div>SHARE</div>
                </div>
                <div className="right bg-zinc-500 rounded-2xl w-4/12 aspect-[6/7]">
                    {/* <Image/> */}
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
                    Choose from<br/> Arsenal of Image <br/> Generation Tools
                    </div>
                </div>
            </div>
            <div className="s-2 px-40 ">
                <div className="head font-bold text-2xl text-white ">Top Prompts</div>
                <div className="cards-list flex items-center justify-center ">
                    <div className="card w-72 h-96 rounded-lg m-4 relative overflow-hidden group">
                        <div className="image absolute group-hover:opacity-10 group-hover:delay-0 delay-1000 group-hover:pointer-events-none duration-300 bg-zinc-600 w-full h-full">

                        </div>
                        <div className="prompt  top-0 p-4 border-px ">
                            <span className='text-xl  my-2 text-white block '>Prompt</span>
                            <span className='text-zinc-400'>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure, aliquam? Porro, sequi repudiandae rerum doloremque distinctio illum libero iste voluptatem. Culpa necessitatibus harum accusamus quia nihil cumque doloribus temporibus ipsum autem error at est pariatur iste eius, repellat voluptas vero tempora adipisci officia dolores maxime voluptates iusto quo itaque. Mollitia.
                            </span>
                        </div>
                    </div>
                    <div className="card w-72 h-96 rounded-lg m-4 relative overflow-hidden group">
                        <div className="image absolute group-hover:opacity-10 group-hover:delay-0 delay-1000 group-hover:pointer-events-none duration-300 bg-zinc-600 w-full h-full">

                        </div>
                        <div className="prompt  top-0 p-4 border-px ">
                            <span className='text-xl  my-2 text-white block '>Prompt</span>
                            <span className='text-zinc-400'>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure, aliquam? Porro, sequi repudiandae rerum doloremque distinctio illum libero iste voluptatem. Culpa necessitatibus harum accusamus quia nihil cumque doloribus temporibus ipsum autem error at est pariatur iste eius, repellat voluptas vero tempora adipisci officia dolores maxime voluptates iusto quo itaque. Mollitia.
                            </span>
                        </div>
                    </div>
                    <div className="card w-72 h-96 rounded-lg m-4 relative overflow-hidden group">
                        <div className="image absolute group-hover:opacity-10 group-hover:delay-0 delay-1000 group-hover:pointer-events-none duration-300 bg-zinc-600 w-full h-full">

                        </div>
                        <div className="prompt  top-0 p-4 border-px ">
                            <span className='text-xl  my-2 text-white block '>Prompt</span>
                            <span className='text-zinc-400'>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure, aliquam? Porro, sequi repudiandae rerum doloremque distinctio illum libero iste voluptatem. Culpa necessitatibus harum accusamus quia nihil cumque doloribus temporibus ipsum autem error at est pariatur iste eius, repellat voluptas vero tempora adipisci officia dolores maxime voluptates iusto quo itaque. Mollitia.
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

        </main>
    )
}
