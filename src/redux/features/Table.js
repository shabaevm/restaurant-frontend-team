const initialState = {
  items: [],
  loading: false,
  isAvailable: true,
  userInTable: [],
  error: null,
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
        userInTable: action.payload.user,
        loading: false,
      };
    case "tables/addUser/pending":
      return {
        ...state,
        loading: true,
      };
    case "tables/addUser/fulfilled":
      return {
        ...state,
        userInTable: action.payload,
        loading: false,

      };
    case "tables/addUser/rejected":
      return {
        ...state,
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
export const addUserInTable = (id) => {
  return async (dispatch) => {
    dispatch({ type: "tables/addUser/pending" });
    const response = await fetch(`http://localhost:4000/tables/addUser/${id}`, {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });

    const json = await response.json();

    if (json.error) {
      dispatch({ type: "tables/addUser/rejected", error: json.error });
    } else {
      dispatch({ type: "tables/addUser/fulfilled", payload: json });
    }
  };
};
