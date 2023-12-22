import Link from "next/link";
import { Button } from "./ui/button";

export default function Footer() {
    return (
        <>
        <div className="w-full h-px bg-zinc-700"></div>
        <div className="h-40 px-4 md:px-32 w-full flex flex-col lg:flex-row items-center justify-center lg:justify-between bg-zinc-900">
            <div className="logo-container flex items-center ">
                <div className="logo m-2 mr-4 relative flex items-center ">
                    <div className=" w-12 h-12 rounded-full bg-gradient-to-br from-fuchsia-600 to-pink-700"></div>
                    <div className=" w-6 h-6 absolute -right-2 bg-white  rounded-lg bg-opacity-20 backdrop-blur-sm border-2 border-white border-opacity-5 "></div>
                </div>
                <div className="name text-2xl text-white ">
                    Quantumgaze
                </div>
            </div>
            <div className="social-nav dark ">
                <Link href={'/about'}><Button variant={'link'} >About</Button></Link>
                <Link href={'/contact'}><Button variant={'link'} >Contact</Button></Link>
                <Link href={'/marketplace'}><Button variant={'link'} >Marketplace</Button></Link>
                <Link href={'https:/github.com/Quantumgaze'} target="_blank"><Button variant={'link'} >Github</Button></Link>
            </div>
        </div>
    </>

    )
}

