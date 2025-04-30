const express=require('express');
const router=express.Router();
const Venta=require('../models/ventaModel');

router.get('/obtenerTodos', async (req, res) => {

    try {
        const ventas = await Venta.find();
        res.json(ventas);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener piezas' });
    }
});

router.post("/agregar", async(req,res)=>{
    try{
        const venta = new Venta(req.body);
        await venta.save();
        res.status(201).json(venta);
    }
    catch(err){
        res.status(400).json({message:err.message})
    }
});

router.delete("/eliminar/:id", async(req,res)=>{
    try{
        const venta=Venta.findByIdAndDelete(req.params.id);
        if(!venta) return res.status(400).json({message:"Reparación no encontrada"});
        res.json({message:"Producto Eliminado"});
    }
    catch(err){
        res.status(400).json({message:err.message})
    }
});


router.put('putReparacion/:id', async (req,res)=>{
    try{
        const venta=await Venta.findByIdAndUpdate(req.params.id,req.body,{new:true});
        if(!venta) return res.status(404).json({message:"Reparación no encontrado"})
            res.json(venta)
    }
    catch(err){
        res.status(500).json({message:err.message})
    }
})

//Realizar los 5 procedimientos, buscar todos, buscar por id

module.exports=router;

