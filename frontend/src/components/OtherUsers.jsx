import React from 'react'
import OtherUser from './OtherUser'
import useGetOtherUsers from '../hooks/useGetOtherUsers'
import { useSelector } from 'react-redux'
const OtherUsers = () => {
    //my custom hook
    useGetOtherUsers()
    const { otherUsers } = useSelector(store => store.user)
    const { searchedUser } = useSelector(store => store.user)

    if (!otherUsers) return;      // early return in react
    return (
        <>
            {
                searchedUser !== null ? (<div className='overflow-y-auto flex-1'>
                    {
                        searchedUser.map((user) => {
                            return (
                                <OtherUser key={user._id} user={user} />
                            )
                        })
                    }

                </div>) : (<div className='overflow-y-auto flex-1'>
                    {
                        otherUsers?.map((user) => {
                            return (
                                <OtherUser key={user._id} user={user} />
                            )
                        })
                    }

                </div>)
            }
        </>

    )
}

export default OtherUsers
