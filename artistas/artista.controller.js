const Artista = require('./artista.model');
const Album = require('../albumes/album.model');
const artistaView = require('./artista.view');

exports.list = (req, res) => res.send(artistaView.index(Artista.findAll()));
exports.detail = (req, res) => {
    const artista = Artista.findById(req.params.id);
    const albumes = Album.findByArtista(req.params.id);
    res.send(artistaView.detail(artista, albumes));
};
exports.form = (req, res) => res.send(artistaView.form(req.params.id ? Artista.findById(req.params.id) : {}));
exports.save = (req, res) => {
    Artista.save(req.body);
    res.redirect('/artistas');
};
exports.delete = (req, res) => {
    Artista.delete(req.params.id);
    res.redirect('/artistas');
};