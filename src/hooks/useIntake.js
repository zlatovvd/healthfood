import { useSelector } from "react-redux"
import { selectIsLoading, selectPersonInfo } from "redux/intake/intakeSelector"

export const useIntake = () => {

    return {
        personInfo: useSelector(selectPersonInfo),
        isLoading: useSelector(selectIsLoading),
    }

}