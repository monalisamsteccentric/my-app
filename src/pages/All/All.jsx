import React from 'react'
import Feed from '../../components/feed/Feed'
import Rightbar from '../../components/rightbar/Rightbar'
import Sidebar from '../../components/sidebar/Sidebar'

const All = () => {
  return (
    <>
        <Sidebar/>
        <Feed/>
        <Rightbar/>
    </>
  )
}

export default All