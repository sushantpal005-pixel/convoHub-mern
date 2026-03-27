import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setSelectedUser } from '../redux/userSlice'

const OtherUser = ({user}) => {
    const dispatch = useDispatch()
    const {selectedUser} = useSelector(store=>store.user)
    const selectedUserHandler = ()=>{
        dispatch(setSelectedUser(user))
    }
    return (
        <>

            <div onClick={()=>selectedUserHandler(user)} className={` ${selectedUser?._id === user?._id ? 'flex bg-white/20': ''} flex gap-2 items-center hover:bg-white/20 rounded p-2 cursor-pointer`}>
                <div className='avatar'>
                    <div className='w-12 rounded-full '>
                        <img className='relative' src={user?.profilePhoto} alt="userprofile" />
                        <span className="absolute top-1 right-0 w-2 h-2 bg-green-500 border-2 border-white rounded-full"></span>
                    </div>
                </div>
                <div className='flex flex-col flex-1'>
                    <div className='flex justify-between gap-2 '>
                        <p className='text-white/90'>{user?.fullName}</p>
                    </div>
                </div>
            </div>
            <div className='divider my-0 py-0 h-1'></div>

        </>
    )
}

export default OtherUser
