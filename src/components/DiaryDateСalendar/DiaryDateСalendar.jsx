import css from './DiaryDateСalendar.module.css';
import { Input } from '@chakra-ui/react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectDiaryDate } from 'redux/diary/diarySelector';
import { diaryGetProductThunk } from 'redux/diary/diaryThunk';

const DiaryDateСalendar = () => {
  const day = useSelector(selectDiaryDate);

  const [diaryDate, setDiaryDate] = useState(day);

  const dispatch = useDispatch();

  const handleChange = event => {
    setDiaryDate(event.target.value);
    dispatch(diaryGetProductThunk(event.target.value));
  };

  const onSubmit = () => {
    dispatch(diaryGetProductThunk(diaryDate));
  };

  return (
    // <form onSubmit={onSubmit}>
      <Input
        placeholder="Select Date and Time"
        // size="lg"
        type="date"
        width="auto"
        fontFamily="Verdana"
        // fontSize={34}
        fontWeight={700}
        color="#212121"
        border="transparent"
        onChange={handleChange}
        value={diaryDate}
        className={css.inputDate}
      />
    // </form>
  );
};

export default DiaryDateСalendar;
