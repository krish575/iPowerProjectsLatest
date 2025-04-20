'use client'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Img1 from "@/Resources/Home/Img1.jpeg";
import Img2 from "@/Resources/Home/Img2.jpeg";
import Img3 from "@/Resources/Home/Img3.jpeg";
import Img4 from "@/Resources/Home/Img4.jpeg";
import Img5 from "@/Resources/Home/Img5.jpeg";
import Img6 from "@/Resources/Home2/Img6.jpeg";
import Img7 from "@/Resources/Home2/Img7.jpeg";
import Img8 from "@/Resources/Home2/Img8.jpeg";
import Img9 from "@/Resources/Home2/Img9.jpeg";
import Img10 from "@/Resources/Home2/Img10.jpeg";
import Image from "next/image";
import React from "react";
import Autoplay from "embla-carousel-autoplay";


const HomeCarousel = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 1500, stopOnInteraction: true })
  )
  const plugin2 = React.useRef(
    Autoplay({ delay: 1500, stopOnInteraction: true })
  )
  return (
    <div className="grid grid-cols-2 p-10 h-screen ">
      <div className="w-[75%] mx-auto ">
      <Carousel orientation="vertical"   
   plugins={[plugin2.current]} >
        <CarouselContent className="h-[565px]">
          <CarouselItem className='  ' >
            <Image className='aspect-square   rounded-3xl object-contain mx-auto' src={Img6} alt="1" width={1000} height={1000} />
          </CarouselItem >
          <CarouselItem className='  '>
            <Image className='aspect-square  rounded-3xl object-contain mx-auto' src={Img7} alt="2" width={1000} height={1000} /> 
          </CarouselItem>
          <CarouselItem className='  '>
            <Image className='aspect-square  rounded-3xl object-contain mx-auto' src={Img8} alt="3" width={1000} height={1000} /> 
          </CarouselItem>
          <CarouselItem className='   ' >
            <Image className='aspect-square  rounded-3xl object-contain mx-auto' src={Img9} alt="1" width={1000} height={1000} />
          </CarouselItem >
          <CarouselItem className='   ' >
            <Image className='aspect-square  rounded-3xl object-contain mx-auto' src={Img10} alt="1" width={1000} height={1000} />
          </CarouselItem >
        </CarouselContent>
        <CarouselPrevious className='bg-white ' />
        <CarouselNext className='bg-white' />
      </Carousel>
      </div>
    <div className="w-[75%] mx-auto">
      <Carousel  plugins={[plugin.current]} >
        <CarouselContent className="h-[565px]">
          <CarouselItem className='  ' >
            <Image className='aspect-square   rounded-3xl object-contain mx-auto' src={Img1} alt="1" width={1000} height={1000} />
          </CarouselItem >
          <CarouselItem className=' '>
            <Image className='aspect-square  rounded-3xl object-contain mx-auto' src={Img2} alt="2" width={1000} height={1000} /> 
          </CarouselItem>
          <CarouselItem className=' '>
            <Image className='aspect-square  rounded-3xl object-contain mx-auto' src={Img3} alt="3" width={1000} height={1000} /> 
          </CarouselItem>
          <CarouselItem className='  ' >
            <Image className='aspect-square  rounded-3xl object-contain mx-auto' src={Img4} alt="1" width={1000} height={1000} />
          </CarouselItem >
          <CarouselItem className='  ' >
            <Image className='aspect-square  rounded-3xl object-contain mx-auto' src={Img5} alt="1" width={1000} height={1000} />
          </CarouselItem >
        </CarouselContent>
        <CarouselPrevious className='bg-white ' />
        <CarouselNext className='bg-white' />
      </Carousel>
    </div>
    </div>
  );
};

export default HomeCarousel;
