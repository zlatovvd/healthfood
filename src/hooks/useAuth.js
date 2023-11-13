import { useSelector } from "react-redux"
import { selectIsLoading, selectIsLoggedIn, selectIsRefreshing, selectToken, selectUser } from "redux/auth/authSelector";

export const useAuth = () => {

    return {
        isLoggedIn: useSelector(selectIsLoggedIn),
        isRefreshing: useSelector(selectIsRefreshing),
        isLoading: useSelector(selectIsLoading),
        user: useSelector(selectUser),
        token: useSelector(selectToken),
    }

}