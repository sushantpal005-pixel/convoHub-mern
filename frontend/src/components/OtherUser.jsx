import React from 'react'

const OtherUser = () => {
    return (
        <div>

            <div className='flex gap-2 items-center hover:bg-white/20 rounded p-2 cursor-pointer'>
                <div className='avatar'>
                    <div className='w-10 rounded-full '>
                        <img className='relative' src="https://avatarfiles.alphacoders.com/300/thumb-1920-300899.png" alt="userprofile" />
                        <span className="absolute top-1 right-0 w-2 h-2 bg-green-500 border-2 border-white rounded-full"></span>
                    </div>
                </div>
                <div className='flex flex-col flex-1'>
                    <div className='flex justify-between gap-2 '>
                        <p className='text-white/90'>Sushant Pal</p>
                    </div>
                </div>
            </div>
            <div className='divider my-0 py-0 h-1'></div>

        </div>
    )
}

export default OtherUser
