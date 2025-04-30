const express=require('express');
const router=express.Router();
const Reparacion=require('../models/reparacionModel');

router.get('/obtenerTodos', async (req, res) => {

    try {
        const reparaciones = await Reparacion.find();
        res.json(reparaciones);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener piezas' });
    }
});

router.post("/agregar", async(req,res)=>{
    try{
        const reparacion = new Reparacion(req.body);
        await reparacion.save();
        res.status(201).json(reparacion);
    }
    catch(err){
        res.status(400).json({message:err.message})
    }
});

router.delete("/eliminar/:id", async(req,res)=>{
    try{
        const reparacion=Reparacion.findByIdAndDelete(req.params.id);
        if(!reparacion) return res.status(400).json({message:"Reparación no encontrada"});
        res.json({message:"Producto Eliminado"});
    }
    catch(err){
        res.status(400).json({message:err.message})
    }
});


router.put('putReparacion/:id', async (req,res)=>{
    try{
        const reparacion=await Reparacion.findByIdAndUpdate(req.params.id,req.body,{new:true});
        if(!reparacion) return res.status(404).json({message:"Reparación no encontrado"})
            res.json(reparacion)
    }
    catch(err){
        res.status(500).json({message:err.message})
    }
})

//Realizar los 5 procedimientos, buscar todos, buscar por id

module.exports=router;

