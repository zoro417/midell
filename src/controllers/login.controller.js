const dbFunctions = require('../database/db');
const { generarToken } = require('../helpers/auth.helpers');
const { validateUser, getUser, validatePassword } = require('../helpers/users.helpers');

const login = async (req, res) => {

    const user = req.body;

    if (!user?.documento) {
        return res.status(400).json({
            message: "El documento es requirido"
        })
    }

    if (!user?.contraseña) {
        return res.status(400).json({
            message: "La contraseña es requerida"
        })
    }

    const users = dbFunctions.readDb();

    const validUser = validateUser(users, user.documento);

    if (!validUser) {
        return res.status(400).json({
            message: "El usuario o contraseña son incorrectos"
        })
    }

    const validPassword = validatePassword(users, user.documento, user.contraseña);

    if (!validPassword) {
        return res.status(400).json({
            message: "El usuario o contraseña son incorrectos"
        })
    }

    const userGet = getUser(users, user.documento);

    const token = await generarToken({
        documento: userGet.documento,
        nombre: userGet.nombre
    })

    console.log(token)

    res.status(200).json({
        message: "Inicio de sesión exitoso",
        token
    })

}

const pruebaCOntrolador = (req, res) => {
    res.status(200).json({
        body: req.body,
        headers: req.heades.palabra
    })
}

module.exports = {
    login
}