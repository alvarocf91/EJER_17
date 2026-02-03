const layout = require('./layout');

exports.render = () => {
    const content = `
    <div style="text-align: center;">
        <h1>Bienvenido a la Discoteca Virtual</h1>
        <p>Gestiona tus artistas favoritos y sus álbumes de forma sencilla.</p>
        <div style="margin-top: 30px;">
            <a href="/artistas" style="padding: 15px; background: #007bff; color: white; text-decoration: none; border-radius: 5px;">Ver Artistas</a>
            <a href="/albumes" style="padding: 15px; background: #007bff; color: white; text-decoration: none; border-radius: 5px; margin-left: 10px;">Ver Álbumes</a>
        </div>
    </div>`;
    return layout.render(content);
};