import axios from "axios";
export const GET_USER = "GET_USER";
export const ADD_USER = "ADD_USER";
export const UPDATE_USER = "UPDATE_USER";
export const DELETD_USER = "DELETD_USER";

export const getUsers = () => async (dispatch) => {
  try {
    const response = await axios.get("https://dummyjson.com/users");
    dispatch({ type: GET_USER, payload: response.data.users });
  } catch (error) {
    console.log(error);
  }
};
export const addUser = (user_details) => async (dispatch) => {
  try {
    const response = await axios.post(
      "https://dummyjson.com/users/add",
      user_details
    );
    dispatch({ type: ADD_USER, payload: response.data });
    console.log(response.data);
  } catch (error) {
    console.log(error);
  }
};
export const updateUser = (id, item) => async (dispatch) => {
 
  try {
    const response = await axios.put(`https://dummyjson.com/users/${id}`, item);
    console.log(response);
    dispatch({ type: UPDATE_USER, payload: response.data });
  } catch (error) {
    console.log(error);
  }
};

export const deltedUser = (id) => async (dispatch) => {
  try {
    await axios.delete(`https://dummyjson.com/users/${id}`);
    dispatch({ type: DELETD_USER, payload: id });
    console.log(`delted user response"${id} `);
  } catch (error) {
    console.log(error);
  }
};
