const dbFunctions = require('../database/db');
const { validateUser } = require('../helpers/users.helpers');

const getUsers = (req, res) => {

    console.log(req.headers.user)

    const data = dbFunctions.readDb();

    res.status(200).json({
        message: "Usuarios obtenidos de manera exitosa",
        data
    })


}

const createUser = (req, res) => {

    const user = req.body;

    console.log(user)

    if (!user.documento) {
        return res.status(400).json({
            message: "El documento es requirido"
        })
    }

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

    if (!user.contraseña) {
        return res.status(400).json({
            message: "La contraseña es requerida"
        })
    }

    const users = dbFunctions.readDb();

    let validUser = validateUser(users, user.documento);

    if (validUser) {
        return res.status(400).json({
            message: "El usuario que desea crear ya existe"
        })
    }

    users.push({
        ...user,
        tareas: []
    });

    dbFunctions.writeDb(users);

    res.status(201).json({
        message: "Usuario creado de forma exitosa"
    })
}

module.exports = {
    getUsers,
    createUser

}