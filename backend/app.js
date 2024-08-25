const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const blogsRoutes = require('./routes/routes.app');
const { mongo, port } = require('./config');

const app = express();
app.use(express.json());

// Configura CORS
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS', 'PATCH'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

// Conectar a MongoDB
mongoose.connect(mongo)
  .then(() => {
    console.log('Conectado a MongoDB');
  })
  .catch(err => {
    console.error('Error al conectar a MongoDB:', err);
  });

// Usar las rutas
app.use('/api/blogs', blogsRoutes);

// Ruta de prueba
app.get('/', (req, res) => {
  res.send('mi servidor CRUD');
});

// Manejar errores
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Algo salió mal en el servidor');
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});
