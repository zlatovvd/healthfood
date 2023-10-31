import { useAuth } from "hooks/useAuth";
import { Navigate, Outlet } from "react-router-dom"

const PrivateRoute = () => {

    const { isRefreshing, isLoggedIn, user, token } = useAuth();
    console.log('login приват', isLoggedIn);
    console.log('refresh приват', isRefreshing);
    console.log('user', user);
    console.log('token', token);
    
    return (user.name && token) ? <Outlet /> : <Navigate to="/login" replace /> ;
}

export default PrivateRoute;