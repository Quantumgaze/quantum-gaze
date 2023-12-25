import PromptForm from "@/components/PromptForm"
import PhotoCollage from "@/components/ui/photo-collage"

import { ArrowUpRight, CircleDot } from "lucide-react"
import Link from "next/link"
import CreatePrompt from "../generateImage/[userId]/page"
import { auth } from "@clerk/nextjs"

const MyHomePage = ({
    params
}: {
    params: { userId: string } | { userId: null }
}) => {

    console.log(params)

    const userAuth = auth();

    const userId = userAuth ? userAuth.userId : null;

    console.log(userId);


    return (
        <div className="bg-zinc-0 px-8 xs:px-12 sm:px-16 md:px-24 lg:px-32 bg-zinc-950" >
            <Link href={`/generateImage/${userId}`} className="title flex  py-4 text-lg text-white">
                <CircleDot className="mx-4" /> <span>Generate your AI Image</span><ArrowUpRight className="mx-1" />
            </Link>
            {/* <CreatePrompt params={userId} /> */}
            <PromptForm />
            <Marketplace />
        </div>
    )
}

export default MyHomePage


function Marketplace() {
    return (
        <div className="py-8">
            <Link href={'/marketplace'} className="title flex  py-4 text-lg text-white">

                <CircleDot className="mx-4" /> <span>Explore our prompt Marketplace</span><ArrowUpRight className="mx-1" />
            </Link>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 dark text-white">
                <PhotoCollage className="max-w-96 aspect-[3.5/3] rounded-2xl m-2 " >
                    <div className="bg-zinc-950 flex items-center justify-center">1</div>
                    <div className="bg-zinc-600 flex items-center justify-center">2</div>
                    <div className="bg-zinc-500 flex items-center justify-center">3</div>
                    <div className="bg-zinc-400 flex items-center justify-center">4</div>
                </PhotoCollage>
                <PhotoCollage className="max-w-96 aspect-[3.5/3] rounded-2xl m-2" >
                    <div className="bg-zinc-950 flex items-center justify-center">1</div>
                    <div className="bg-zinc-600 flex items-center justify-center">2</div>
                </PhotoCollage>
                <PhotoCollage className="max-w-96 aspect-[3.5/3] rounded-2xl m-2" >
                    <div className="bg-zinc-950 flex items-center justify-center">1</div>
                </PhotoCollage>
                <PhotoCollage className="max-w-96 aspect-[3.5/3] rounded-2xl m-2" >
                    <div className="bg-zinc-950 flex items-center justify-center">1</div>
                </PhotoCollage>
                <PhotoCollage className="max-w-96 aspect-[3.5/3] rounded-2xl m-2" >
                    <div className="bg-zinc-950 flex items-center justify-center">1</div>
                </PhotoCollage>
                <PhotoCollage className="max-w-96 aspect-[3.5/3] rounded-2xl m-2" >
                    <div className="bg-zinc-950 flex items-center justify-center">1</div>
                    <div className="bg-zinc-600 flex items-center justify-center">2</div>
                    <div className="bg-zinc-500 flex items-center justify-center">3</div>
                </PhotoCollage>
            </div>
        </div>
    )
}
