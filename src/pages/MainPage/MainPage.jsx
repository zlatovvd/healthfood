import Container from 'components/Container/Container';
import css from './MainPage.module.css';
import DailyCaloriesForm from 'components/DailyCaloriesForm/DailyCaloriesForm';
import Loader from 'components/Loader/Loader';

const MainPage = () => {
  return (
    <div className={css.mainPage}>
      <Container>
        {/* <Loader /> */}
        <DailyCaloriesForm />
      </Container>
    </div>
  );
};

export default MainPage;
