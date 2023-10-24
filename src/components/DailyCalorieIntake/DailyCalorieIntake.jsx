import css from './DailyCalorieIntake.module.css';
import { useNavigate } from 'react-router-dom';
import useCalculateCalories from 'functions/useCalculateCaories';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getNotRecommendedProductsThunk } from 'redux/products/productsThunk';
import useNotRecommendedProduct from 'functions/useNotRecommendedProduct';

const DailyCalorieIntake = ({close}) => {
  
  const calories = useCalculateCalories();
  const notRecommended = useNotRecommendedProduct();

  const dispatch = useDispatch();
  
  const navigate = useNavigate();

  const handleModalBtn = () => {
    close();
    navigate('/login');
  }

  useEffect(() => {
    dispatch(getNotRecommendedProductsThunk(1))
  }, [dispatch]);

  return (
    <>
      <h1 className={css.title}>Your recommended daily calorie intake is</h1>
      <div className={css.container}>
        <p className={css.calories}>
          {Math.ceil(calories)}
          <span> ккал</span>
        </p>
        <h2 className={css.foodTitle}>Foods you should not eat</h2>
        <ol className={css.foodList}>
          {notRecommended.map(item => (
            <li key={item} className={css.foodItem}>
              {item}
            </li>
          ))}
        </ol>
        <button className={css.modalBtn} onClick={handleModalBtn}>Start losing weight</button>
      </div>
    </>
  );
};

export default DailyCalorieIntake;
