import { REGISTER_FAILURE, REGISTER_REQUEST, REGISTER_SUCCESS } from "./userLogin.type";
import axios from "axios";


 
 export const registerAPI = (creds) => (dispatch) => {
    dispatch({ type:REGISTER_REQUEST });
    axios
      .post("http://localhost:8080/user/signuP", creds)
      .then((r) => {
        dispatch({ type:REGISTER_SUCCESS});
      })
      .catch((e) => dispatch({ type:REGISTER_FAILURE}));
  };

  