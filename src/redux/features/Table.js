const initialState = {
  tables: [],
  loading: false,
};

export const tableReducer = (state = initialState, action) => {
  switch (action.type) {
    case '':
      return;
    default:
      return state;
  }
};

export const loadTables = () => {
  return (dispatch) => {
    dispatch({ type: 'tables/load/pending' });
    fetch('http://localhost:4000/tables')
      .then((res) => res.json())
      .then((tables) => {
        dispatch({
          type: 'tables/load/fulfilled',
          payload: tables,
        });
      });
  };
};
