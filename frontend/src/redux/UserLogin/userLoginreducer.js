import { LOGOUT_USER_SUCCESS, USER_LOGIN_ERROR, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS } from "./userLogin.type";

const token = localStorage.getItem("usertoken");

const initialstate={
    token: "",
    isAuth: false,
    isAuthLoading:false,
    isAuthError:false,
    user: JSON.parse(localStorage.getItem("user"))|| {}
}

const LoginReducer=(state=initialstate,action)=>{
   const {type,payload}=action;

   switch(type){

    case USER_LOGIN_REQUEST:{
        return {...state,isAuthLoading:true}
    }

    case USER_LOGIN_SUCCESS:{
         
        localStorage.setItem('usertoken',payload.token)
           localStorage.setItem('user', JSON.stringify(payload.user))
           localStorage.setItem("cart", JSON.stringify(payload.user.cartitem));
           localStorage.setItem("wishlist", JSON.stringify(payload.user.wishlist));
        return {...state,isAuthLoading:false,isAuthError:false,isAuth:true,token:payload.token,user:payload.user}
       
    }
    
    case USER_LOGIN_ERROR:{
        return {...state,isAuthLoading:false,isAuthError:true,isAuth:false }
    }

    case LOGOUT_USER_SUCCESS: {
        localStorage.clear();
        return {
          ...state,
          isAuth: false,
          token: "",
          isAuthLoading: false,
          isAuthError:false,
          user:{}
        }
    }
    default:{
        return state
    }
     
   }
    
  

}

 

export {LoginReducer}