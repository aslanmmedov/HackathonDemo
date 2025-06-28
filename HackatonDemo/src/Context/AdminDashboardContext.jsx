import { jwtDecode } from "jwt-decode";
import { createContext, useEffect, useState } from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

export const AuthAdminContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(Cookies.get("token") || null);
    const [rol,setRol] = useState(null);
    const [decodedToken, setDecodedToken] = useState(null); 
    const nav = useNavigate()
    function handleLogin(value,navigate) {
        if (!value) return;
        try {
            const decoded = jwtDecode(value);
            const expiresInDays = (decoded.exp * 1000 - Date.now()) / (1000 * 60 * 60 * 24);
            const role = decoded.role;
            if(role !== null){
                setRol(duty);
            }
            Cookies.set("token", value, { expires: expiresInDays });
            setToken(value);
            setDecodedToken(decoded);
            nav(navigate);
        } catch (error) {
            console.log("Invalid token:", error);
            setToken(null);
            setDecodedToken(null);
            Cookies.remove("token");
        }
    }

    function handleLogout() {
        setToken(null);
        setDecodedToken(null);
        Cookies.remove("token");
        nav("/");
    }

    useEffect(() => {
        const savedToken = Cookies.get("token");
        if (savedToken) {
            handleLogin(savedToken);
        }
    }, []);

    return (
        <AuthContext.Provider value={{ token, decodedToken,vezife, handleLogin, handleLogout }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;