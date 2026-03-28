import React, { useState } from 'react'
import { BiSearchAlt2 } from "react-icons/bi";
import OtherUsers from "./OtherUsers"
import axios from 'axios';
import toast from 'react-hot-toast'
import { useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from 'react-redux';
import { setOtherUsers, setSearchedUser } from '../redux/userSlice';

const Sidebar = () => {
  const [search, setSearch] = useState("")
  const { otherUsers } = useSelector(store => store.user)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const logoutHandler = async () => {

    try {
      const res = await axios.get('http://localhost:8080/api/v1/user/logout')
      navigate("/login")
      toast.success(res.data.message)
    } catch (error) {
      console.log(error)
    }
  }
  const searchSubmitHandler = (e) => {
    e.preventDefault()

  if (!search.trim()) {
    dispatch(setSearchedUser(null)) // ✅ reset
    return
  }

    const conversationUser = otherUsers?.find((user) => user.fullName.toLowerCase().includes(search.toLowerCase()))
    if (conversationUser) {
      dispatch(setSearchedUser([conversationUser]))
    } else {
      toast.error("User not found")
    }
  }
  return (
    <div className='border-r border-slate-500 p-4 flex flex-col'>
      <form onSubmit={searchSubmitHandler} action="" className='flex items-center gap-2'>
        <input value={search} onChange={(e) => setSearch(e.target.value)} className='input input-bordered bg-white/20 text-white/90 backdrop-blur-md rounded-md' type="text" placeholder='Search...' />
        <button type='submit' className='btn  bg-cyan-600 hover:bg-cyan-500 text-black'>
          <BiSearchAlt2 className='hover:invert w-6 h-6 outline-none' />
        </button>
      </form>
      <div className='divider px-3'></div>
      <OtherUsers />
      <div>
        <button onClick={logoutHandler} className='btn btn-sm bg-cyan-600 hover:bg-cyan-500 text-black'>Logout</button>
      </div>
    </div>
  )
}

export default Sidebar
