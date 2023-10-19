import { createSelector } from '@reduxjs/toolkit';
import { useIntake } from 'hooks/useIntake';

export const selectProducts = state => state.products.data;

export const selectIsLoading = state => state.products.isLoading;

export const selectFilter = state => state.products.filter;

export const selectNotRecommendedProducts = state => state.products.notRecommended;

const intakePersonInfo = useIntake;

export const selectFilteredProducts = createSelector(
  [selectProducts, selectFilter],
  (products, filter) => {
    return products.filter(item =>
      item.title.ua.toLowerCase().includes(filter.toLowerCase())
    );
  }
);

export const selectFoundProduct = createSelector(
  [selectProducts, selectFilter],
  (products, filter) => {
    return products.find(
      option => option.title.ua.toLowerCase() === filter.toLowerCase()
    );
  }
);

export const selectCalculateDailyCalories = createSelector(
    [intakePersonInfo],
    personInfo => {
      if(personInfo) {

        const { height, age, cweight, dweight } = personInfo.intakePersonInfo;
        
        return (
          10 * Number(cweight) +
          6.25 * Number(height) -
          5 * Number(age) -
          161 -
          10 * (Number(cweight) - Number(dweight))
        );
      }
      return 0;
      
    }
  );
  
  // export const selectNotRecommendedProducts = createSelector(
  //   [selectProducts, intakePersonInfo],
  //   (products, personInfo) => {
  //     if (personInfo) {
  //       const notRecommended = [];
  //       console.log("SELECT", personInfo.intakePersonInfo);
  //       const {typeblood} = personInfo.intakePersonInfo;
  //       console.log("SELECT 2", typeblood, 'prod', products);
  //       products.map(item => {
         
  //         if (
  //           item.groupBloodNotAllowed[typeblood] === true &&
  //           !notRecommended.includes(item.categories[0])
  //         ) {
  //           notRecommended.push(item.categories[0]);
  //         }
  //       });
    
  //       return notRecommended;
  //     }
  
  //     return [];
      
  //   }
  // );