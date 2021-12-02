const initialState = {
  signingUp: false,
  error: null,
  token: localStorage.getItem("token"),
  modalShow: false,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "modalShow/changeTrue":
      return {
        ...state,
        modalShow: true,
      };
    case "modalShow/changeFalse":
      return {
        ...state,
        modalShow: false,
      };
    case "auth/signup/pending":
      return {
        ...state,
        signingUp: true,
        error: null,
      };
    case "auth/signup/fulfilled":
      return {
        ...state,
        signingUp: false,
      };
    case "auth/signup/rejected":
      return {
        ...state,
        signingUp: false,
        error: action.error,
      };
    case "auth/signin/pending":
      return {
        ...state,
        signingUp: true,
        error: null,
      };
    case "auth/signin/fulfilled":
      return {
        ...state,
        signingUp: false,
        token: action.payload.token,
      };
    case "auth/signin/rejected":
      return {
        ...state,
        signingUp: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export const createUser = (login, password) => {
  return async (dispatch) => {
    dispatch({ type: "auth/signup/pending" });
    const response = await fetch("http://localhost:4000/users/regist", {
      method: "POST",
      body: JSON.stringify({
        login,
        password,
      }),
      headers: { "Content-type": "application/json" },
    });

    const json = await response.json();

    if (json.error) {
      dispatch({ type: "auth/signup/rejected", error: json.error });
    } else {
      dispatch({ type: "auth/signup/fulfilled", payload: json });
    }
  };
};

export const authUser = (login, password) => {
  return async (dispatch) => {
    dispatch({ type: "auth/signin/pending" });
    const response = await fetch("http://localhost:4000/users/login", {
      method: "POST",
      body: JSON.stringify({
        login,
        password,
      }),
      headers: { "Content-type": "application/json" },
    });

    const json = await response.json();

    if (json.error) {
      dispatch({ type: "auth/signin/rejected", error: json.error });
    } else {
      dispatch({ type: "auth/signin/fulfilled", payload: json });
      localStorage.setItem("token", json.token);
    }
  };
};
