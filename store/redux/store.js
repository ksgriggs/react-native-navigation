import { configureStore } from '@reduxjs/toolkit';

import favoritesReducer from './favorits';

export const store = configureStore({
  reducer: {
    favoriteMeals: favoritesReducer,
  },
});
