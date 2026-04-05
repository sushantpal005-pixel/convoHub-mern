import React, { useState, useEffect } from 'react'
import { BiSearchAlt2 } from "react-icons/bi";
import OtherUsers from "./OtherUsers"
import axios from 'axios';
import toast from 'react-hot-toast'
import { useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from 'react-redux';
import { setAuthUser, setOtherUsers, setSearchedUser, setSelectedUser, setOnlineUsers } from '../redux/userSlice';

const Sidebar = () => {
  const [search, setSearch] = useState("")
  const { otherUsers, authUser } = useSelector(store => store.user)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  useEffect(() => {
    if (!search.trim()) {
      dispatch(setSearchedUser(null));
    }
  }, [search]);
  const logoutHandler = async () => {

    try {
      const res = await axios.get('https://convohub-ju3o.onrender.com/api/v1/user/logout')
      dispatch(setAuthUser(null))
      dispatch(setOtherUsers([]))
      dispatch(setOnlineUsers([]))
      dispatch(setSelectedUser(null))
      navigate("/login")
      toast.success(res.data.message)

    } catch (error) {
      console.log(error)
    }
  }
  const searchSubmitHandler = (e) => {
    e.preventDefault()
    if (!search.trim()) return
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
        <div className='flex gap-2 items-center bg-white/20 rounded p-2 cursor-pointer'>
          <div className='avatar relative'>
            <div className='w-12 rounded-full '>
              <img className='' src={authUser?.profilePhoto} alt="userprofile" />
            </div>
          </div>
          <div className='flex flex-col flex-1'>
            <div className='flex justify-between gap-2 '>
              <p className='text-white/90'>{authUser?.fullname}</p>
            </div>
          </div>
          <button onClick={logoutHandler} className='btn btn-sm bg-cyan-600 hover:bg-cyan-500 text-black'>Logout</button>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
