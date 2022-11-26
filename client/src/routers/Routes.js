import React, { useContext } from 'react'
import { Routes, Route, Navigate, Redirect} from 'react-router-dom'
import { AuthContext } from '../context/authContext/AuthContext'

import Home from '../pages/home/Home'
import Login from '../pages/login/Login'
import Register from '../pages/register/Register'
import Watch from '../pages/watch/Watch'
import Detail from '../pages/Detail/Detail'
import Search from '../pages/Search/Search'
import Person from '../pages/Person/Person' 
import Persond from '../pages/Person/Persond' 
import Plan from '../pages/Plan/Plan' 

const Routers = () => {
  const { user } = useContext(AuthContext);
  // const user = true;
  return (
    <Routes>
        <Route path='/' extract element={user===null ? <Navigate to="/login" /> : <Home/>} />
        <Route path='/home' element={user===null ? <Navigate to="/login" /> : <Home/>} /> 
        <Route path='/movies' element={user===null ? <Navigate to="/login" /> : <Home type = "movies"/>} />
        <Route path='/series' element={user===null ? <Navigate to="/login" /> : <Home type = "series"/>}  />
        <Route path="/login" element={user!==null ? <Navigate to="/home" /> : <Login />}/>
        <Route path='/register' element={user!==null ? <Navigate to="/home" /> : <Register />} />
        <Route path='/watch' element={user===null ? <Navigate to="/login" /> : <Watch/>} />
        <Route path='/detail' element={user===null ? <Navigate to="/login" /> : <Detail/>} />
        <Route path='/search' element={user===null ? <Navigate to="/login" /> : <Search/>} />
        <Route path='/person' element={user===null ? <Navigate to="/login" /> : <Person/>} />
        <Route path='/plan' element={user===null ? <Navigate to="/login" /> : <Plan/>} />
        <Route path='/persond' element={user===null ? <Navigate to="/login" /> : <Persond/>} />
    </Routes>
  )
}

export default Routers