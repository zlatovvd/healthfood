import { useAuth } from 'hooks/useAuth';
import css from './CalculatorCalorieForm.module.css';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectPersonInfo } from 'redux/intake/intakeSelector';
import { intakeAddThunk, intakeGetThunk, intakeUpdateThunk } from 'redux/intake/intakeThunk';

const CalculatorCalorieForm = () => {
  const personInfo = useSelector(selectPersonInfo);

  console.log(personInfo);

  const [values, setValues] = useState(personInfo);

  const {user} = useAuth();

  const dispatch = useDispatch();

  const handleChange = event => {
    const { name, value } = event.target;

    setValues(prev => ({ ...prev, [name]: value }));
  };

  const onSubmit = event => {
    event.preventDefault();
<<<<<<< HEAD
    console.log('person', personInfo);
    if (values._id) {
      console.log('values id', values.owner);
      
      dispatch(intakeUpdateThunk(values._id, values));
=======
    if (values.owner) {
      console.log('owner', values.owner);
      dispatch(intakeUpdateThunk(values));
>>>>>>> a7234e7ecb50f58c0d4b2dd526a8d635991c96db
    } else {
      dispatch(intakeAddThunk(values));
    }
  };

  useEffect(() => {
    dispatch(intakeGetThunk());
  }, [dispatch])

  return (
    <form className={css.calculateForm} onSubmit={onSubmit}>
      <h1 className={css.title}>
        Calculate your daily calorie intake right now
      </h1>
      <div className={css.inputWrapper}>
        <label className={css.inputLabel}>
          Height *
          <input
            className={css.formInput}
            type="text"
            name="height"
            onChange={handleChange}
            value={values.height}
            pattern="^[0-9]{2,3}"
            required
          />
        </label>
        <label className={css.inputLabel}>
          Age *
          <input
            className={css.formInput}
            type="text"
            name="age"
            onChange={handleChange}
            value={values.age}
            pattern="^[0-9]{2,3}"
            required
          />
        </label>

        <label className={css.inputLabel}>
          Current weight *
          <input
            className={css.formInput}
            type="text"
            name="cweight"
            onChange={handleChange}
            value={values.cweight}
            pattern="^[0-9]{2,3}"
            required
          />
        </label>
        <label className={css.inputLabel}>
          Desired weight *
          <input
            className={css.formInput}
            type="text"
            name="dweight"
            onChange={handleChange}
            value={values.dweight}
            pattern="^[0-9]{2,3}"
            required
          />
        </label>
        <div>
          <p className={css.bloodTitle}>Blood type *</p>
          <div className={css.radioRow}>
            <label className={css.radioLabel}>
              <input
                type="radio"
                name="typeblood"
                checked={Number(values.typeblood) === 1}
                className={css.inputRadio}
                value="1"
                onChange={handleChange}
              />
              <span className={css.radio}></span>
              <span className={css.radioMessage}>1</span>
            </label>
            <label className={css.radioLabel}>
              <input
                type="radio"
                checked={Number(values.typeblood) === 2}
                name="typeblood"
                className={css.inputRadio}
                value="2"
                onChange={handleChange}
              />
              <span className={css.radio}></span>
              <span className={css.radioMessage}>2</span>
            </label>
            <label className={css.radioLabel}>
              <input
                type="radio"
                checked={Number(values.typeblood) === 3}
                name="typeblood"
                className={css.inputRadio}
                value="3"
                onChange={handleChange}
              />
              <span className={css.radio}></span>
              <span className={css.radioMessage}>3</span>
            </label>
            <label className={css.radioLabel}>
              <input
                type="radio"
                checked={Number(values.typeblood) === 4}
                name="typeblood"
                className={css.inputRadio}
                value="4"
                onChange={handleChange}
              />
              <span className={css.radio}></span>
              <span className={css.radioMessage}>4</span>
            </label>
          </div>
        </div>
      </div>
       
      <button className={css.submitBtn} type="submit">
        Start losing weight
      </button>
    </form>
  );
};

export default CalculatorCalorieForm;
