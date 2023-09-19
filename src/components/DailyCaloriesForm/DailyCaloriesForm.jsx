import { useToggle } from 'hooks/useToggle';
import css from './DailyCaloriesForm.module.css';
import Modal from 'components/Modal/Modal';
import DailyCalorieIntake from 'components/DailyCalorieIntake/DailyCalorieIntake';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addPersonInfo } from 'redux/intake/intakeSlice';

const DailyCaloriesForm = () => {
  const { isOpen, toggle } = useToggle();
  const [typeblood, setTypeBlood] = useState('1');
  const [height, setHeight] = useState('');
  const [age, setAge] = useState('');
  const [cweight, setCWeight] = useState('');
  const [dweight, setDWeight] = useState('');

  const dispatch = useDispatch();

  const handleChange = event => {
    const { name, value } = event.target;
    switch (name) {
      case 'typeblood':
        setTypeBlood(value);
        break;
      case 'height':
        setHeight(value);
        break;
      case 'age':
        setAge(value);
        break;
      case 'cweight':
        setCWeight(value);
        break;
      case 'dweight':
        setDWeight(value);
        break;
      default:
    }
  };

  const onSubmit = event => {
    event.preventDefault();
    dispatch(addPersonInfo({ height, age, cweight, dweight, typeblood }));
    toggle();
  };

  return (
    <>
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
              value={height}
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
              value={age}
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
              value={cweight}
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
              value={dweight}
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
                  checked={typeblood === '1'}
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
                  checked={typeblood === '2'}
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
                  checked={typeblood === '3'}
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
                  checked={typeblood === '4'}
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

      {isOpen && (
        <Modal close={toggle}>
          <DailyCalorieIntake close={toggle} />
        </Modal>
      )}
    </>
  );
};

export default DailyCaloriesForm;
