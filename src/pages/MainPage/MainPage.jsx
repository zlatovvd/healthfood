import Container from 'components/Container/Container';
import css from './MainPage.module.css';
import DailyCaloriesForm from 'components/DailyCaloriesForm/DailyCaloriesForm';

const MainPage = () => {
  return (
    <div className={css.mainPage}>
      <Container>
        <DailyCaloriesForm />
      </Container>
    </div>
  );
};

export default MainPage;
