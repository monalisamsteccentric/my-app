import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import imagewoman from '../Assets/woman-image.jpg';
import {NavLink} from 'react-router-dom'
import './topbar.css'
 
const Topbar = () =>{
    return(
      <div className="topbarContainer">
        <div className="topbarLeft">
            <span className="logo">
                MerrySocial
            </span>
        </div>
        <div className="topbarCenter">
            <div className="searchbar">
              <SearchIcon className='searchicon'/>
              <input type="text" className="searchInput" placeholder='Search for friends, post or video'/>
            </div>
        </div>
        <div className="topbarRight">
            <div className="topbarlinks">
                
                <span>
                <NavLink to='/' style={{
                    marginRight: '10px',
                    fontSize: '14px',
                    cursor: 'pointer',
                    textDecoration: 'none',
                    color:'white'
                }}>
                    Homepage
                    </NavLink>
                </span>
                
                
                <span className="topbarlink">Timeline</span>
            </div>
            <div className="topbaricons">
                <div className="topbariconitem">
                <PersonIcon/>
                <span className="topbariconbadge">1</span>
                </div>
                <div className="topbariconitem">
                <ChatIcon/>
                <span className="topbariconbadge">1</span>
                </div>
                <div className="topbariconitem">
                <NotificationsIcon/>
                <span className="topbariconbadge">1</span>
                </div>
            </div>

        </div>
        <NavLink to={'/profile'}>
        <img src={imagewoman} alt="woman" className="topbarImage" /> 
        </NavLink>
        
      </div>
    )
}

export default Topbar