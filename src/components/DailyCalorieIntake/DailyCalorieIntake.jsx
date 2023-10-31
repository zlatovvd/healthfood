import css from './DailyCalorieIntake.module.css';
import { useNavigate } from 'react-router-dom';
import useCalculateCalories from 'functions/useCalculateCaories';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getNotRecommendedProductsThunk } from 'redux/products/productsThunk';
import { useProducts } from 'hooks/useProducts';
import { useIntake } from 'hooks/useIntake';
import { Spinner } from '@chakra-ui/react';

const DailyCalorieIntake = ({ close }) => {
  const calories = useCalculateCalories();
  const { isLoading, notRecommended } = useProducts();
  const { personInfo } = useIntake();

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleModalBtn = () => {
    close();
    navigate('/login');
  };

  useEffect(() => {
    dispatch(getNotRecommendedProductsThunk(personInfo.typeblood));
  }, [dispatch, personInfo.typeblood]);

  return (
    <>
      <h1 className={css.title}>Your recommended daily calorie intake is</h1>
      <div className={css.container}>
        <p className={css.calories}>
          {Math.ceil(calories)}
          <span> ккал</span>
        </p>
        <h2 className={css.foodTitle}>Foods you should not eat</h2>
        {isLoading ? (
          <div className={css.spinner}>
            <Spinner />
          </div>
        ) : (
          <ol className={css.foodList}>
            {notRecommended.map(item => (
              <li key={item} className={css.foodItem}>
                {item}
              </li>
            ))}
          </ol>
        )}
        <button className={css.modalBtn} onClick={handleModalBtn}>
          Start losing weight
        </button>
      </div>
    </>
  );
};

export default DailyCalorieIntake;
