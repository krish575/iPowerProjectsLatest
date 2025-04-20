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
    <div className='w-full flex justify-between items-center p-5'>
        <div className='flex items-center gap-2 '>
            <Image width={500} height={500} alt='logo' src={Logo} className='w-fit aspect-square' />
            <p className={`text-3xl font-bold italic ${PlaywriteAUSA.className}`} >I-Power Projects</p>
        </div>
        <div className='flex gap-5 w-fit '>
            <Link href={'#'}> Home </Link>
            <Link href={'#'}> About Us </Link>
            <Link href={'#'}> Our Services </Link>
            <Link href={'#'}> Contact Us </Link>
        </div>
    </div>
  )
}

export default Navbar