import React from 'react'
import { MdOutlineLeaderboard } from "react-icons/md";
import logo from '../assets/Design.png'

const Nav = () => {
  return (
    <>
        <div className='px-20 py-10 flex items-center justify-end'>
                <button className='flex items-center gap-2 text-white'><span><MdOutlineLeaderboard /></span>Leader Board</button>
            </div>
    </>
  )
}

export default Nav