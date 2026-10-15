import './style.css';
import {
  media,
  mediana,
  porcentajeAprobados,
  parsear,
} from './estadisticas.js';

const entrada = document.getElementById('notas');
const salida = document.getElementById('resultado');

function fila(etiqueta, valor) {
  const dt = document.createElement('dt');
  dt.textContent = etiqueta;
  const dd = document.createElement('dd');
  dd.textContent = valor;
  salida.append(dt, dd);
}

function calcular() {
  const notas = parsear(entrada.value);
  salida.replaceChildren();
  if (notas.length === 0) {
    fila('Error', 'Introduce al menos una nota válida.');
    return;
  }
  fila('Notas válidas', notas.length);
  fila('Media', media(notas).toFixed(2));
  fila('Mediana', mediana(notas).toFixed(2));
  fila('Aprobados', `${porcentajeAprobados(notas).toFixed(0)} %`);
}

document.getElementById('formulario').addEventListener('submit', (e) => {
  e.preventDefault();
  calcular();
});

// Metadatos inyectados en tiempo de compilación por el pipeline
document.getElementById('version').textContent =
  import.meta.env.VITE_COMMIT_SHA?.slice(0, 7) ?? 'local';
document.getElementById('compilacion').textContent =
  import.meta.env.VITE_BUILD_DATE ?? 'desarrollo';

calcular();