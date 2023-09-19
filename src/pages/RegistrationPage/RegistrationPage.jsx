import Container from 'components/Container/Container';
import css from './RegistrationPage.module.css';
import RegistrationForm from 'components/RegistrationForm/RegistrationForm';

const RegistrationPage = () => {
  return (
    <div className={css.registrationPage}>
      <Container>{<RegistrationForm />}</Container>
    </div>
  );
};

export default RegistrationPage;
