import { createSelector } from '@reduxjs/toolkit';
import { useIntake } from 'hooks/useIntake';

export const selectProducts = state => state.products.data;

export const selectIsLoading = state => state.products.isLoading;

const intakePersonInfo = useIntake;

export const selectCalculateDailyCalories = createSelector(
    [intakePersonInfo],
    personInfo => {
      if(personInfo) {
        const { height, age, cWeight, dWeight } = personInfo;
  
        return (
          10 * Number(cWeight) +
          6.25 * Number(height) -
          5 * Number(age) -
          161 -
          10 * (Number(cWeight) - Number(dWeight))
        );
      }
      return 0;
      
    }
  );
  
  export const selectNotRecommendedProducts = createSelector(
    [selectProducts, intakePersonInfo],
    (products, personInfo) => {
      if (personInfo) {
        const notRecommended = [];
        const {typeblood} = personInfo;
        products.map(item => {
          if (
            item.groupBloodNotAllowed[typeblood] === true &&
            !notRecommended.includes(item.categories[0])
          ) {
            notRecommended.push(item.categories[0]);
          }
        });
    
        return notRecommended;
      }
  
      return [];
      
    }
  );