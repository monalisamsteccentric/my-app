import React from 'react'
import './rightbar.css'
import gift from '../Assets/gift.png'
import add from '../Assets/add.jpg'
import {Users} from '../Assets/dummydata'
import Online from '../Online/Online'

const Rightbar = ({profile}) => {

   const HomeRightbar = () =>{
    return(
      <>
        <div className="birthdayContainer">
            <img src={gift} alt="gift" className="birthdayimage" />
            <span className="birthdaytext">
              <b> Shikha Verma </b> and <b>3 others</b> have birthdays today
            </span>
        </div>
        <img src={add} alt="add" className="rightbaradd" />
        <h4 className="rightbartitle">Online Friends</h4>
          {
            Users.map((u)=>{
               return(
                <Online user={u}/>
               )
            })
          }
      </>
    )
   }
const Profilerightbar = () =>{
  return(
    <>
    <h4 className="rightbartitle">User Information</h4>
    <div className="rightbarinfo">
      <div className="rightbarinfoitem">
        <span className="rightbarinfokey">
          City: 
        </span>
        <span className="rightbarinfoValue">
          New York
        </span>
      </div>
      <div className="rightbarinfoitem">
        <span className="rightbarinfokey">
          From: 
        </span>
        <span className="rightbarinfoValue">
          Madrid
        </span>
      </div>
      <div className="rightbarinfoitem">
        <span className="rightbarinfokey">
          Relationship: 
        </span>
        <span className="rightbarinfoValue">
          Single
        </span>
      </div>
    </div>
    <h4 className="rightbartitle">User Friends</h4>
    <div className="rightbarfollowings">
      {
        Users.map((u)=>{
         return(
          <div key={u.id} className="righbarfollowing">
          <img src={u.profilePicture} alt="following" className="rightbarfollowingimage" />
          <span className="rightbarfollowingname">{u.username}</span>
        </div>
         )
        })
      }
    </div>
    </>
  )
}

  return (
    <div className="rightBar">
      <div className="rightbarwrapper">
        {
          profile ? <Profilerightbar/> : <HomeRightbar/>
        }
      </div>
    </div>
  )
}

export default Rightbar