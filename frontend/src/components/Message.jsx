import React from 'react'
import { useSelector } from 'react-redux'

const Message = ({message}) => {
  const {selectedUser} = useSelector(store=>store.user)
  const {messages} = useSelector(store=>store.message)
  return (
    <div>
      <div className="chat chat-start">
  <div className="chat-image avatar">
    <div className="w-10 rounded-full">
      <img
        alt="Tailwind CSS chat bubble component"
        src={selectedUser.profilePhoto}
      />
    </div>
  </div>
  <div className="chat-header">
    
    <time className="text-xs opacity-50">{message.createdAt}</time>
  </div>
  <div className="chat-bubble">{message?.message}!</div>
  <div className="chat-footer opacity-50"></div>
</div>
    </div>
  )
}

export default Message
