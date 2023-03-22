import {
    AUTH_LOGIN_FAILURE,
    AUTH_LOGIN_REQUEST,
    AUTH_LOGIN_SUCCESS,
    AUTH_LOGOUT,
  } from "../actiontypes/auth.actionTypes.js";
  
  const initialState = {
    isAuth:false,
    isError:false,
    isLoading:false,
    username:"guest101",
    id:"",
    email:"",
    token:""
    
  };
  let savedstate=JSON.parse(localStorage.getItem("auth"))||initialState
  
  export default function authReducer(state = savedstate, { type, payload }) {
    switch (type) {
      case AUTH_LOGIN_REQUEST:
        return { ...state,  isLoading: true, isError: false  };
      case AUTH_LOGIN_SUCCESS:
       let obj1={
        ...state,
        isAuth:true,
        isError:false,
        isLoading:false,
        username:payload.payload.user.username,
        id:payload.payload.user.id,
        email:payload.payload.user.email,
        token:payload.token
       }
       localStorage.setItem("auth",JSON.stringify(obj1))
        return obj1;
      case AUTH_LOGIN_FAILURE:
        return {
          ...state,
          isAuth:false,
        isError:true,
        isLoading:false
        };
      case AUTH_LOGOUT:
        localStorage.removeItem("auth")
        return initialState;
      default:
        return state;
    }
  }