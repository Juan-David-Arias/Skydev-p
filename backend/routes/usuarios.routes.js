const express = require('express');
const router = express.Router();
const { usuario } = require('../database/estructura');





let usuariosRouter = Router ()


usuariosRouter.post ("/registro", registrar_clientes)
usuariosRouter.post ("/login", login_usuario)

usuariosRouter.get ("/test", test)

export default usuariosRouter;