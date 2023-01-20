const { REGISTER_REQUEST, REGISTER_SUCCESS, REGISTER_FAILURE } = require("./userLogin.type");



const initialstate={
    loading: false,
    error: false,
    isReg: false,
    token: ""
}

const RegisterReducer=(state=initialstate,action)=>{
   const {type,payload}=action;

   switch(type){

    case REGISTER_REQUEST:{
        return {...state,loading:true,error:false}
    }

    case REGISTER_SUCCESS:{
        return {...state,loading:false,error:false,isReg:true,token:payload}
    }

    case REGISTER_FAILURE:{
        return {...state,loading:false,error:true,isReg:false }
    }
    default:{
        return state
    }

   }
  
   
  
    

}

export {RegisterReducer}