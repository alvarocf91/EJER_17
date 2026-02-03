exports.render = (content) => `
<!DOCTYPE html>
<html>
<head><link rel="stylesheet" href="/css/style.css"><title>Discoteca</title></head>
<body>
    <nav><a href="/">Inicio</a><a href="/albumes">Álbumes</a><a href="/artistas">Artistas</a></nav>
    <main>${content}</main>
</body>
</html>`;