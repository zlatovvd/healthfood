import { useAuth } from "hooks/useAuth";
import { Navigate, Outlet } from "react-router-dom"

const PrivateRoute = () => {

    const { isRefreshing, isLoggedIn } = useAuth();
    
    return !isLoggedIn && !isRefreshing ? <Navigate to="/login" replace /> : <Outlet />;
}

export default PrivateRoute;