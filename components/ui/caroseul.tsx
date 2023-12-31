"use client"
import React, { ReactNode, useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from './button';
import { cn } from '@/lib/utils';
 

interface CarouselProps {
    children: ReactNode;
    className?:string,
    buttons?:Boolean,
    shadings?:Boolean
}


export default function Carousel({children,className,buttons,shadings}:CarouselProps) {
    const [emblaRef,emblaApi] = useEmblaCarousel({})

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev()
    }, [emblaApi])
    
    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext()
    }, [emblaApi])


    return (
        <div className={cn('relative overflow-hidden',className)} >
            <div className={cn('embla__viewport',{'px-12':buttons===true })} ref={emblaRef}>
                <div className="embla__container flex ">
                   {children}
                   { /*----Sample---- <div className="embla__slide">Slide 3</div> */}
                </div>
                {
                    buttons 
                    &&
                    <>
                        <div className="embla__prev absolute left-0 top-1/2 text-white z-10 -translate-y-1/2" onClick={scrollPrev}>
                            <ChevronLeft className='h-10 w-10'/>
                        </div>
                        <div className="embla__next absolute right-0 top-1/2 z-10 text-white -translate-y-1/2" onClick={scrollNext}>
                            <ChevronRight  className='h-10 w-10'/>
                        </div>
                    </>
                }
                {
                    shadings
                    &&
                    <>
                        <div className="left-gradient bg-gradient-to-r from-zinc-950 to-transparent h-full w-20 absolute top-0 left-0"></div>
                        <div className="left-gradient bg-gradient-to-l from-zinc-950 to-transparent h-full w-20 absolute top-0 right-0"></div>
                    </>
                }
            </div>
        </div>
    )
}
