const validateUser = (users, documento) => {
    let validUni = false;

    for (let i = 0; i < users.length; i++) {
        if (users[i].documento === documento) {
            validUni = true;
        }
    }

    return validUni;
}

const getUser = (users, documento) => {
    let user = {};

    for (let i = 0; i < users.length; i++) {
        if (users[i].documento === documento) {
            user = users[i];
        }
    }

    return user;
}

const validatePassword = (users, documento, contraseña) => {
    let validUni = false;

    for (let i = 0; i < users.length; i++) {
        if (users[i].documento === documento && users[i].contraseña === contraseña) {
            validUni = true;
        }
    }

    return validUni;
}

module.exports = {
    validateUser,
    getUser,
    validatePassword
}