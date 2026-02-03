const layout = require('../views/layout');

exports.index = (artistas) => {
    let html = `<h1>Lista de Artistas</h1>
    <a href="/artistas/form" class="btn-add">Añadir Nuevo Artista</a>
    <div class="grid-artistas">`;
    artistas.forEach(art => {
        html += `<div class="card">
            <a href="/artistas/${art.id}"><img src="${art.foto}"></a>
            <h3>${art.nombre}</h3>
            <a href="/artistas/form/${art.id}" class="edit-link">Editar</a>
            <a href="/artistas/delete/${art.id}" class="delete-link">Eliminar</a>
        </div>`;
    });
    return layout.render(html + '</div>');
};

exports.detail = (art, albs) => {
    let html = `<h1>Detalle de ${art.nombre}</h1>
    <div class="form-container" style="display:flex; gap:20px; align-items:center;">
        <img src="${art.foto}" style="border-radius:50%; width:150px;">
        <div>
            <p><strong>País:</strong> ${art.pais}</p>
            <p><strong>Género:</strong> ${art.genero}</p>
            <p><strong>Formación:</strong> ${art.fecha_formacion}</p>
        </div>
    </div>
    <h3>Álbumes</h3>
    <table><thead><tr><th></th><th>Título</th></tr></thead><tbody>`;
    albs.forEach(alb => html += `<tr><td><img src="${alb.foto}" width="50"></td><td>${alb.titulo}</td></tr>`);
    return layout.render(html + '</tbody></table><br><a href="/artistas" class="edit-link">Volver</a>');
};

exports.form = (art) => layout.render(`<h1>${art.id ? 'Editar' : 'Nuevo'} Artista</h1>
    <div class="form-container"><form action="/artistas/save" method="POST">
    <input type="hidden" name="id" value="${art.id || ''}">
    <label>Nombre:</label><input type="text" name="nombre" value="${art.nombre || ''}"><br>
    <label>País:</label><input type="text" name="pais" value="${art.pais || ''}"><br>
    <label>URL Foto:</label><input type="text" name="foto" value="${art.foto || ''}"><br>
    <button type="submit" class="btn-save">Guardar</button></form></div>`);