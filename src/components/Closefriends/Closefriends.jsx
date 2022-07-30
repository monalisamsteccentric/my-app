import React from 'react'
import './closefriends.css'

const Closefriends = ({user}) => {
  return (
    <div>
        <ul className="sidebarfriendlist">
          <li className="sidebarfriend">
            <img src={user.profilePicture} alt="friend" className="sidebarfriendimage" />
            <span className="sidebarfriendname">{user.username}</span>
          </li>      
        </ul>
    </div>
  )
}

export default Closefriends