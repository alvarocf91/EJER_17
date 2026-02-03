const layout = require('../views/layout');

exports.index = (albumes) => {
    let html = `<h1>Gestión de Álbumes</h1>
    <a href="/albumes/form">Añadir Nuevo Álbum</a>
    <table border="1">
        <tr><th>Foto</th><th>Título</th><th>Año</th><th>Artista</th><th>Acciones</th></tr>`;
    
    albumes.forEach(a => {
        html += `<tr>
            <td><img src="${a.foto}" width="50"></td>
            <td>${a.titulo}</td>
            <td>${a.anio}</td>
            <td>${a.nombreArtista}</td>
            <td>
                <a href="/albumes/form/${a.id}">Editar</a>
                <a href="/albumes/delete/${a.id}">Eliminar</a>
            </td>
        </tr>`;
    });
    html += `</table>`;
    return layout.render(html);
};

exports.form = (album, artistas) => {
    let options = artistas.map(art => 
        `<option value="${art.id}" ${art.id == album.artistaId ? 'selected' : ''}>${art.nombre}</option>`
    ).join('');

    let html = `<h1>${album.id ? 'Editar' : 'Nuevo'} Álbum</h1>
    <form action="/albumes/save" method="POST">
        <input type="hidden" name="id" value="${album.id || ''}">
        <input type="text" name="titulo" placeholder="Título" value="${album.titulo || ''}"><br>
        <input type="number" name="anio" placeholder="Año" value="${album.anio || ''}"><br>
        <input type="text" name="foto" placeholder="URL Foto" value="${album.foto || ''}"><br>
        <select name="artistaId">${options}</select><br>
        <button type="submit">Guardar</button>
    </form>`;
    return layout.render(html);
};