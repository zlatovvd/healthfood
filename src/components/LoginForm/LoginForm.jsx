import { useState } from 'react';
import css from './LoginForm.module.css';
import { useDispatch } from 'react-redux';
import { authLoginThunk } from 'redux/auth/authThunk';
import { useNavigate } from 'react-router-dom';

const initialState = {
  email: '',
  password: ''
}

const LoginForm = () => {
  
  const [values, setValues] = useState(initialState);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleOnChange = event => {
    const { name, value } = event.currentTarget;

    setValues(prev => ({ ...prev, [name]: value }));

  };

  
  const handleRegisteBtn = () => {navigate('/registration');};

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(authLoginThunk(values));
  };

  return (
    <form onSubmit={handleSubmit} className={css.loginForm}>
      <h2 className={css.title}>Log in</h2>
      <label className={css.formLabel}>
        Email*
        <input
          type="text"
          className={css.email}
          name="email"
          value={values.email}
          onChange={handleOnChange}
          required
        />
      </label>
      <label className={css.formLabel}>
        Password*
        <input
          type="password"
          className={css.password}
          name="password"
          value={values.password}
          onChange={handleOnChange}
          required
        />
      </label>

      <div>
        <button className={css.button} type='submit'>
          Log in
        </button>
        <button className={css.button} onClick={handleRegisteBtn}>
          Register
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
