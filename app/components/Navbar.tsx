import Image from 'next/image'
import React from 'react'
import { Playwrite_AU_SA } from "next/font/google";
import Logo from  '@/Resources/Logo.jpeg';
import Link from 'next/link';

const PlaywriteAUSA =  Playwrite_AU_SA({
  variable: "--font-PLaywriteAuSa",
})  

const Navbar = () => {
  return (
    <div className='w-full  flex justify-between  items-center p-5'>
        <div className='flex items-center max-md:justify-center gap-2 '>
            <Image width={500} height={500} alt='logo' src={Logo} className='w-fit aspect-square' />
            <p className={`text-3xl font-bold italic ${PlaywriteAUSA.className}`} >I-Power Projects</p>
        </div>
        <div className='flex gap-5 w-fit max-md:hidden '>
            <Link href={'#HomeCarousel'} className='hover:scale-125 transition-all ease-in-out duration-300'> Home </Link>
            <Link href={'#AboutUs'} className='hover:scale-125 transition-all ease-in-out duration-300'> About Us </Link>
            <Link href={'#OurServices'} className='hover:scale-125 transition-all ease-in-out duration-300'> Our Services </Link>
            <Link href={'#ProjectList'} className='hover:scale-125 transition-all ease-in-out duration-300'> Project List </Link>
            <Link href={'#ContactUs'} className='hover:scale-125 transition-all ease-in-out duration-300'> Contact Us </Link>
        </div>
    </div>
  )
}

export default Navbar