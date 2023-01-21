const mongoose=require("mongoose")

const userschema=mongoose.Schema({
    first_name:{
        type:String,
        require:true
    },
    last_name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true,
        unique:true
    },
    password:{
        type:String,
        require:true,
    },
    mobile:{
        type:Number,
        require:true
    },
    wishlist:{
      type:Array
    },
    cartitem:{
        type:Array
    },
    role:{
        type:String,
        default:"user"
    },
    orderlist:{
        type:Array
    }
     

    
},{
     versionKey: false,
     timestamps:true
}

)

const userModel=mongoose.model("user",userschema)

module.exports={userModel}