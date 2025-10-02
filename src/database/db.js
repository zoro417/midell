const fs = require('fs');
const path = require('path');

const readDb = () => {
    const db = fs.readFileSync(path.resolve(__dirname,'./db.json'));

    return JSON.parse(db);

}

const writeDb = (data) => {
    fs.writeFileSync(path.resolve(__dirname,'./db.json'), JSON.stringify(data));
}

module.exports = {
    readDb,
    writeDb
}