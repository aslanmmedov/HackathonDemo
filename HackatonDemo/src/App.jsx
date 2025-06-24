import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Register from './pages/register'
import Login from './pages/login'
import Home from './pages/Home'

function App() {
  return (
    <>
      <Routes>
        <Route path = "/">
          <Route index element = {<Home/>}/>
          <Route path = "login" element = {<Login/>}/>
          <Route path = "register" element = {<Register/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
