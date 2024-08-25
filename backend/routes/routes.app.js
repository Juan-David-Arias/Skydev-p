const express = require('express');
const router = express.Router();
const Blog = require('../database/estructura').Blog; // Asegúrate de usar 'Blog' aquí

// Ruta para agregar un nuevo blog
router.post('/', async (req, res) => {
  try {
    const nuevoBlog = new Blog(req.body);
    const blogGuardado = await nuevoBlog.save();
    res.status(201).json(blogGuardado);
  } catch (error) {
    console.error('Error al agregar el blog:', error);
    res.status(500).send('Error al agregar el blog');
  }
});

// Ruta para obtener todos los blogs
router.get('/', async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.json(blogs);
  } catch (error) {
    console.error('Error al obtener los blogs:', error);
    res.status(500).send('Error al obtener los blogs');
  }
});

// Ruta para actualizar un blog
router.put('/:id', async (req, res) => {
  try {
    const blogActualizado = await Blog.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(blogActualizado || { mensaje: 'Blog no encontrado' });
  } catch (error) {
    console.error('Error al actualizar el blog:', error);
    res.status(500).send('Error al actualizar el blog');
  }
});

// Ruta para eliminar un blog
router.delete('/:id', async (req, res) => {
  try {
    const blogEliminado = await Blog.findByIdAndDelete(req.params.id);
    res.json(blogEliminado ? { mensaje: 'Blog eliminado' } : { mensaje: 'Blog no encontrado' });
  } catch (error) {
    console.error('Error al eliminar el blog:', error);
    res.status(500).send('Error al eliminar el blog');
  }
});

module.exports = router;
