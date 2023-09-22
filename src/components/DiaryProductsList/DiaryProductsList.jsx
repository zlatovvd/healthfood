import css from './DiaryProductsList.module.css';
import { useSelector } from 'react-redux';
import { selectDiary } from 'redux/diary/diarySelector';
import DiaryProductsListItem from './DiaryProductsListItem';

const DiaryProductsList = () => {
  const diary = useSelector(selectDiary);

  return (
    <div className={css.productList}>
      <ul className={css.diaryProductsList}>
        {diary.map(item => (
          <DiaryProductsListItem key={item._id} diary={item} />
        ))}
      </ul>

    </div>
  );
};

export default DiaryProductsList;
