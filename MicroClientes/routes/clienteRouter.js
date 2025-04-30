const express=require('express');
const router=express.Router();
const Cliente=require('../models/clienteModel');

router.get('/obtenerTodos', async (req, res) => {

    try {
        const Clientes = await Cliente.find();
        res.json(Clientes);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener piezas' });
    }
});

router.post("/agregar", async(req,res)=>{
    try{
        const Cliente = new Cliente(req.body);
        await Cliente.save();
        res.status(201).json(Cliente);
    }
    catch(err){
        res.status(400).json({message:err.message})
    }
});

router.delete("/eliminar/:id", async(req,res)=>{
    try{
        const Cliente=Cliente.findByIdAndDelete(req.params.id);
        if(!Cliente) return res.status(400).json({message:"Reparación no encontrada"});
        res.json({message:"Producto Eliminado"});
    }
    catch(err){
        res.status(400).json({message:err.message})
    }
});


router.put('putCliente/:id', async (req,res)=>{
    try{
        const Cliente=await Cliente.findByIdAndUpdate(req.params.id,req.body,{new:true});
        if(!Cliente) return res.status(404).json({message:"Reparación no encontrado"})
            res.json(Cliente)
    }
    catch(err){
        res.status(500).json({message:err.message})
    }
})

//Realizar los 5 procedimientos, buscar todos, buscar por id

module.exports=router;

