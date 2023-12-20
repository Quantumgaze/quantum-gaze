import { Button } from "@/components/ui/button";
import Carousel from "@/components/ui/caroseul";
import { cn } from "@/lib/utils";
import {ArrowDownWideNarrow, Filter, Sparkles, Star, StarHalf, User } from "lucide-react";
import Image from "next/image";

export default function Marketplace() {
    return (
        <div className= "bg-zinc-950">
            <div className="hero grid md:grid-cols-2 px-16 lg:px-32 xl:px-40  py-8 gap-1">
                <div className="left bg-zinc-800 m-2 aspect-[3/4] rounded-2xl"></div>
                <div className="right grid grid-cols-2 aspect-[3/4]">
                    <div className="bg-zinc-800 m-2 rounded-2xl"></div>
                    <div className="bg-zinc-800 m-2 rounded-2xl"></div>
                    <div className="bg-zinc-800 m-2 rounded-2xl"></div>
                    <div className="bg-zinc-800 m-2 rounded-2xl"></div>
                    
                </div>
            </div>
            <div className="latest-drops px-16 lg:px-32 xl:px-40">
                <div className="section-nav flex items-center justify-between">
                    <div className="header flex items-center m-2 text-white text-2xl capitalize">Latest drops<Sparkles className="mx-2" /></div>
                    <Button variant={'theme'} className="m-2 font-semibold">View all</Button>
                </div>
                <Carousel buttons={true} shadings={true} className="gap-10 py-8">
                    <ImageCard ImageData={{src:"/world.jpg",width:200,height:300}} value={4.5} className=""/>
                    <ImageCard ImageData={{src:"/world.jpg",width:200,height:300}} value={3.5} className=""/>
                    <ImageCard ImageData={{src:"/world.jpg",width:200,height:300}} value={2.5} className=""/>
                    <ImageCard ImageData={{src:"/world.jpg",width:200,height:300}} value={4.5} className=""/>
                    <ImageCard ImageData={{src:"/world.jpg",width:200,height:300}} value={3.5} className=""/>
                </Carousel>

            </div>
            <div className="Explore px-16 lg:px-32 xl:px-40 pb-8">
                <div className="section-nav flex items-center justify-between">
                    <div className="header flex items-center m-2 text-white text-3xl font-light capitalize">Explore</div>
                    <div className="flex items-center justify-between dark">
                        <Button variant={'outline'} className=" flex text-white mr-2" >Filter <Filter/></Button>
                        <Button variant={'outline'} className=" flex text-white" >Sort <ArrowDownWideNarrow /></Button>
                    </div>
                </div>
                <div className="w-full h-px bg-zinc-800 my-5"></div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {
                        [0,0,0,0,0,0].map((index)=>(
                            <ImageCard key={index} ImageData={{src:"/world.jpg",width:200,height:300}} value={4.5} className=""/>

                        ))
                    }
                </div>
            </div>
        </div>
    )
}

function ImageCard(
        {className,value,ImageData}
        :
        {
            className?:string,
            value:number ,
            ImageData:{
                src:string,
                width:number,
                height:number
            }
        })
    {
    const Rating = ({ value ,className}:{value:number,className?:string}) => {
        const fullStars = Math.floor(value);
        const hasHalfStar = value % 1 !== 0;
      
        const renderStars = () => {
          let stars = [];
      
          for (let i = 0; i < fullStars; i++) {
            stars.push(<Star className="stroke-none fill-yellow-500" key={i} />);
          }
      
          if (hasHalfStar) {
            stars.push(
                <StarHalf className="stroke-none fill-yellow-500" key={fullStars} />
            );
          }
          return stars;
        };
      
        return <div className={cn("rating flex",className)}>{renderStars()}</div>;
    }
    
    return(
        <div className={cn(" bg-zinc-700 aspect-[3/4] p-4 m-2 rounded-lg",className)}>
            <Image
                className="img bg-zinc-600 w-full aspect-[3/3.8] rounded-lg object-cover"
                src={ImageData.src}
                width={ImageData.width}
                height={ImageData.height}
                alt=""
                
             />
            {/* <div className="img bg-zinc-600 w-full aspect-[3/3.8] rounded-lg"></div> */}
            <div className="flex mt-3 mb-0 items-center justify-between  ">
                <Rating value={value}/>
                <div className="tags truncate w-40 text-white ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, mollitia!</div>
                <div className="div bg-green-400 caplitalize w-8 text-white m-1font-semibold aspect-square rounded-full flex items-center justify-center">A</div>
            </div>
        </div>
    )
}
