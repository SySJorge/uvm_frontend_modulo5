import './styles.scss';

import { Chart } from 'chart.js/auto';
import _ from 'lodash';

import logo from './assets/logo.svg';
import servicios from './data/servicios.csv';
import configuracion from './data/configuracion.yaml';
import metricas from './data/metricas.json5';

const app = document.getElementById('app');

const serviciosOrdenados = _.orderBy(servicios, ['incidencias'], ['desc']);

app.innerHTML = `
    <section class="dashboard">
        <header class="header">
            <img src="${logo}" alt="Logo del dashboard">
            <div>
                <h1>Actividad 4 - Dashboard con Webpack</h1>
                <p>${configuracion.empresa} | ${configuracion.proyecto}</p>
                <p>Aplicación con SASS, CSV, YAML, JSON5, Chart.js, Lodash y Service Worker.</p>
            </div>
        </header>

        <section class="grid">
            <article class="card">
                <h3>Total servicios</h3>
                <p class="number">${metricas.totalServicios}</p>
            </article>

            <article class="card">
                <h3>Activos</h3>
                <p class="number">${metricas.serviciosActivos}</p>
            </article>

            <article class="card">
                <h3>Monitoreo</h3>
                <p class="number">${metricas.serviciosMonitoreo}</p>
            </article>

            <article class="card">
                <h3>Disponibilidad</h3>
                <p class="number">${metricas.disponibilidad}</p>
            </article>
        </section>

        <section class="chart-card">
            <h2>Incidencias por servicio</h2>
            <canvas id="servicesChart"></canvas>
        </section>

        <section class="table-card">
            <h2>Servicios monitoreados</h2>
            <table>
                <thead>
                    <tr>
                        <th>Servicio</th>
                        <th>Incidencias</th>
                        <th>Estatus</th>
                    </tr>
                </thead>
                <tbody>
                    ${serviciosOrdenados.map((servicio) => `
                        <tr>
                            <td>${servicio.nombre}</td>
                            <td>${servicio.incidencias}</td>
                            <td><span class="status">${servicio.estatus}</span></td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>
        </section>

        <footer class="footer">
            <p>Proyecto generado por ${configuracion.autor} - ${configuracion.modulo}</p>
        </footer>
    </section>
`;

const chartContext = document.getElementById('servicesChart');

new Chart(chartContext, {
    type: 'bar',
    data: {
        labels: serviciosOrdenados.map((servicio) => servicio.nombre),
        datasets: [
            {
                label: 'Incidencias',
                data: serviciosOrdenados.map((servicio) => Number(servicio.incidencias))
            }
        ]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                display: true
            }
        }
    }
});

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker
            .register('/service-worker.js')
            .then(() => {
                console.log('Service Worker registrado correctamente.');
            })
            .catch((error) => {
                console.log('Error al registrar el Service Worker:', error);
            });
    });
}