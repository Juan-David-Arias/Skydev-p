import React, { useEffect, useState } from 'react';
import { Container, Typography, Paper } from '@mui/material';
import { useParams } from 'react-router-dom';
import axios from '../axios';
import '../styles/Detalles.css'; // Importa el archivo CSS desde la carpeta styles

const Detalles = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    axios.get(`/blogs/${id}`)
      .then(response => setBlog(response.data))
      .catch(error => console.error('Error al obtener el blog:', error));
  }, [id]);

  if (!blog) return <div>Cargando...</div>;

  return (
    <Container className="detalles-container">
      <Typography variant="h4" className="detalles-title" gutterBottom>
        {blog.title}
      </Typography>
      <Paper className="detalles-paper">
        <Typography variant="body1">
          {blog.content}
        </Typography>
      </Paper>
    </Container>
  );
};

export default Detalles;
