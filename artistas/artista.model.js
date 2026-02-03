const fs = require('fs');
const path = require('path');
const dataPath = path.join(__dirname, '../data/artistas.json');

const Artista = {
    findAll: () => JSON.parse(fs.readFileSync(dataPath, 'utf-8')),
    findById: (id) => Artista.findAll().find(a => a.id == id),
    save: (data) => {
        let artistas = Artista.findAll();
        if (data.id) {
            artistas = artistas.map(a => a.id == data.id ? { ...a, ...data, id: parseInt(data.id) } : a);
        } else {
            data.id = Date.now();
            artistas.push(data);
        }
        fs.writeFileSync(dataPath, JSON.stringify(artistas, null, 2));
    },
    delete: (id) => {
        let artistas = Artista.findAll().filter(a => a.id != id);
        fs.writeFileSync(dataPath, JSON.stringify(artistas, null, 2));
    }
};
module.exports = Artista;