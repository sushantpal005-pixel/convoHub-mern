import React from 'react'
import Sidebar from './Sidebar'
import MessageContainer from './MessageContainer'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'


const HomePage = () => {
  const { authUser, selectedUser } = useSelector(store => store.user)
  const navigate = useNavigate()
  useEffect(() => {
    if (!authUser) {
      navigate("/")
    }
  }, [])
  return (
    <div className='flex sm-[450px] md:h-[550px] text-black rounded-lg overflow-hidden bg-gray-400 shadow-md bg-white/10 backdrop-blur-md border border-white/20'>
      <Sidebar/>
      <MessageContainer/>
    </div>
  )
}

export default HomePage
