import * as api from "../../api";
// import AlertNotifications from '../../shared/components/AlertNotifications';
import { openAlertMessage } from "./alertActions";

export const authActions = {
  SET_USER_DETAILS: "AUTH.SET_USER_DETAILS",
};

export const getActions = (dispatch) => {
  return {
    login: (userDetails, navigate) => dispatch(login(userDetails, navigate)),
    register: (userDetails, navigate) =>
      dispatch(register(userDetails, navigate)),
    setUserDetails: (userDetails) => dispatch(setUserDetails(userDetails)),
  };
};

export const setUserDetails = (userDetails) => {
  return {
    type: authActions.SET_USER_DETAILS,
    userDetails,
  };
};

const login = (userDetails, navigate) => {
  return async (dispatch) => {
    const response = await api.login(userDetails);
    console.log(response);
    if (response.error) {
      // show error msg on UI
      dispatch(openAlertMessage(response?.exception.response?.data));
    } else {
      const { userDetails } = response?.data;
      localStorage.setItem("user", JSON.stringify(userDetails));

      dispatch(setUserDetails(userDetails));
      navigate("/dashboard");
    }
  };
};

const register = (userDetails, navigate) => {
  return async (dispatch) => {
    const response = await api.register(userDetails);
    if (response.error) {
      dispatch(openAlertMessage(response?.exception.response?.data));
    } else {
      const { userDetails } = response?.data;
      localStorage.setItem("user", JSON.stringify(userDetails));

      dispatch(setUserDetails(userDetails));
      navigate("/dashboard");
    }
  };
};
