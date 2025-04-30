const mongoose=require('mongoose')

const productosSchema=new mongoose.Schema({

nombreProducto:{
    type:String,
    required:true
},
descripcion:{
    type:String,
    required:true
},
precio:{
    type:Number,
    required:true
},
stock:{
    type:Number,
    required:true
},
garantiaMeses:{
    type:Number,
    required:true
},
pesoKg:{
    type:Number,
    required:true
},
sku:{
    type:String,
    required:true
},
modelo:{
    type:String,
    required:true
},
marca:{
    type:String,
    required:true
},
color:{
    type:String,
    required:true
},
fechaIngreso:{
    type:Date,
    required:true
}


}

)
module.exports=mongoose.model('productos',productosSchema)