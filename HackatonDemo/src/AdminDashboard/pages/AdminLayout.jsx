
import { Outlet } from 'react-router'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import "../Styles/style.scss"
function AdminLayout() {
    return (
        <div className="admin-content">
            <Sidebar />
            <div className="containerr">
                <Navbar />
                <Outlet />
            </div>
        </div>
    )
}

export default AdminLayout