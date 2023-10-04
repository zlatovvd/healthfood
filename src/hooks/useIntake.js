import { useSelector } from "react-redux"
import { selectIsLoading, selectPersonInfo } from "redux/intake/intakeSelector"

export const useIntake = () => {

    return {
        intakePersonInfo: useSelector(selectPersonInfo),
        intakeIsLoading: useSelector(selectIsLoading),
    }

}