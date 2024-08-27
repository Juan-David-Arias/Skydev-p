import React from 'react';
import { ThemeProvider, createTheme, CssBaseline, Container, Typography } from '@mui/material';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Lista from './components/Lista';
import Formulario from './components/Formulario';
import Detalles from './components/Detalles';
import ActualizarFormulario from './components/ActualizarFormulario'; // Importa el nuevo componente


const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
  },
});

const App = () => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Router>
      <Container>
        <Typography variant="h3" align="center" gutterBottom>
          Mi Blog
        </Typography>
        <Routes>
          <Route path="/" element={<Lista />} />
          <Route path="/add" element={<Formulario />} />
          <Route path="/blogs/:id" element={<Detalles />} />
          <Route path="/update/:id" element={<ActualizarFormulario />} /> {/* Nueva ruta */}
        </Routes>
      </Container>
    </Router>
  </ThemeProvider>
);

export default App;
