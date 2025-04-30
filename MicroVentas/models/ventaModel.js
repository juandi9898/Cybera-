const mongoose=require('mongoose')

const ventasSchema=new mongoose.Schema({


codigoVenta:{
    type:String,
    required:true
},    
cedulaCliente:{
    type:String,
    required:true
},
skuProducto:{
    type:String,
    required:true
},    
fechaVenta:{
    type:Date,
    required:true
},  
cantidadVendida:{
    type:Number,
    required:true
},  
precioUnitario:{
    type:Number,
    required:true
},  
totalVenta:{
    type:Number,
    required:true
},  
metodoPago:{
    type:String,
    required:true
}, 
direccionEnvio:{
    type:String,
    required:true
}, 
numeroGuiaEnvio:{
    type:String,
    required:true
}, 
identificadorTransaccion:{
    type:String,
    required:true
}

}

)
module.exports=mongoose.model('ventas',ventasSchema)