import css from './RightSideBar.module.css';
import { useSelector } from 'react-redux';
import {
  selectDiaryDateFormated,
  selectTotalCalories,
} from 'redux/diary/diarySelector';
import {
  selectCalculateDailyCalories,
  selectNotRecommendedProducts,
} from 'redux/products/productsSelector';

const RightSideBar = () => {
  const diaryDate = useSelector(selectDiaryDateFormated);
  const totalCalories = useSelector(selectTotalCalories);
  const calculateCalories = useSelector(selectCalculateDailyCalories);
  const notRecommended = useSelector(selectNotRecommendedProducts);

  console.log(notRecommended);

  return (
    <div className={css.rightSideBar}>
      <div className={css.container}>
        <div className={css.summaryLeftWrapper}>
          <h2 className={css.summaryTitle}>Summary for {diaryDate}</h2>
          <ul className={css.summaryList}>
            <li className={css.summaryListItem}>
              <span className={css.summaryText}>Left</span>
              <span className={css.summaryValue}>
                {(Math.round(calculateCalories - totalCalories)) || '000'} kcal
              </span>
            </li>
            <li className={css.summaryListItem}>
              <span className={css.summaryText}>Consumed</span>
              <span className={css.summaryValue}>
                {(Math.round(totalCalories)) || '000'} kcal
              </span>
            </li>
            <li className={css.summaryListItem}>
              <span className={css.summaryText}>Daily rate</span>
              <span className={css.summaryValue}>
                {(Math.round(calculateCalories)) || '000'} kcal
              </span>
            </li>
            <li className={css.summaryListItem}>
              <span className={css.summaryText}>n% of normal</span>
              <span className={css.summaryValue}>
                {calculateCalories > 0
                  ? ((totalCalories * 100) / calculateCalories).toFixed(2)
                  : 0}
                %
              </span>
            </li>
          </ul>
        </div>
        <div className={css.summaryRightWrapper}>
          <h2 className={css.summaryTitle}>Food not recommended</h2>
          {notRecommended.length > 0 ? (
            notRecommended.map(item => (
              <p className={css.notRecommended} key={item}>
                {item}
              </p>
            ))
          ) : (
            <p className={css.notRecommended}>
              Your diet will be displayed here
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default RightSideBar;
