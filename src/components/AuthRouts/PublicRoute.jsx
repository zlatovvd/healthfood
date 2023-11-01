import { useAuth } from "hooks/useAuth";
import { Navigate, Outlet } from "react-router-dom"

const PublicRoute = () => {

    const { isRefreshing , isLoggedIn, user, token } = useAuth();
    console.log('login публик', isLoggedIn);
    console.log('refresh публик', isRefreshing);
    
    return (user.name && token ) ? <Navigate to="/calculator" /> : <Outlet/>

}

export default PublicRoute;