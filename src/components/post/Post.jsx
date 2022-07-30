import React, { useState } from 'react'

import './post.css'
import like from '../Assets/like.png'
import heart from '../Assets/heart.png'
import {Users} from '../Assets/dummydata'

const Post = ({post}) => {
  const [likee, setlike] = useState(post.like)
  const [islike, setIsLike] = useState(false)
  const user = Users.filter(u=> u.id === post.id)
  const likeHandler = () =>{
    setlike(islike ? likee-1 : likee+1)
    setIsLike(!islike)
  }
  return (
    <div className="post">
        <div className="postWrapper">
            <div className="postTop">
              <div className="posttopleft">
                <img src={user[0].profilePicture} alt="woman" className="postprofileimage" />
                <span className="postusername">{user[0].username}</span>
                <span className="postdate">{post.date}</span>
              </div>
              <div className="posttopright"></div>
            </div>
            <div className="postCenter">
              <span className="posttext">{post.desc}</span>
              <img src={post.photo} alt="woman" className="postimage" />
            </div>
            <div className="postBottom">
              <div className="postbottomleft">
                  <img src={like} alt="like" onClick={likeHandler} className="likeicon" />
                  <img src={heart} alt="heart" onClick={likeHandler} className="likeicon" />
                  <span className="postlikecounter">{likee} people liked this post</span>
              </div>
              <div className="postbottomright">
                <span className="postcommenttext">{post.comment} comments</span>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Post