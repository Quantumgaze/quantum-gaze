import Link from "next/link"

import { cn } from "@/lib/utils";
import { UserButton } from "@clerk/nextjs";
export const revalidate = 0;

const Navbar = async () => {
    try {
        return (
            <div className="sm: px-12 sm:px-4 lg:px-16 h-16 items-center flex justify-between bg-zinc-800 ">
                <Link href={'/home'} >
                    <div className="logo-container flex items-center ">
                        <div className="logo m-2 mr-4 relative flex items-center">
                            <div className=" w-10 h-10 rounded-full bg-gradient-to-br from-fuchsia-600 to-pink-700"></div>
                            <div className=" w-5 h-5 absolute -right-2 bg-white rounded-lg bg-opacity-20 backdrop-blur-sm border-2 border-white border-opacity-5 "></div>
                        </div>
                        <div className="name text-xl text-white ">
                            Quantumgaze
                        </div>
                    </div>
                </Link>
                <Link href="/about" className={cn("mx-9 font-medium transition-colors hover:text-black")}>About</Link>
            </div>
        )
    } catch (error) {
        console.error('Error fetching Data:', error);
        return <div>Error fetching categories</div>;

    }
}

export default Navbar