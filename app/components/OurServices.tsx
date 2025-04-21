'use client'
import React from 'react'
import { motion } from "framer-motion"

const OurServices = () => {
  return (
    <div id='OurServices' className='scroll-smooth '>
        <p className='text-3xl  text-center font-bold text-[#283040]'>Our Services</p>
        <hr className='border-2 text-[#283040] m-auto w-[10%]'></hr>
    <div className='grid grid-cols-2 w-[50%] mx-auto gap-x-2 gap-y-6 mt-14 mb-10 max-xl:w-[90%]'>
        
        
        <motion.div initial={{ opacity: 0, x:100 }}
  whileInView={{ opacity: 1, x:0 }}
  transition={{ ease: "easeInOut", duration: 1 }} className='text-right text-9xl text-[#283040] font-extrabold'>1</motion.div>
        <motion.div initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ ease: "easeInOut", duration: 1 }} className='flex flex-col justify-center py-2 bg-[#f5f5bc] text-[#283040] rounded-3xl px-6 shadow-2xl'>
            <p className='text-3xl'>Diploma and Degree </p>
            <p className='text-sm opacity-85'>All engineering Branch Project work </p>
        </motion.div>


        <motion.div initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ ease: "easeInOut", duration: 1 }} className='flex flex-col justify-center py-2 bg-[#d5efc0] text-[#283040] rounded-3xl px-6 shadow-2xl'> 
            <p className='text-3xl text-right'>Working Model </p>
            <p className='text-sm text-right opacity-85'> with Report PDF</p>    
        </motion.div>
        <motion.div initial={{ opacity: 0, x:-100 }}
  whileInView={{ opacity: 1, x:0 }}
  transition={{ ease: "easeInOut", duration: 1 }} className='text-left text-9xl text-[#283040] font-extrabold'>2</motion.div>


        <motion.div initial={{ opacity: 0, x:100 }}
  whileInView={{ opacity: 1, x:0 }}
  transition={{ ease: "easeInOut", duration: 1 }} className='text-right text-9xl text-[#283040] font-extrabold'>3</motion.div>
        <motion.div initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ ease: "easeInOut", duration: 1 }} className='flex flex-col justify-center py-2 bg-[#ffd8b3] text-[#283040] rounded-3xl px-6 shadow-2xl'> 
            <p className='text-3xl text-left'>	Master degree </p>
            <p className='text-sm text-left opacity-85'>thesis work</p>    
        </motion.div>


        <motion.div initial={{ opacity: 0}}
  whileInView={{ opacity: 1 }}
  transition={{ ease: "easeInOut", duration: 1 }} className='flex flex-col justify-center py-2 bg-[#d5efc0] text-[#283040] rounded-3xl px-6 shadow-2xl'> 
            <p className='text-3xl text-right'>	Research</p>
            <p className='text-sm text-right opacity-85'> and paper work  </p>    
        </motion.div>
        <motion.div initial={{ opacity: 0, x:-100 }}
  whileInView={{ opacity: 1, x:0 }}
  transition={{ ease: "easeInOut", duration: 1 }} className='text-left text-9xl text-[#283040] font-extrabold'>4</motion.div>


        <motion.div initial={{ opacity: 0, x:100 }}
  whileInView={{ opacity: 1, x:0 }}
  transition={{ ease: "easeInOut", duration: 1 }} className='text-right text-9xl text-[#283040] font-extrabold'>5</motion.div>
        <motion.div initial={{ opacity: 0 }}
  whileInView={{ opacity: 1}}
  transition={{ ease: "easeInOut", duration: 1 }} className='flex flex-col justify-center py-2 bg-[#f5f5bc] text-[#283040] rounded-3xl px-6 shadow-2xl'> 
            <p className='text-3xl text-left'>	Guidance</p>
            <p className='text-sm text-left opacity-85'>and consultancy </p>    
        </motion.div>
         
    </div>
    </div>
  )
}

export default OurServices