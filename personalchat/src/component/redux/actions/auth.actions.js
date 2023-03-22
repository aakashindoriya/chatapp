import { AUTH_LOGIN_FAILURE, AUTH_LOGIN_REQUEST, AUTH_LOGIN_SUCCESS, AUTH_LOGOUT } from "../actiontypes/auth.actionTypes";
import axios from "axios";


export const authRegister = (data) => async (dispatch) => {
   
    try {
        dispatch({ type:AUTH_LOGIN_REQUEST });
        const res = await axios.post(`${process.env.BASEURL}/user/signup`, {...data})
        data.toast({
            title: `Welcome to instagarm`,
            description: "Registration successfull",
            status: "success",
            duration: 2000,
            isClosable: true,
            position:"top"
        });

        return dispatch({
            type: AUTH_LOGIN_SUCCESS,
            payload: res.data,
        });
    } catch (error) {
        return dispatch({
            type: AUTH_LOGOUT,
            payload: {
                message: error.response.data,
            },
        });
    }
}


export const authLogin = (data) => async (dispatch) => {
    try {
        
        dispatch({ type: AUTH_LOGIN_REQUEST });
        const res = await axios.post(`${process.env.BASEURL}/user/login`, {...data});
        dispatch({ type: AUTH_LOGIN_SUCCESS, payload: res.data });
    } catch (error) {
        data.toast({
            title: `ERROR`,
            description: error.response.data,
            status: "error",
            duration: 2000,
            isClosable: true,
            position:"top"
        })
        dispatch({ type: AUTH_LOGIN_FAILURE, payload: { message: error.response.data } });
    }
}

export const authLogout = () => (dispatch) => {
    dispatch({ type: AUTH_LOGOUT });
}