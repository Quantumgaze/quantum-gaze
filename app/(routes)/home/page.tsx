import PromptForm from "@/components/PromptForm"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import Carousel from "@/components/ui/caroseul"
import { CircleDot } from "lucide-react"

const MyHomePage = () => {
    return (
        <div className="bg-zinc-800 px-32" >
            <PromptForm />

        </div>
    )
}

export default MyHomePage