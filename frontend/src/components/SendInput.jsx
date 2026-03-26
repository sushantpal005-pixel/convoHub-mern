import React from 'react'
import { IoSend } from "react-icons/io5"

const SendInput = () => {
    return (
        <form className='px-4 my-3'>
            <div className='w-full relative'>
                <input
                    type="text"
                    placeholder='Send a message...'
                    className='w-full p-3 pr-12 text-sm rounded-lg 
                    bg-white/50 backdrop-blur-md 
                    text-white/110 placeholder-white/110 
                    border border-white/20 
                    focus:outline-none focus:ring-2 focus:ring-cyan-400/50'
                />
                <button className='absolute flex inset-y-0 end-0 items-center pr-4 text-cyan-600 hover:text-cyan-500'>
                    <IoSend />
                </button>
            </div>
        </form>
    )
}

export default SendInput
