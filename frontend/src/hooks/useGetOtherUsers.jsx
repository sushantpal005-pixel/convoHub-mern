import React, { useEffect } from 'react'
import axios from "axios"
import {useDispatch} from "react-redux"
import { setOtherUsers } from '../redux/userSlice'

const useGetOtherUsers = () => {
    const dispatch = useDispatch()
    useEffect(()=>{
        const fetchOtherUsers = async ()=>{
            try {
                axios.defaults.withCredentials = true
                const res = await axios.get("https://convohub-ju3o.onrender.com/api/v1/user/")
                
                dispatch(setOtherUsers(res.data.otherUsers))
            } catch (error) {
                console.log(error)
            }
        }
        fetchOtherUsers()
    }, [])

}

export default useGetOtherUsers
