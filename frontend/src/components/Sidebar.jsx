import React from 'react'
import { BiSearchAlt2 } from "react-icons/bi";
import OtherUsers from "./OtherUsers"
import axios from 'axios';
import toast from 'react-hot-toast'
import {useNavigate} from "react-router-dom"

const Sidebar = () => {
  const navigate = useNavigate()
  const logoutHandler = async ()=>{
    
    try {
      const res = await axios.get('http://localhost:8080/api/v1/user/logout')
      navigate("/login")
      toast.success(res.data.message)
    } catch (error) {
      console.log(error)
    }
  }
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
        <button onClick={logoutHandler} className='btn btn-sm bg-cyan-600 hover:bg-cyan-500 text-black'>Logout</button>
      </div>
    </div>
  )
}

export default Sidebar
