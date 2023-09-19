import { useSelector } from "react-redux"
import { selectPersonInfo } from "redux/intake/intakeSelector"

export const useIntake = () => {

    return {
        intakePersonInfo: useSelector(selectPersonInfo)
    }

}