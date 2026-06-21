require('./styles.css');

const app = document.getElementById('app');

app.innerHTML = `
    <div class="card">
        <h1>Tema 6 - Service Workers con Workbox</h1>
        <p>
            Este proyecto utiliza Webpack y Workbox para generar un Service Worker
            que permite almacenar recursos en caché.
        </p>
        <span class="status">PWA / Offline Ready</span>

        <ul>
            <li>Webpack genera el bundle de la aplicación.</li>
            <li>Workbox genera el Service Worker.</li>
            <li>El navegador puede usar caché para funcionar sin conexión.</li>
        </ul>
    </div>
`;

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker
            .register('/Tema6/service-worker.js')
            .then(() => {
                console.log('Service Worker registrado correctamente.');
            })
            .catch((error) => {
                console.log('Error al registrar el Service Worker:', error);
            });
    });
}