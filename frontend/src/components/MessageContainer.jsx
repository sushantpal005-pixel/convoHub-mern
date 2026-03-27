import React from 'react'
import SendInput from './SendInput'
import Messages from './Messages'
import { useSelector } from 'react-redux'


const MessageContainer = () => {
    const {selectedUser} = useSelector(store=>store.user)
    return (
        <div className='md:min-w-[550px] flex flex-col'>

            <div className='flex gap-2 items-center bg-white/20 border border-white/30 text-white/90 px-4 py-2 mb-2 '>
                <div className='avatar'>
                    <div className='w-10 rounded-full '>
                        <img className='relative' src={selectedUser?.profilePhoto} alt="userprofile" />
                        <span className="absolute top-1 right-0 w-2 h-2 bg-green-500 border-2 border-white rounded-full"></span>
                    </div>
                </div>
                <div className='flex flex-col flex-1'>
                    <div className='flex justify-between gap-2 '>
                        <p>{selectedUser?.fullName}</p>
                    </div>
                </div>
            </div>
            <Messages/>
            <SendInput/>



        </div>
    )
}

export default MessageContainer
