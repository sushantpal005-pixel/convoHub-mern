import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addMessage, setMessages } from "../redux/messageSlice"

const useGetRealTimeMessage = ()=>{
    const {socket} = useSelector(store=>store.socket)
    const {messages} = useSelector(store=>store.message)
    //console.log("msg hai ye to bc",messages)
    const dispatch = useDispatch()
    useEffect(()=>{
        socket?.on("newMessage", (newMessage)=>{
            //console.log("NEW MESSAGE RECEIVED:", newMessage)
            dispatch(setMessages([...messages, newMessage]))
            //dispatch(addMessage(newMessage))
        })
        return()=> socket?.off("newMessage")
    }, [socket ,setMessages, messages])
}

export default useGetRealTimeMessage
