const mensaje = () => {
    return 'Hola desde Webpack - Tema 2';
};

const app = document.getElementById('app');
app.innerHTML = `
    <h1>${mensaje()}</h1>
    <p>Este proyecto genera un paquete JavaScript usando Webpack.</p>
`;
