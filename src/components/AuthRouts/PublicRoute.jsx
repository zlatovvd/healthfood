import { useAuth } from "hooks/useAuth";
import { Navigate, Outlet } from "react-router-dom"

const PublicRoute = () => {

    const { user, token } = useAuth();
       
    return (user.name && token ) ? <Navigate to="/calculator" /> : <Outlet/>

}

export default PublicRoute;