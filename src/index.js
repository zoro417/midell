const express = require('express');
const app = express();
const usersRoutes = require('./routes/users.routes');
const authRoutes = require('./routes/login.routes');

app.use(express.json());

app.use('/users', usersRoutes);
app.use('/auth', authRoutes);

app.get('/', (req, res) => {
    res.json({
        message: "Hola ¿Como estás?"
    })
})

/* app.get('/users', (req, res) => {
    res.json({
        message: "Usuarios obtenido exitosamente",
        users
    })
})

app.get('/user/:nombre', (req, res) => {

    const nombre = req.params.nombre;

    let user;

    for(let i = 0; i < users.length; i++){
        if(users[i].nombre == nombre){
            user = users[i]
        }
    }

    if(!user){
        return res.status(400).json({
            message: "El usuario con el nombre ingresado no existe"
        })
    }

    res.json({
        message: "Usuario encontrado de forma exitosa",
        user
    })
})

app.post('/user', (req, res) => {

    const user = req.body;

    if (!user.nombre) {
        return res.status(400).json({
            message: "El nombre es requirido"
        })
    }

    if (!user.telefono) {
        return res.status(400).json({
            message: "El telefono es requerido"
        })
    }

    users.push(user);

    res.json({
        message: "Usuario creado de forma exitosa",
        users
    })
}) */

app.listen(3000, () => {
    console.log('Servicio corriendo en el puerto 3000')
})

// Comando: node ./src/index.js