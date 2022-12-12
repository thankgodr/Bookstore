export const CATEGORY_ACTION = {
  STATUS: 'category_status',
};

const initialState = {
  categories: [],
};

export default function categoryReducer(state = initialState, action) {
  switch (action.type) {
    case CATEGORY_ACTION.STATUS:
      return 'Under construction';
    default:
      return state;
  }
}