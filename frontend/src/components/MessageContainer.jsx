import React, { useEffect } from 'react'
import SendInput from './SendInput'
import Messages from './Messages'
import { useDispatch, useSelector } from 'react-redux'
import { setSelectedUser } from '../redux/userSlice'
import { FaArrowLeft } from "react-icons/fa";


const MessageContainer = () => {
    const { selectedUser } = useSelector(store => store.user)
    const { authUser, onlineUsers } = useSelector(store => store.user)
    const dispatch = useDispatch()
    const isOnline = onlineUsers.includes(selectedUser?._id)
    const leftArrow = ()=>{
        dispatch(setSelectedUser(null))
    }
    // useEffect(() => {
    //     return () => dispatch(setSelectedUser(null))
    // }, [])
    return (
        <>
            {
                selectedUser !== null ? (
                    <div className='md:min-w-[550px] flex flex-col '>

                        <div className='flex gap-2 items-center bg-white/20 border border-white/30 text-white/90 px-4 py-2 mb-2 '>
                                <FaArrowLeft onClick={leftArrow} className='cursor-pointer' />
                            <div className='avatar'>
                                <div className='w-12 rounded-full '>
                                    <img className='relative' src={selectedUser?.profilePhoto} alt="userprofile" />
                                    {/* <span className="absolute top-1 right-0 w-2 h-2 bg-green-500 border-2 border-white rounded-full"></span> */}
                                    {isOnline && (
                                        <span className="absolute top-1 right-1 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></span>
                                    )}
                                </div>
                            </div>
                            <div className='flex flex-col flex-1'>
                                <div className='flex justify-between gap-2 '>
                                    <p>{selectedUser?.fullName}</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex-1 overflow-y-auto">
                            <Messages />
                        </div>
                        <SendInput />
                    </div>) : (
                    <div className='md:min-w-[550px] flex flex-col justify-center items-center'>
                        <h1 className='text-4xl text-white font-bold'>Hi, {authUser?.fullname}</h1>
                        <h1 className='text-2xl text-white'>Let's start conversation</h1>
                    </div>
                )
            }
        </>

    )
}

export default MessageContainer
