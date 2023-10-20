import css from './CalculatorPage.module.css';

import RightSideBar from 'components/RightSideBar/RightSideBar';
import CalculatorCalorieForm from 'components/CalculatorСalorieForm/CalculatorCalorieForm';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { intakeGetThunk } from 'redux/intake/intakeThunk';
import { useIntake } from 'hooks/useIntake';
import AppSpinner from 'components/AppSpinner/AppSpiner';
import { diaryAddProductThunk, diaryDelProductThunk, diaryGetProductThunk } from 'redux/diary/diaryThunk';

const CalculatorPage = () => {
  const dispatch = useDispatch();

  const { isLoading } = useIntake();

  useEffect( () => {
    dispatch(intakeGetThunk());
    dispatch(diaryGetProductThunk('2023-10-20'));
  }, [dispatch]);

  console.log('load', isLoading)

  return   (
    <div className={css.calculatorPage}>
      {isLoading && <AppSpinner/>}    
      {!isLoading &&
        <><CalculatorCalorieForm />
        <RightSideBar /></>
      }
      
    </div>
  );
};

export default CalculatorPage;
