import { useAuth } from "hooks/useAuth";
import { Navigate, Outlet } from "react-router-dom"

const PrivateRoute = () => {

    const { user, token } = useAuth();
        
    return (user.name && token) ? <Outlet /> : <Navigate to="/login" replace /> ;
}

export default PrivateRoute;