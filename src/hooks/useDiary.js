import { useSelector } from "react-redux";
import { selectDiary, selectDiaryDate } from "redux/diary/diarySelector";

export const useDiary = () => {

    return {
      data: useSelector(selectDiary),
      diaryDate: useSelector(selectDiaryDate),
    };

}