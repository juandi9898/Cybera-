const express=require('express');
const router=express.Router();
const Producto=require('../models/productoModel');

router.get('/obtenerTodos', async (req, res) => {

    try {
        const Productos = await Producto.find();
        res.json(Productos);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener piezas' });
    }
});

router.get('/obtenerPorId/:id', async (req, res) => {
    try {
      const producto = await Producto.findById(req.params.id);
      if (!producto) {
        return res.status(404).json({ message: 'Producto no encontrado' });
      }
      res.json(producto);
    } catch (error) {
      res.status(500).json({ message: 'Error al buscar el producto por ID' });
    }
  });


  //Revisar este, en el anterior trabajo lo tenemos guiarse de ese
  router.get('/buscarPorParametros', async (req, res) => {
    try {
      const query = {};
      const parametrosBusqueda = Object.keys(req.query);
  
      if (parametrosBusqueda.length === 0) {
        return res.status(400).json({ message: 'Se deben proporcionar al menos un parámetro para la búsqueda' });
      }
  
      parametrosBusqueda.forEach(parametro => {
        if (req.query[parametro]) {
          query[parametro] = req.query[parametro];
        }
      });
  
      const productos = await Producto.find(query);
  
      if (productos.length === 0) {
        return res.status(404).json({ message: 'No se encontraron productos con esos criterios' });
      }
  
      res.json(productos);
    } catch (error) {
      res.status(500).json({ message: 'Error al buscar productos por parámetros' });
    }
  });


router.post("/agregar", async(req,res)=>{
    try{
        const Producto = new Producto(req.body);
        await Producto.save();
        res.status(201).json(Producto);
    }
    catch(err){
        res.status(400).json({message:err.message})
    }
});

router.delete("/eliminar/:id", async(req,res)=>{
    try{
        const Producto=Producto.findByIdAndDelete(req.params.id);
        if(!Producto) return res.status(400).json({message:"Reparación no encontrada"});
        res.json({message:"Producto Eliminado"});
    }
    catch(err){
        res.status(400).json({message:err.message})
    }
});


router.put('putProducto/:id', async (req,res)=>{
    try{
        const Producto=await Producto.findByIdAndUpdate(req.params.id,req.body,{new:true});
        if(!Producto) return res.status(404).json({message:"Reparación no encontrado"})
            res.json(Producto)
    }
    catch(err){
        res.status(500).json({message:err.message})
    }
})

//Realizar los 5 procedimientos, buscar todos, buscar por id y buscar por dos parametros

module.exports=router;

