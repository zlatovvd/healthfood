import css from './CalculatorPage.module.css';

import RightSideBar from 'components/RightSideBar/RightSideBar';
import CalculatorCalorieForm from 'components/CalculatorСalorieForm/CalculatorCalorieForm';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { intakeGetThunk } from 'redux/intake/intakeThunk';
import { useIntake } from 'hooks/useIntake';

const CalculatorPage = () => {
  const dispatch = useDispatch();

  const { intakeIsLoading, intakePersonInfo } = useIntake();

  useEffect( () => {
    dispatch(intakeGetThunk());
  }, [dispatch]);

  return  intakeIsLoading ? (
    <b>...Loading</b>
  ) : (
    <div className={css.calculatorPage}>
      
      <CalculatorCalorieForm />
      {/* <RightSideBar /> */}
    </div>
  );
};

export default CalculatorPage;
