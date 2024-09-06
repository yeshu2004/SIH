import React from 'react'
import { IoGameController } from "react-icons/io5";
import { FaGooglePlay } from "react-icons/fa";
import { RiAncientGateLine } from "react-icons/ri";
import { IoIosArrowRoundDown } from "react-icons/io";

const HeroContent = () => {
  return (
    <>
        <div className='absolute inset-0 z-10 flex justify-center items-center text-white text-4xl mt-20'>
              <div className='flex flex-col items-center gap-20'>
                <div className='flex flex-col items-center gap-14'>
                  <h1 className='text-[10vw] font-[spring-font]'>Thirsty Feilds</h1>
                  <div></div>
                  <div className='text-xl  flex items-center gap-2 tracking-tight italic'>"<span><RiAncientGateLine /></span>Based on ground water" </div>
                </div>
                <div className='flex items-center gap-10'>
                  <button className='text-lg border-[1px] border-white px-10 py-[1vh] flex items-center gap-2 rounded-full'><span><IoGameController /></span>PLAY ONLINE</button>
                  <button className='text-lg border-[1px] border-white px-5 py-[1vh] flex items-center gap-2 rounded-full'><span><FaGooglePlay /></span>DOWNLOAD ON ANROID</button>
                </div>
                <div className='text-lg items-center flex gap-1'>Scroll down<span className='text-2xl'><IoIosArrowRoundDown /></span></div>
              </div>
            </div>
    </>
  )
}

export default HeroContent
