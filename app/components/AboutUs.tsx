'use client'
import React from 'react'
import { motion } from "framer-motion"

const AboutUs = () => {
  return (
    <div>
         <div>
        <p className='text-3xl text-center font-bold text-[#283040]'>About Us</p>
        <hr className='border-2 text-[#283040] m-auto w-[8%]'></hr>
        </div>
    <div id='AboutUs' className='grid grid-cols-2  gap-x-6 w-[65%] mx-auto mt-28 scroll-smooth'>
       
        <motion.div
          initial={{ opacity: 0, x: 500 }}
          whileInView={{ opacity: 1, x:0 }}
          transition={{ ease: "easeInOut", duration: 1 }}>
        <div className='flex flex-col gap-y-10 bg-[#f5efdf] p-10 rounded-3xl'>
            <div className='bg-[#283040] text-[#fffbec] py-1 px-3 rounded-xl w-fit'>About us</div>
            <div className='leading-5 '>This website is developed as part of diploma, Degree, Master degree all branch project to demonstrate the practical application of the skills and knowledge. The primary objective of this website is to showcase how modern web technologies can be used to solve real-world problems and create interactive, user-friendly digital experiences.
This website integrates key concepts such as responsive design, dynamic content, user interaction, and backend functionalities, reflecting a complete development process from planning and design to implementation and testing. 
Engineering students are continually in search of innovative projects, and identifying impactful projects significantly enhances their educational journey. I Power Projects serves as the perfect platform for such initiatives.
Find out all the project Ideas for Final year Engineering projects for Diploma, Degree Engineering, M.E & M Tech students.
Thank you for visiting, and I hope you find the project informative and engaging!</div>
        </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -500 }}
          whileInView={{ opacity: 1, x:0 }}
          transition={{ ease: "easeInOut", duration: 1 }}>
        <div className='grid grid-rows-3 gap-y-3'> 
            <div className='bg-[#f5f5bc]  flex flex-col text-[#283040] py-3 px-8 rounded-full items-center justify-center' >
                <p className='text-6xl'>500+</p><p>Projects created and sold</p>
            </div>
            <div className='bg-[#d5efc0]  flex flex-col text-[#283040] py-3 px-8 rounded-full items-center justify-center' >
                <p className='text-6xl'>1000+</p><p>Students are connected with us</p>
            </div>
            <div className='bg-[#ffd8b3]  flex flex-col text-[#283040] py-3 px-8 rounded-full items-center justify-center' >
                <p className='text-6xl'>10+</p>Years of experience in the field<p></p>
            </div>
        </div>
        </motion.div>
    </div>
    </div>
  )
}

export default AboutUs