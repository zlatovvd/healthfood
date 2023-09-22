import css from './DiaryPage.module.css';
import DiaryAddProductForm from 'components/DiaryAddProductForm/DiaryAddProductForm';
import DiaryDateСalendar from 'components/DiaryDateСalendar/DiaryDateСalendar';
import DiaryProductsList from 'components/DiaryProductsList/DiaryProductsList';
import RightSideBar from 'components/RightSideBar/RightSideBar';
import { useDiary } from 'hooks/useDiary';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { diaryGetProductThunk } from 'redux/diary/diaryThunk';
import { selectIsOpen } from 'redux/modal/modalSelector';
import { open } from 'redux/modal/modalSlice';

const DiaryPage = () => {

  const isModalOpen = useSelector(selectIsOpen);
  const dispatch = useDispatch();

  const { diaryDate } = useDiary();

  const handleAddClick = () => {
    dispatch(open(true));
  };

  useEffect(() => {
    dispatch(diaryGetProductThunk(diaryDate));
  }, [dispatch, diaryDate]);

  return (
    <div className={css.diaryPage}>
      <div className={css.diary}>
        <DiaryDateСalendar />
        <div
          className={`${css.diaryAddProductForm} ${isModalOpen && css.isOpen}`}
        >
          <DiaryAddProductForm />
        </div>
        {!isModalOpen && <DiaryProductsList />}
      </div>
      <button
        className={css.addButton}
        type="button"
        onClick={handleAddClick}
      ></button>
      {!isModalOpen && <RightSideBar />}
    </div>
  );
};

export default DiaryPage;
