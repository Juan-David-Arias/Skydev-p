import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Typography, Card, CardContent, Button, Grid } from '@mui/material';
import axios from '../axios';
import '../styles/Lista.css'; // Importa el archivo CSS desde la carpeta styles

const Lista = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get('/blogs');
        setBlogs(response.data);
      } catch (error) {
        console.error('Error al obtener los blogs:', error);
      }
    };
    fetchBlogs();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/blogs/${id}`);
      setBlogs(blogs.filter(blog => blog._id !== id)); // Actualiza la lista localmente
    } catch (error) {
      console.error('Error al eliminar el blog:', error);
    }
  };

  return (
    <Container className="lista-container">
      <Typography variant="h4" className="lista-title" gutterBottom>
        Lista de Blogs
      </Typography>
      <Button
        component={Link}
        to="/add"
        variant="contained"
        color="primary"
        className="lista-button"
      >
        Agregar Nuevo Blog
      </Button>
      <Grid container spacing={2}>
        {blogs.length > 0 ? (
          blogs.map(blog => (
            <Grid item xs={12} sm={6} md={4} key={blog._id}>
              <Card className="lista-card">
                <CardContent className="lista-card-content">
                  <Typography variant="h6" component="div">
                    {blog.title}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" style={{ marginBottom: 16 }}>
                    {blog.content.substring(0, 100)}...
                  </Typography>
                  <Button
                    component={Link}
                    to={`/blogs/${blog._id}`}
                    variant="outlined"
                  >
                    Ver Detalles
                  </Button>
                  <Button
                    component={Link}
                    to={`/update/${blog._id}`} // Enlace para actualizar
                    variant="contained"
                    style={{ backgroundColor: '#4caf50', color: 'white', marginTop: 8 }}
                  >
                    Editar
                  </Button>
                  <Button
                    onClick={() => handleDelete(blog._id)}
                    variant="contained"
                    style={{ backgroundColor: '#f44336', color: 'white', marginTop: 8 }}
                  >
                    Eliminar
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))
        ) : (
          <Typography variant="body1">No hay blogs disponibles.</Typography>
        )}
      </Grid>
    </Container>
  );
};

export default Lista;
