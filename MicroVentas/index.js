const express=require('express');
const mongoose=require('mongoose');
const bodyParser=require('body-parser');
const reparacionRouter=require('./routes/ventaRouter');


const app=express();


//conexión a mongoDB

mongoose.connect('mongodb+srv://admin:admin@pbd1.hfk6vad.mongodb.net/Cybera').then(()=>console.log('Conectado a Mi base de datos Mongo Db'))
.catch(err=>console.error('Error al conectar a mi DB',err));


app.use(bodyParser.json());
app.use(reparacionRouter);
app.listen(3007,()=>{
console.log("Server ON -Puerto 3007")
})





