import { useDispatch } from 'react-redux';
import css from './DiaryProductsList.module.css';
import { diaryDelProductThunk } from 'redux/diary/diaryThunk';

const DiaryProductsListItem = ({ diary }) => {
  const { _id, name, weight, callories } = diary;

  const dispatch = useDispatch();

  const handleClickDel = _id => {
    dispatch(diaryDelProductThunk(_id));
  };

  return (
    <li className={css.diaryProductsListItem}>
      <span className={css.product}>{name}</span>
      <span className={css.grams}>{weight} g</span>
      <span className={css.calories}>{callories} kcal</span>
      <button
        className={css.closeBtn}
        onClick={() => handleClickDel(_id)}
      ></button>
    </li>
  );
};

export default DiaryProductsListItem;
