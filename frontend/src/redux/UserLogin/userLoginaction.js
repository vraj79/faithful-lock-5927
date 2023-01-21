 
import axios from "axios";
import { LOGOUT_USER_SUCCESS, USER_LOGIN_ERROR, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS } from "./userLogin.type";
const Url = "http://localhost:8080";

 
 export const Userlogin = (creds) => async(dispatch) => {
    dispatch({ type:USER_LOGIN_REQUEST});
      try{
          let res= await axios.post(`${Url}/user/login`,creds)
            dispatch({type:USER_LOGIN_SUCCESS, payload:res.data});
             
      }
      catch(err){
               dispatch({type:USER_LOGIN_ERROR})
      }
  };

  export const userLogout = () => ({ type: LOGOUT_USER_SUCCESS });
  