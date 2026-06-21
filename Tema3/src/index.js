require('./styles.css');

const app = document.getElementById('app');

app.innerHTML = `
    <div class="card">
        <h1>Tema 3 - CSS con Webpack</h1>
        <p>Este proyecto integra archivos CSS usando loaders dentro de Webpack.</p>
        <p class="badge">style-loader + css-loader</p>
    </div>
`;