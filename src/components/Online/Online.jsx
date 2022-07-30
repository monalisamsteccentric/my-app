import './online.css'

import React from 'react'

const Online = ({user}) => {
  return (
    <div>
         <ul className="rightbarfriendlist">
          <li className="rightbarfriend">
            <div className="rightbarprofileimagecontainer">
              <img src={user.profilePicture} alt="woman" className="rightbarprofileimage" />
              <span className="rightbaronline"></span>
            </div>
            <span className="rightbarusername">{user.username}</span>
          </li>
        </ul>
    </div>
  )
}

export default Online