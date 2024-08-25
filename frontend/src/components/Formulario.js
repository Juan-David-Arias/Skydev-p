import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from '../axios';
import '../styles/Formulario.css'; // Importa el archivo CSS desde la carpeta styles

const Formulario = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('/blogs', { title, content })
      .then(response => {
        console.log('Blog añadido:', response.data);
        setTitle('');
        setContent('');
        navigate('/');
      })
      .catch(error => console.error('Error al añadir el blog:', error));
  };

  return (
    <Container className="formulario-container">
      <Typography variant="h4" className="formulario-title" gutterBottom>
        Añadir Nuevo Blog
      </Typography>
      <Button
        onClick={() => navigate('/')}
        variant="outlined"
        color="primary"
        className="formulario-button"
      >
        Volver a la Lista
      </Button>
      <Paper className="formulario-paper">
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
            Añadir Blog
          </Button>
        </form>
      </Paper>
    </Container>
  );
};

export default Formulario;
