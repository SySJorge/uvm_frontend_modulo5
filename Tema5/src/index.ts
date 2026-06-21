import './styles.scss';

interface Tecnologia {
    nombre: string;
    descripcion: string;
}

const tecnologias: Tecnologia[] = [
    {
        nombre: 'TypeScript',
        descripcion: 'Permite trabajar con tipado fuerte sobre JavaScript.'
    },
    {
        nombre: 'SASS / SCSS',
        descripcion: 'Permite escribir estilos más organizados y reutilizables.'
    },
    {
        nombre: 'Webpack',
        descripcion: 'Genera el bundle final de la aplicación.'
    }
];

const app = document.getElementById('app') as HTMLElement;

app.innerHTML = `
    <div class="card">
        <h1>Tema 5 - TypeScript y SASS con Webpack</h1>
        <p>Este proyecto integra TypeScript y SASS/SCSS dentro de Webpack.</p>
        <span class="badge">typescript + sass-loader</span>
        <ul>
            ${tecnologias.map((item) => `<li><strong>${item.nombre}:</strong> ${item.descripcion}</li>`).join('')}
        </ul>
    </div>
`;
