import React from 'react'
import Topbar from "../../components/topbar/Topbar"

import './home.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import All from '../All/All'
import Profile from '../Profile/Profile'

const Home = () =>{
    return(
        <BrowserRouter>
       <div>
        <Topbar/>
        
        <div className="homeContainer">
            <Routes>
            <Route path='/' element={<All/>}/>
            <Route path='/profile' element={<Profile/>}/>
            </Routes>
        </div>
       </div>
       </BrowserRouter>
    )
}

export default Home