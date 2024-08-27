import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Container, Typography, TextField, Button, Paper } from '@mui/material';
import axios from '../axios';
import '../styles/Formulario.css';

const ActualizarFormulario = () => {
  const { id } = useParams();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await axios.get(`/blogs/${id}`);
        setTitle(response.data.title);
        setContent(response.data.content);
      } catch (error) {
        console.error('Error al obtener el blog:', error);
      }
    };
    fetchBlog();
  }, [id]);

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.put(`/blogs/${id}`, { title, content })
      .then(response => {
        console.log('Blog actualizado:', response.data);
        navigate('/');
      })
      .catch(error => console.error('Error al actualizar el blog:', error));
  };

  return (
    <Container className="actualizar-formulario-container">
      <Typography variant="h4" className="actualizar-formulario-title" gutterBottom>
        Actualizar Blog
      </Typography>
      <Button
        onClick={() => navigate('/')}
        variant="outlined"
        color="primary"
        className="actualizar-formulario-button"
      >
        Volver a la Lista
      </Button>
      <Paper className="actualizar-formulario-paper">
        <form onSubmit={handleSubmit}>
          <TextField
            label="Título"
            variant="outlined"
            fullWidth
            margin="normal"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <TextField
            label="Contenido"
            variant="outlined"
            fullWidth
            multiline
            rows={4}
            margin="normal"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            style={{ marginTop: 16 }}
          >
            Actualizar Blog
          </Button>
        </form>
      </Paper>
    </Container>
  );
};

export default ActualizarFormulario;
