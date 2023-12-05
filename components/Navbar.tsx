import Link from "next/link"

import Container from "@/components/ui/container"
import { cn } from "@/lib/utils";
export const revalidate = 0;
// hard refresh : ctrl + shift + R 

const Navbar = async () => {

    try {
        return (
            <div>
                <Container>
                    <div className="relative px-10 sm:px-6 lg:px-8 flex h-16 items-center">
                        <Link href="/Home" className="ml-4 flex lg:ml-0 gap-x-2">
                            <p className="font-bold text-xl">Quantum Gaze - An AI Prompt MarketPlace</p>
                        </Link>
                        <Link href="/about" className={cn(
                            "mx-9 text-sm font-medium transition-colors hover:text-black")}>About</Link>

                    </div>
                </Container>
            </div>
        )
    } catch (error) {
        console.error('Error fetching Data:', error);
        return <div>Error fetching categories</div>;

    }
}

export default Navbar