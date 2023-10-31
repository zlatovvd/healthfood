import { useSelector } from "react-redux"
import { selectIsLoggedIn, selectIsRefreshing, selectToken, selectUser } from "redux/auth/authSelector";

export const useAuth = () => {

    return {
        isLoggedIn: useSelector(selectIsLoggedIn),
        isRefreshing: useSelector(selectIsRefreshing),
        user: useSelector(selectUser),
        token: useSelector(selectToken)
    }

}