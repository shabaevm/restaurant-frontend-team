const initialState = {
  items: [],
  loading: false,
  isAvailable: true,
};

export const tableReducer = (state = initialState, action) => {
  switch (action.type) {
    case "tables/load/pending":
      return {
        ...state,
        loading: true,
      };

    case "tables/load/fulfilled":
      return {
        ...state,
        items: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export const loadTables = () => {
  return (dispatch) => {
    dispatch({ type: "tables/load/pending" });
    fetch("http://localhost:4000/tables")
      .then((res) => res.json())
      .then((tables) => {
        dispatch({
          type: "tables/load/fulfilled",
          payload: tables,
        });
      });
  };
};
