const jwt = require("jsonwebtoken");
const { SECRET_KEY } = require("../helpers/auth.helpers");

async function verificarToken(req, res, next) {
    const header = req.headers["authorization"];
    if (!header) {
        return res.status(403).json({ msg: "Token requerido" });
    }

    const token = header.replace("BEARER ", "");

    try {
        const decoded = await new Promise((resolve, reject) => {
            jwt.verify(token, SECRET_KEY, (err, decoded) => {
                if (err) reject(err);
                resolve(decoded);
            });
        });

        console.log(decoded)
        console.log(req.body)

        req.body = {
            nombre: req.body.nombre,
            documento: req.body.documento,
        }

        req.headers.user = {
        nombre: decoded.nombre,
        documento: decoded.documento
    }

    next();
} catch (error) {
    return res.status(401).json({ msg: "Token inválido", error: error.message });
}
}

module.exports = {
    verificarToken
}