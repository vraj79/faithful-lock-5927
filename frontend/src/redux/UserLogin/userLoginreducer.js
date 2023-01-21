import { LOGOUT_USER_SUCCESS, USER_LOGIN_ERROR, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS } from "./userLogin.type";

const token = localStorage.getItem("usertoken");
const initialstate={
    token: token,
    isAuth: false,
    isAuthLoading:false,
    isAuthError:false,
    user:[]
}

const LoginReducer=(state=initialstate,action)=>{
   const {type,payload}=action;

   switch(type){

    case USER_LOGIN_REQUEST:{
        return {...state,isAuthLoading:true}
    }

    case USER_LOGIN_SUCCESS:{
         
        localStorage.setItem('usertoken',payload.token)
        console.log(payload)
        return {...state,isAuthLoading:false,isAuthError:false,isAuth:true,token:payload}
       
    }
    
    case USER_LOGIN_ERROR:{
        return {...state,isAuthLoading:false,isAuthError:true,isAuth:false }
    }

    case LOGOUT_USER_SUCCESS: {
        localStorage.removeItem("usertoken");
        
        return {
          ...state,
          isAuth: false,
          token: "",
          isAuthLoading: false,
          isAuthError:false
        }
    }
    default:{
        return state
    }
     
   }
    
  

}

 

export {LoginReducer}