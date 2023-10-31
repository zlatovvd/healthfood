import { createSelector } from '@reduxjs/toolkit';

export const selectDiary = state => state.diary.data;

export const selectDiaryDate = state => state.diary.diaryDate;

export const selectTotalCallories = createSelector([selectDiary], diary => {
  let totalDiary = 0;
  diary.map(item => (
    totalDiary += item.callories
  ));
  return totalDiary;
});

export const selectDiaryDateFormated = createSelector(
  [selectDiaryDate],
  diaryDate => {
    const cDate = new Date(diaryDate);

    let day = cDate.getDate();
    if (day < 10) day = `0${day}`;

    let month = cDate.getMonth() + 1;
    if (month < 10) month = `0${month}`;

    const year = cDate.getFullYear();

    return `${day}.${month}.${year}`;
  }
);
