import { useIntake } from "hooks/useIntake";

const useCalculateCalories = () => {

    const {personInfo} = useIntake();

    if(personInfo) {

        const { height, age, cweight, dweight } = personInfo;
        if (height && age && cweight && dweight) {
          return (
            10 * Number(cweight) +
            6.25 * Number(height) -
            5 * Number(age) -
            161 -
            10 * (Number(cweight) - Number(dweight))
          );
        }
        
      }
      return 0;   

}

export default useCalculateCalories;