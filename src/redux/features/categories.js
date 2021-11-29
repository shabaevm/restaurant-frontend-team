const initialState = {
  categories: [],
  loading: false,
};

export const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case '':
      return;
    default:
      return state;
  }
};

export const loadCategories = () => {
  return (dispatch) => {
    dispatch({ type: 'categories/load/pending' });
    fetch('http://localhost:4000/categories')
      .then((res) => res.json())
      .then((categories) => {
        dispatch({
          type: 'categories/load/fulfilled',
          payload: categories,
        });
      });
  };
};
