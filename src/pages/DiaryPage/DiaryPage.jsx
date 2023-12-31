import AppSpinner from 'components/AppSpinner/AppSpiner';
import css from './DiaryPage.module.css';
import DiaryAddProductForm from 'components/DiaryAddProductForm/DiaryAddProductForm';
import DiaryDateСalendar from 'components/DiaryDateСalendar/DiaryDateСalendar';
import DiaryProductsList from 'components/DiaryProductsList/DiaryProductsList';
import RightSideBar from 'components/RightSideBar/RightSideBar';
import { useDiary } from 'hooks/useDiary';
import { useProducts } from 'hooks/useProducts';
import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { diaryGetProductThunk } from 'redux/diary/diaryThunk';
import { selectIsOpen } from 'redux/modal/modalSelector';
import { open } from 'redux/modal/modalSlice';
import { setIsAutocomplete } from 'redux/diary/diarySlice';

const DiaryPage = () => {

  const isModalOpen = useSelector(selectIsOpen);
  const dispatch = useDispatch();

  //const [isAutocomplite, setIsAutocomplite] = useState(true);

  const { diaryDate, isLoading: isDiaryLoading } = useDiary();

  const { isLoading } = useProducts();
  
  const handleAddClick = () => {
    dispatch(open(true));
  };

  const handlePageClick = (event) => {
    console.log('click', event.target);
    //setIsAutocomplite (false);
  }

  const handleEscapeKey = useCallback((event) => {
    console.log('key', event.key);
    if (event.key==="Escape") {
      dispatch(setIsAutocomplete(false));
    }
    
  }, [dispatch]);

  useEffect(() => {
    document.addEventListener("keydown", handleEscapeKey);
    document.addEventListener("click", handlePageClick);

    return () => {
      document.removeEventListener("keydown", handleEscapeKey);
      document.removeEventListener("click", handlePageClick);
    }

  }, [handleEscapeKey]);

  useEffect(() => {
    dispatch(diaryGetProductThunk(diaryDate));
  }, [dispatch, diaryDate]);

  return (
    <div className={css.diaryPage} >
      {(isLoading || isDiaryLoading) && <AppSpinner />}
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
