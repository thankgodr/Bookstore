import { createSlice } from '@reduxjs/toolkit';

const CHECK_STATUS = 'bookstore/redux/categories/CHECK_STATUS';

const initialState = {
  categories: [],
};

const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    categoryReducer(state = initialState, action) {
      switch (action.type) {
        case CHECK_STATUS:
          return 'Under construction';
        default:
          return state;
      }
    },
  },
});

export { CHECK_STATUS };
export default categorySlice.reducer;