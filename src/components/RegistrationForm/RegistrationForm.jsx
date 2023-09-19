import { useState } from 'react';
import css from './RegistrationForm.module.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { authRegisterThunk } from 'redux/auth/authThunk';

const initialState = {
  name: '',
  email: '',
  password: '',
}

const RegistrationForm = () => {
  
  const [values, setValues] = useState(initialState);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleOnChange = event => {
    const { name, value } = event.target;
    setValues(prev => ({ ...prev, [name]: value }));
  };

  const handleLoginBtn = () => {
    navigate('/login');
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(authRegisterThunk(values));
  };

  return (
    <form onSubmit={handleSubmit} className={css.registerForm}>
      <h2 className={css.title}>Register</h2>
      <label className={css.formLabel}>
        "Name*
        <input
          type="text"
          className={css.regname}
          name="name"
          value={values.name}
          onChange={handleOnChange}
          required
        />
      </label>
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
          Register
        </button>
        <button className={css.button} onClick={handleLoginBtn} type='button'>
          Log in
        </button>
      </div>
    </form>
  );
};

export default RegistrationForm;
