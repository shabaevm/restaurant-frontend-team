const initialState = {
  productsList: [],
  loading: false,
};

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'products/load/pending':
      return {
        ...state,
        loading: true
      }
    case "products/load/fulfilled":
      return {
        ...state,
        productsList: action.payload,
        loading: false
      }
    default:
      return state;
  }
};

export const loadProducts = () => {
  return (dispatch) => {
    dispatch({ type: 'products/load/pending' });
    fetch('http://localhost:4000/products')
    .then((res) => res.json())
    .then((products) => {
      dispatch({
        type: 'products/load/fulfilled',
        payload: products,
      });
    });
  };
};
