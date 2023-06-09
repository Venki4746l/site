import axios from "axios";

export const autAction = (creditinals) => async (dispatch) => {
  try {
    const response = await axios.post(
      "https://fakestoreapi.com/auth/login",
      creditinals
    );
    console.log(response);
    if (response.status === 200) {
      const token = response.data.token;


      localStorage.setItem("token", token);
      dispatch({ type: "VALID_USER", payload: token });
    }
  } catch (error) {
    dispatch({ type: "FAIL_VALID", payload: error });
    console.log(error);
  }
};



