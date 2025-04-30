const mongoose=require('mongoose')

const clientesSchema=new mongoose.Schema({


nombre:{
    type:String,
    required:true
},
apellido1:{
    type:String,
    required:true
},
apellido2:{
    type:String,
    required:true
},
email:{
    type:String,
    required:true
},
telefono:{
    type:String,
    required:true
},
direccion:{
    type:String,
    required:true
},
ciudad:{
    type:String,
    required:true
},
fechaRegistro:{
    type:Date,
    required:true
},
cedula:{
    type:String,
    required:true
},
edad:{
    type:Number,
    required:true
}

}

)
module.exports=mongoose.model('clientes',clientesSchema)