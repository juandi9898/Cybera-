const mongoose=require('mongoose')

const reparacionesSchema=new mongoose.Schema({

category:{
    type:Number,
    required:true
},
quantity:{
    type:Number,
    required:true
},
price:{
    type:Number,
    required:true
},

discount:{
    type:Number,
    required:true
},
description:{
    type:String,
    required:true
}

}

)
module.exports=mongoose.model('reparaciones',reparacionesSchema)