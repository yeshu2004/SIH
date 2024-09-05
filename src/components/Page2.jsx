import React from 'react'
import logo from "../assets/Design.png"
import leaf from "../assets/image.png"

const Page2 = () => {
  return (
    <>
        <div className='bg-white relative py-20 w-full text-black flex items-center justify-between'>
            {/* <img className='absolute left-20 top-24 h-20' src={leaf} alt="" />
            <img className='absolute left-20 bottom-24 rotate-180 h-20' src={leaf} alt="" /> */}
          <div className='flex items-center w-full px-20'>
            <div className='w-2/3 text-xl italic flex flex-col gap-20'>
                <div><img src={leaf} className='h-20' alt="" /></div>
                <div className=''><span className='text-3xl items-center'>" </span>In <span className='text-indigo-500'>Thirsty Fields</span>, you take on the role of a farmer in charge of maintaining fertile land while managing the delicate balance of underground water resources. <br />Choose wisely between traditional farming methods and advanced interventions like micro-irrigation, rainwater harvesting, and artificial recharge to sustain your farm through changing weather patterns. <br /><br />
                Navigate through challenging real-world scenarios such as droughts, floods, and contamination, each testing your strategic skills. Your success lies in maintaining a healthy water table while maximizing your crop yield.”
                With engaging gameplay and a focus on education, Thirsty Fields teaches the importance of groundwater conservation while providing an enjoyable farming experience."   
                </div>  
                <div><img src={leaf} className='h-20 rotate-180' alt="" /></div>          
            </div>
            <div className='w-1/3 translate-y-10'>
              <img className='w-full h-full' src={logo} alt="" />
            </div>
          </div>
      </div>
    </>
  )
}

export default Page2