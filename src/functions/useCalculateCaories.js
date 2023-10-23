import { useIntake } from "hooks/useIntake";

const useCalculateCalories = () => {

    const {personInfo} = useIntake();

    console.log('use Calc', personInfo);

    if(personInfo) {

        const { height, age, cweight, dweight } = personInfo;
        
        return (
          10 * Number(cweight) +
          6.25 * Number(height) -
          5 * Number(age) -
          161 -
          10 * (Number(cweight) - Number(dweight))
        );
      }
      return 0;
      

}

export default useCalculateCalories;