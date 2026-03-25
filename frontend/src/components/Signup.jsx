import React, { useState } from 'react'
import {Link} from "react-router-dom"

const Signup = () => {
    const [user, setUser] = useState({
        fullName: "",
        username: "",
        password: "",
        confirmPassword: "",
        gender: ""
    })
    const handleCheckbox = (gender)=>{
        setUser({...user, gender})
    }
    const onSubmitHandler = (e)=>{
        e.preventDefault()
        console.log(user)
        setUser({
        fullName: "",
        username: "",
        password: "",
        confirmPassword: "",
        gender: ""
    })

    }
    return (
        <div className='min-w-96 mx-auto'>
            <div className='w-full p-6 rounded-lg shadow-md bg-white/10 backdrop-blur-md border border-white/20'>
                <h1 className='text-3xl font-bold text-center text-black '>Signup</h1>
                <form onSubmit={onSubmitHandler} action="">
                    <div>
                        <label className='label p-2 '>
                            <span className='text-base label-text text-black '>Full Name</span>
                        </label>
                        <input value={user.fullName} onChange={(e)=>setUser({...user, fullName:e.target.value})} className='w-full input input-bordered h-10 text-black bg-white' type="text" placeholder='FullName' />
                    </div>
                    <div>
                        <label className='label p-2 '>
                            <span className='text-base label-text text-black '>Username</span>
                        </label>
                        <input value={user.username} onChange={(e)=>setUser({...user, username:e.target.value})} className='w-full input input-bordered h-10 text-black bg-white' type="text" placeholder='Username' />
                    </div>
                    <div>
                        <label className='label p-2 '>
                            <span className='text-base label-text text-black '>Password</span>
                        </label>
                        <input value={user.password} onChange={(e)=>setUser({...user, password:e.target.value})} className='w-full input input-bordered h-10 text-black bg-white' type="password" placeholder='Password' />
                    </div>
                    <div>
                        <label className='label p-2 '>
                            <span className='text-base label-text text-black '>Confirm Password</span>
                        </label>
                        <input value={user.confirmPassword} onChange={(e)=>setUser({...user, confirmPassword:e.target.value})} className='w-full input input-bordered h-10 text-black bg-white' type="password" placeholder='Confirm Password' />
                    </div>
                    <div className='flex items-center my-4'>
                        <div className='flex items-center'>
                            <p>Male</p>
                            <input checked={user.gender === "male"} onChange={()=>handleCheckbox("male")} type="checkbox" className="checkbox checkbox-neutral mx-2" />
                        </div>
                        <div className='flex items-center'>
                            <p>Female</p>
                            <input checked={user.gender === "female"} onChange={()=>handleCheckbox("female")} type="checkbox" className="checkbox checkbox-neutral mx-2" />
                        </div>
                    </div>
                    <p className='text-center my-2'>Already have an account? <Link to="/login">Login</Link></p>
                    <div >
                        <button type='submit' className='btn btn-block btn-md mt-2 text-black text-lg bg-white border-slate-700 '>Signup</button>
                    </div>
                </form>

            </div>
        </div>
    )
}

export default Signup
