const express = require('express');
const path = require('path');
const fs = require('fs');
const morgan = require('morgan');

const app = express();

const accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' });
app.use(morgan('combined', { stream: accessLogStream }));

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

const albumRoutes = require('./albumes/album.routes');
const artistaRoutes = require('./artistas/artista.routes');
const homeView = require('./views/home');

app.use('/albumes', albumRoutes);
app.use('/artistas', artistaRoutes);

app.get('/', (req, res) => res.send(homeView.render()));

const PORT = 3000;
app.listen(PORT, () => console.log(`Servidor en http://localhost:${PORT}`));