
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Register from './pages/register'
import Login from './pages/login'
import Home from './pages/Home'
import ClientLayout from './ClientLayout'
import Confirm from './pages/Confirm'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ForgotPassword from './pages/ForgotPassword'
import VerifyForgotPassword from './pages/ForgotPassword/VerifyForgotPassword'
import UpdatePassword from './pages/UpdatePassword'
function App() {
  return (
    <>
      <Routes>
        <Route path = "/" element = {<ClientLayout/>}>
          <Route index element = {<Home/>}/>
          <Route path = "login" element = {<Login/>}/>
          <Route path = "register" element = {<Register/>}/>
          <Route path = "confirm-email/:userId/:token" element = {<Confirm/>}/>
          <Route path = "forgot-password" element = {<ForgotPassword/>}/>
          <Route path = "confirm-email/:userId/:token" element = {<Confirm/>}/>
          <Route path = "update-password/:userId/:resetToken" element = {<VerifyForgotPassword/>}/>
           <Route path = "update-password" element = {<UpdatePassword/>}/>
        </Route>
      </Routes>
       <ToastContainer position="top-right" autoClose={3000} />
    </>
  )
}

export default App
