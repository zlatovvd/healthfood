import { useSelector } from "react-redux";
import { selectDiary, selectDiaryDate, selectDiaryDateFormated, selectTotalCallories } from "redux/diary/diarySelector";

export const useDiary = () => {

    return {
      data: useSelector(selectDiary),
      diaryDate: useSelector(selectDiaryDate),
      totalCallories: useSelector(selectTotalCallories),
      diaryDateFormated: useSelector(selectDiaryDateFormated)
    };

}