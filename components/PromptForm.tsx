'use client'
import React from 'react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion'
import { CircleDot } from 'lucide-react'
import Carousel from './ui/caroseul'
import TextareaAutoresize from './ui/textarea-autoresize'
import { Button } from './ui/button'
    
export default function PromptForm() {
  return (
    <form action="dark">

        <div className="prompt-container py-16">
            <div className="prompt-wrapper relative w-8/12 mx-auto ">
                <TextareaAutoresize className='bg-zinc-700 w-full p-3 rounded text-md resize-none text-white' />
                <Button className='bg-zinc-600 absolute right-3 bottom-4' size={'pill'}>
                    generate
                </Button>
            </div>
        </div>
        <Accordion type="multiple"  className="w-full border-none dark ">
            <AccordionItem value="item-1" className="">
                <AccordionTrigger> <CircleDot className="mx-4"/> Select the Image Generation Engines</AccordionTrigger>
                <AccordionContent>
                    <Carousel className="mx-4" buttons={false} >
                        {
                            [1,2,3,4,5,6].map((index)=>(
                                <div className='flex-[0_0_256px]'>
                                    <input type="checkbox" className='hidden peer' name="" id={"eng"+index} />
                                    <label htmlFor={"eng"+index} className='embla__slide min-w-0 flex flex-col items-center justify-center h-44 border-2 border-transparent peer-checked:border-white bg-zinc-700/50 rounded-lg p-2 mx-4 '>
                                        <div className="img bg-red-500 rounded-full w-20 h-20">SD</div>
                                        <div className="mt-4 text-lg">Stable Diffusion</div>
                                    </label>
                                </div>
                            ))
                        }
                      
            
                    </Carousel>
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    </form>
  )
}
