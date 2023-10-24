import css from './CalculatorPage.module.css';

import RightSideBar from 'components/RightSideBar/RightSideBar';
import CalculatorCalorieForm from 'components/CalculatorСalorieForm/CalculatorCalorieForm';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { intakeGetThunk } from 'redux/intake/intakeThunk';
import { useIntake } from 'hooks/useIntake';
import AppSpinner from 'components/AppSpinner/AppSpiner';
import { diaryGetProductThunk } from 'redux/diary/diaryThunk';
import { useDiary } from 'hooks/useDiary';

const CalculatorPage = () => {
  const dispatch = useDispatch();

  const { isLoading } = useIntake();
  const { diaryDate } = useDiary();

  useEffect(() => {
    dispatch(intakeGetThunk());
    dispatch(diaryGetProductThunk(diaryDate));
  }, [dispatch, diaryDate]);

  return (
    <div className={css.calculatorPage}>
      {isLoading && <AppSpinner />}
      {!isLoading && (
        <>
          <CalculatorCalorieForm />
          <RightSideBar />
        </>
      )}
    </div>
  );
};

export default CalculatorPage;
