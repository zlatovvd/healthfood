import css from './CalculatorPage.module.css';

import RightSideBar from 'components/RightSideBar/RightSideBar';
import CalculatorCalorieForm from 'components/CalculatorСalorieForm/CalculatorCalorieForm';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { intakeGetThunk } from 'redux/intake/intakeThunk';
import { useIntake } from 'hooks/useIntake';
import AppSpinner from 'components/AppSpinner/AppSpiner';

const CalculatorPage = () => {
  const dispatch = useDispatch();

  const { isLoading } = useIntake();

  useEffect( () => {
    dispatch(intakeGetThunk());
  }, [dispatch]);

  console.log('load', isLoading)

  return   (
    <div className={css.calculatorPage}>
      {isLoading && <AppSpinner/>}    
      <CalculatorCalorieForm />
      <RightSideBar />
    </div>
  );
};

export default CalculatorPage;
