import Link from "next/link"

import Container from "@/components/ui/container"
import { cn } from "@/lib/utils";
export const revalidate = 0;

const Navbar = async () => {
    try {
        return (
            <div className="relative px-10 pt-3 sm:px-6 lg:px-8 flex h-16 items-center">
                <Link href="/home" className="ml-4 flex items-center lg:ml-0 gap-x-2">
                    <div className="logo m-2 mr-4 relative flex items-center">
                        <div className=" w-12 h-12 rounded-full bg-gradient-to-br from-fuchsia-600 to-pink-700"></div>
                        <div className=" w-6 h-6 absolute -right-2 bg-white rounded-lg bg-opacity-20 backdrop-blur-sm border-2 border-white border-opacity-5 "></div>
                    </div>
                    <p className="font-bold text-xl">Quantum Gaze - An AI Prompt MarketPlace</p>
                </Link>
                <Link href="/about"  className={cn("mx-9 font-medium transition-colors hover:text-black")}>About</Link>
            </div>
        )
    } catch (error) {
        console.error('Error fetching Data:', error);
        return <div>Error fetching categories</div>;

    }
}

export default Navbar