import { useDiary } from 'hooks/useDiary';
import css from './DiaryDateСalendar.module.css';
import { Input } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setDiaryDate } from 'redux/diary/diarySlice';

const DiaryDateСalendar = () => {
  const { diaryDate } = useDiary();

  const [calendar, setCalendar] = useState(diaryDate);

  const dispatch = useDispatch();

  const handleChange = event => {
    setCalendar(event.target.value);
  };

  useEffect(() => {
    dispatch(setDiaryDate(calendar));
  }, [calendar, dispatch]);

  return (
    <Input
      placeholder="Select Date and Time"
      type="date"
      width="auto"
      fontFamily="Verdana"
      fontWeight={700}
      color="#212121"
      border="transparent"
      onChange={handleChange}
      value={calendar}
      className={css.inputDate}
    />
  );
};

export default DiaryDateСalendar;
