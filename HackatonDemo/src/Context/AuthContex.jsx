
import { createContext, useContext, useState } from 'react';
import controller from '../Api/controllers';
import { useNavigate } from 'react-router-dom';
export const AuthContext = createContext(null);

 const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    let navigate = useNavigate()

    const register = async (values) => {
        try {
            await controller.addNewData("Users", values);
            // navigate("/login");
        } catch (error) {
            console.error(error?.response?.data?.message || error.message);

        }
    };
    const login = async (values) => {
        try {
            const response = await controller.addNewData('login',values);


            
        } catch (error) {
            console.error(error?.response?.data?.message || error.message);
            
        }

    }
    const values = {
        login,
        register,
    };
    return (
        <AuthContext.Provider value={values}>
            {children}
        </AuthContext.Provider>
    );
}
export default AuthProvider;