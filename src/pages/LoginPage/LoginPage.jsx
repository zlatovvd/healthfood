
import Container from 'components/Container/Container';
import css from './LoginPage.module.css';
import LoginForm from 'components/LoginForm/LoginForm';
import { useAuth } from 'hooks/useAuth';
import AppSpinner from 'components/AppSpinner/AppSpiner';

const LoginPage = () => {

  const {isLoading} = useAuth;

  return (
    <div className={css.loginPage}>
      <Container>
        <LoginForm />
      </Container>
      {isLoading && <AppSpinner/>}
    </div>
  );
};

export default LoginPage;
