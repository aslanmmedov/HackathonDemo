
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Register from './pages/register'
import Login from './pages/login'
import Home from './pages/Home'
import ClientLayout from './ClientLayout'
import Confirm from './pages/Confirm'

function App() {
  return (
    <>
      <Routes>
        <Route path = "/" element = {<ClientLayout/>}>
          <Route index element = {<Home/>}/>
          <Route path = "login" element = {<Login/>}/>
          <Route path = "register" element = {<Register/>}/>
          <Route path = "confirm-email/:userId/:token" element = {<Confirm/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
