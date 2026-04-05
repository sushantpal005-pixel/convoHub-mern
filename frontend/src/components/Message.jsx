import React, { useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'

const Message = ({ message }) => {
  const scroll = useRef()
  const { authUser } = useSelector(store => store.user)
  const { selectedUser } = useSelector(store => store.user)
  const { messages } = useSelector(store => store.message)
  useEffect(() => {
    scroll.current?.scrollIntoView({ behavior: "smooth" })
  }, [message])
  return (
    <div ref={scroll} className={`chat ${message?.senderId?.toString() === authUser?._id?.toString() ? "chat-end" : "chat-start"}`}>
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS chat bubble component"
            src={message?.senderId === authUser?._id ? authUser?.profilePhoto : selectedUser?.profilePhoto}
          />
        </div>
      </div>
      <div className="chat-header">
        <time className="text-xs opacity-50">
          {new Date(message.createdAt).toLocaleString([], {
            day: '2-digit',
            month: 'short',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
          })}
        </time>
      </div>
      <div className={`chat-bubble ${message?.senderId !== authUser?._id ? 'bg-gray-200 text-black md:max-w-[550px]' : ''} `}>{message?.message}</div>

    </div>

  )
}

export default Message
