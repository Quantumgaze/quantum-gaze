"use client"

import { Input } from "@/components/ui/input"
import Link from "next/link"

const CreatePrompt = ({
    params
}: {
    params: string | null
}) => {

    console.log(params)

    return (
        <>
            <div className="top relative rounded-3xl m-8 ml-4 mb-4 border-2 border-zinc-600 pb-48">
                <div className="m-8 text-black-300 text-2xl w-3/4 ">Generate your AI Image</div>
                <h2 className="m-8 text-black-800 text-xl w-3/4 ">Title: </h2>
                <Input className="m-9 w-3/4" />
                <Link href={'/generateImage/:imageId'} className="absolute  flex items-center justify-center bottom-8 left-8 w-72 h-20 bg-sky-500 rounded-xl ">
                    <span className='uppercase text-white text-xl'> Generate Image</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 ml-4 text-white rotate-45">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11.25l-3-3m0 0l-3 3m3-3v7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>

                </Link>
            </div>
        </>
    )
}

export default CreatePrompt