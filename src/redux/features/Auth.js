const initialState = {
  loadingModal: false,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'auth/load/pending':
      return {
        ...state,
        loading: true
      }
    case "auth/load/fulfilled":
      return {
        ...state,
        loading: false
      }
    default:
      return state;
  }
};

export const registration = () => {
  return (dispatch) => {
    dispatch({ type: 'auth/load/pending' });
    fetch('http://localhost:4000/users')
    .then((res) => res.json())
    .then((products) => {
      dispatch({
        type: 'auth/load/fulfilled',
        payload: products,
      });
    });
  };
};
