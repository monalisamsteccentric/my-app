import React from 'react'
import './profile.css'
import Feed from "../../components/feed/Feed"
import Rightbar from "../../components/rightbar/Rightbar"
import Sidebar from "../../components/sidebar/Sidebar"
import Topbar from "../../components/topbar/Topbar"
import imagewoman from '../../components/Assets/woman-image.jpg';

const Profile = () => {
  return (
    <>
        
        <div className="profile">
            <Sidebar/>
            <div className="profileright">
                <div className="profilerighttop">
                    <div className="profilecover">
                    <img src="https://cdn.pixabay.com/photo/2016/03/27/22/22/fox-1284512_1280.jpg" alt="cover" className="profilecoverimage" />
                    <img src={imagewoman} alt="user" className="profileuserimage" />
                    </div>
                    <div className="profileinfo">
                        <h4 className="profileinfoname">Cecil Forest</h4>
                        <span className="profileinfodesc">Hello, my friends</span>
                    </div>
                </div>
                 <div className="profilerightbottom">
                 <Feed/>
            <Rightbar profile/>
                 </div>
            </div>
            
        </div>
    </>
  )
}

export default Profile