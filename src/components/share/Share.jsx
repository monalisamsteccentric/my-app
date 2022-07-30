import React from 'react'
import imagewoman from '../Assets/woman-image.jpg';
import PermMediaIcon from '@mui/icons-material/PermMedia';
import TagIcon from '@mui/icons-material/Tag';
import MoodIcon from '@mui/icons-material/Mood';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import './share.css'

const Share = () => {
  return (
    <div className="share">
        <div className="shareWrapper">
        <div className="shareTop">
           <img src={imagewoman} alt="woman" className="shareprofileimage" />
           <input type="text" placeholder="What is on your mind Monalisa?" className="shareInput" />
        </div>
        <hr className="sharehr" />
        <div className="shareBottom">
          <div className="shareoption">
            <PermMediaIcon htmlColor='tomato' className='shareIcon'/>
            <span className="shareoptiontext">photo or video</span>
            <TagIcon htmlColor='blue' className='shareIcon'/>
            <span className="shareoptiontext">Tag</span>
            <LocationOnIcon htmlColor='green'className='shareIcon'/>
            <span className="shareoptiontext">Location</span>
            <MoodIcon htmlColor='goldenrod' className='shareIcon'/>
            <span className="shareoptiontext">emoji</span>
          
          </div>
          <button className="sharebutton">Share</button>
        </div>
    </div>
    </div>

  )
}

export default Share