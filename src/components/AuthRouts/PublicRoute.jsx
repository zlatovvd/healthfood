import { useAuth } from "hooks/useAuth";
import { Navigate, Outlet } from "react-router-dom"

const PublicRoute = () => {

    const { isLoggedIn } = useAuth();
    
    return (!isLoggedIn) ? <Outlet/> : <Navigate to="/calculator" />

}

export default PublicRoute;