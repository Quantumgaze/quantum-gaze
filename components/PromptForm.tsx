'use client'
import React from 'react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion'
import { CircleDot } from 'lucide-react'
import Carousel from './ui/caroseul'
import TextareaAutoresize from './ui/textarea-autoresize'
import { Button } from './ui/button'
import Image from 'next/image'
    
export default function PromptForm() {
  return (
    <form action="" >

        <div className="prompt-container py-32 lg:px-16 ">
            <div className="prompt-wrapper relative mx-auto ">
                <TextareaAutoresize className='bg-zinc-800 w-full p-3 rounded text-md resize-none text-white' />
                <Button className='bg-zinc-700 absolute right-3 bottom-4'  size={'pill'}>
                    generate
                </Button>
            </div>
        </div>
        <Accordion type="single" collapsible className="w-full dark" defaultValue='item-1'>
            <AccordionItem value="item-1"  className="border-none ">
                <AccordionTrigger className=''> <CircleDot className="mx-4"/> Select the Image Generation Engines</AccordionTrigger>
                <AccordionContent>
                    <Carousel className="mx-4" buttons={false} >
                        {
                            [1,2,3,4,5,6].map((index)=>(
                                <div className='flex-[0_0_256px]'>
                                    <input type="checkbox" className='hidden peer' name="" id={"eng"+index} />
                                    <label htmlFor={"eng"+index} className='embla__slide min-w-0 flex flex-col items-center justify-center h-44 border-2 border-transparent peer-checked:border-white text-zinc-300 peer-checked:text-white bg-zinc-700/50 rounded-lg p-2 mx-4 '>
                                        <Image src='/stable_diffusion.png' className='w-12 select-none' width={20} height={20} alt={'stable diffusion'}/>
                                        <div className="mt-4 text-lg select-none ">Stable Diffusion</div>
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
