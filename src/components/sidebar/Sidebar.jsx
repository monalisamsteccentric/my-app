import React from 'react'
import './sidebar.css'
import RssFeedIcon from '@mui/icons-material/RssFeed';
import ChatIcon from '@mui/icons-material/Chat';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import GroupIcon from '@mui/icons-material/Group';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import WorkIcon from '@mui/icons-material/Work';
import EventIcon from '@mui/icons-material/Event';
import CastForEducationIcon from '@mui/icons-material/CastForEducation';
import {Users} from '../Assets/dummydata'
import Closefriends from '../Closefriends/Closefriends';

const Sidebar = () => {
  return (
    <div className="sideBar">
      <div className="sidebarWrapper">
        <ul className="sidebarlist">
          <li className="sidebarlistitem">
             <RssFeedIcon className='sidebaricon'/>
             <span className="sidebarlistitemtext">feed</span>
          </li>
          <li className="sidebarlistitem">
             <ChatIcon className='sidebaricon'/>
             <span className="sidebarlistitemtext">chat</span>
          </li>
          <li className="sidebarlistitem">
             <VideoLibraryIcon className='sidebaricon'/>
             <span className="sidebarlistitemtext">videos</span>
          </li>
          <li className="sidebarlistitem">
             <GroupIcon className='sidebaricon'/>
             <span className="sidebarlistitemtext">group</span>
          </li>
          <li className="sidebarlistitem">
             <BookmarkIcon className='sidebaricon'/>
             <span className="sidebarlistitemtext">bookmark</span>
          </li>
          <li className="sidebarlistitem">
             <WorkIcon className='sidebaricon'/>
             <span className="sidebarlistitemtext">work</span>
          </li>
          <li className="sidebarlistitem">
             <EventIcon className='sidebaricon'/>
             <span className="sidebarlistitemtext">event</span>
          </li>
          <li className="sidebarlistitem">
             <CastForEducationIcon className='sidebaricon'/>
             <span className="sidebarlistitemtext">courses</span>
          </li>
        </ul>
        <button className="sidebarbutton">Show More</button>
        <hr className="sidebarhr" />
        {
          Users.map((u)=>{
            return(
             <Closefriends user={u}/>
            )
          })
        }
      </div>
    </div>
  )
}

export default Sidebar