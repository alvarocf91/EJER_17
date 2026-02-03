const fs = require('fs');
const path = require('path');
const dataPath = path.join(__dirname, '../data/albumes.json');

const Album = {
    findAll: () => JSON.parse(fs.readFileSync(dataPath, 'utf-8')),
    findById: (id) => Album.findAll().find(a => a.id == id),
    findByArtista: (id) => Album.findAll().filter(a => a.artistaId == id),
    save: (data) => {
        let albumes = Album.findAll();
        data.artistaId = parseInt(data.artistaId);
        if (data.id) {
            albumes = albumes.map(a => a.id == data.id ? { ...a, ...data, id: parseInt(data.id) } : a);
        } else {
            data.id = Date.now();
            albumes.push(data);
        }
        fs.writeFileSync(dataPath, JSON.stringify(albumes, null, 2));
    },
    delete: (id) => {
        let albumes = Album.findAll().filter(a => a.id != id);
        fs.writeFileSync(dataPath, JSON.stringify(albumes, null, 2));
    }
};
module.exports = Album;