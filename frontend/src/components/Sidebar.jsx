import React from 'react'
import { BiSearchAlt2 } from "react-icons/bi";
import OtherUsers from "./OtherUsers"

const Sidebar = () => {
  return (
    <div className='border-r border-slate-500 p-4 flex flex-col'>
      <form action="" className='flex items-center gap-2'>
        <input className='input input-bordered bg-white/20 text-white/90 backdrop-blur-md rounded-md' type="text" placeholder='Search...' />
        <button type='submit' className='btn  bg-cyan-600 hover:bg-cyan-500 text-black'>
            <BiSearchAlt2 className='hover:invert w-6 h-6 outline-none' />
        </button>
      </form>
      <div className='divider px-3'></div>
      <OtherUsers/>
      <div>
        <button className='btn btn-sm bg-cyan-600 hover:bg-cyan-500 text-black'>Logout</button>
      </div>
    </div>
  )
}

export default Sidebar
