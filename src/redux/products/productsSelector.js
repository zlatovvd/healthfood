import { createSelector } from '@reduxjs/toolkit';

export const selectProducts = state => state.products.data;

export const selectIsLoading = state => state.products.isLoading;

export const selectFilter = state => state.products.filter;

export const selectNotRecommendedProducts = state => state.products.notRecommended;

export const selectChoiceProduct = createSelector(
  [selectProducts, selectFilter],
  (products, filter) => {
    if (!products) {
      return [];
    }
    return products.find(
      option => option.title.ua.toLowerCase() === filter.toLowerCase()
    );
  }
);
