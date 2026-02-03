const Album = require('./album.model');
const Artista = require('../artistas/artista.model');
const albumView = require('./album.view');

exports.list = (req, res) => {
    const albumes = Album.findAll();
    const artistas = Artista.findAll();
    const data = albumes.map(alb => ({
        ...alb,
        nombreArtista: artistas.find(art => art.id == alb.artistaId)?.nombre || 'N/A'
    }));
    res.send(albumView.index(data));
};
exports.form = (req, res) => res.send(albumView.form(req.params.id ? Album.findById(req.params.id) : {}, Artista.findAll()));
exports.save = (req, res) => {
    if(!req.body.titulo || !req.body.anio) return res.send("Campos obligatorios vacíos");
    Album.save(req.body);
    res.redirect('/albumes');
};
exports.delete = (req, res) => {
    Album.delete(req.params.id);
    res.redirect('/albumes');
};