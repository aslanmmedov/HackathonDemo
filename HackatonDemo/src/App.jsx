
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
import Orders from './AdminDashboard/pages/Orders'
import Products from './AdminDashboard/pages/Products'
import Stores from './AdminDashboard/pages/Stores'
import Users from './AdminDashboard/pages/Users'
import Suppliers from './AdminDashboard/pages/Suppliers'
import AdminLayout from './AdminDashboard/pages/AdminLayout'
import Dashboard from './AdminDashboard/pages/Dashboard'

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
        <Route path = "/admin_dashboard" element = {<AdminLayout/>}>
          <Route index element = {<Dashboard/>}/>
          <Route path = "orders" element = {<Orders/>}/>
          <Route path = "products" element = {<Products/>}/>
          <Route path = "stores" element = {<Stores/>}/>
          <Route path = "users" element = {<Users/>}/>
          <Route path = "suppliers" element = {<Suppliers/>}/>
        </Route>
      </Routes>
       <ToastContainer position="top-right" autoClose={3000} />
    </>
  )
}

export default App
