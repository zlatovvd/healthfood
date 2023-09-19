import { useSelector } from "react-redux"
import { selectIsLoggedIn, selectUser } from "redux/auth/authSelector";

export const useAuth = () => {

    return {
        isLoggedIn: useSelector(selectIsLoggedIn),
        user: useSelector(selectUser),
    }

}