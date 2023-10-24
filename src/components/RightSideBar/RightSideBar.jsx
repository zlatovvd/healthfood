import useCalculateCalories from 'functions/useCalculateCaories';
import css from './RightSideBar.module.css';
import { useIntake } from 'hooks/useIntake';
import { useDiary } from 'hooks/useDiary';

const RightSideBar = () => {
  const { totalCallories, diaryDateFormated } = useDiary();
  const { personInfo } = useIntake();

  const calculateCalories = useCalculateCalories();

  return (
    <div className={css.rightSideBar}>
      <div className={css.container}>
        <div className={css.summaryLeftWrapper}>
          <h2 className={css.summaryTitle}>Summary for {diaryDateFormated}</h2>
          <ul className={css.summaryList}>
            <li className={css.summaryListItem}>
              <span className={css.summaryText}>Left</span>
              <span className={css.summaryValue}>
                {Math.round(calculateCalories - totalCallories) || '000'} kcal
              </span>
            </li>
            <li className={css.summaryListItem}>
              <span className={css.summaryText}>Consumed</span>
              <span className={css.summaryValue}>
                {Math.round(totalCallories) || '000'} kcal
              </span>
            </li>
            <li className={css.summaryListItem}>
              <span className={css.summaryText}>Daily rate</span>
              <span className={css.summaryValue}>
                {Math.round(calculateCalories) || '000'} kcal
              </span>
            </li>
            <li className={css.summaryListItem}>
              <span className={css.summaryText}>n% of normal</span>
              <span className={css.summaryValue}>
                {calculateCalories > 0
                  ? ((totalCallories * 100) / calculateCalories).toFixed(2)
                  : 0}
                %
              </span>
            </li>
          </ul>
        </div>
        <div className={css.summaryRightWrapper}>
          <h2 className={css.summaryTitle}>Food not recommended</h2>
          {personInfo.notproducts ? (
            personInfo.notproducts.map(item => (
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
