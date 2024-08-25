# Skydev-p

Skydev-p es una aplicación web de blog que permite crear, visualizar, editar y eliminar publicaciones. Este proyecto utiliza React para el frontend y Node.js con Express para el backend, con MongoDB como base de datos.

## 1. Estructura del Proyecto

- **backend**: Contiene el servidor Express y la configuración de la base de datos MongoDB.
- **frontend**: Contiene la aplicación React que se comunica con el backend.

## 2. Configuración del Backend

1. Navega a la carpeta `backend`:

    ```bash
    cd backend
    ```

2. Instala las dependencias:

    ```bash
    npm install
    ```

3. Crea un archivo `.env` en la carpeta `backend` con las siguientes variables:

    ```env
    MONGO_URI=mongodb://localhost:27017/inventarios
    PORT=3001
    ```

4. Inicia el servidor:

    ```bash
    npm start
    ```

   El servidor se iniciará en `http://localhost:3001`.

## 3. Configuración del Frontend

1. Navega a la carpeta `frontend`:

    ```bash
    cd frontend
    ```

2. Instala las dependencias:

    ```bash
    npm install
    ```

3. Asegúrate de que el archivo `axios.js` en `frontend/src` esté configurado con la URL base correcta:

    ```javascript
    import axios from 'axios';

    const instance = axios.create({
      baseURL: 'http://localhost:3001/api'
    });

    export default instance;
    ```

4. Inicia la aplicación:

    ```bash
    npm start
    ```

   La aplicación se iniciará en `http://localhost:3000`.

## 4. Uso

- **Página Principal**: Muestra una lista de blogs existentes.
- **Agregar Blog**: Permite añadir un nuevo blog a la base de datos.
- **Ver Detalles**: Muestra los detalles de un blog específico.

## 5. Tecnologías Utilizadas

- **Backend**: Node.js, Express, MongoDB
- **Frontend**: React, Material-UI

## 6. Contribuciones

Si deseas contribuir a este proyecto, por favor sigue estos pasos:

1. Realiza un fork del repositorio.
2. Crea una rama para tu característica o corrección de errores.
3. Realiza un pull request con una descripción clara de los cambios.

## 7. Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo `LICENSE` para más detalles.
