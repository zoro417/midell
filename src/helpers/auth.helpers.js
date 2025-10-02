const jwt = require("jsonwebtoken");

const SECRET_KEY = "mi_clave_secreta123456";

async function generarToken(payload) {
    return new Promise((resolve, reject) => {
        jwt.sign(payload, SECRET_KEY, { expiresIn: "1h" }, (err, token) => {
            if (err) reject(err);
            console.log('se acaba de generar')
            resolve(token);
        });
    });
}

module.exports = { generarToken, SECRET_KEY };