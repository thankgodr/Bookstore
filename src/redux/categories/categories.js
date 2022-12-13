import { createSlice } from '@reduxjs/toolkit';

export const CHECK_STATUS = 'bookstore/redux/categories/CHECK_STATUS';

const initialState = {
  categories: [],
  status: '',
};

const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    categoryAction(state = initialState, action) {
      switch (action.payload.type) {
        case CHECK_STATUS:
          state.status = 'Under construction';
          break;
        default:
          state = { ...state };
      }
    },
  },
});

export const { categoryAction } = categorySlice.actions;
export default categorySlice.reducer;