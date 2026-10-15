function exigirDatos(valores) {
  if (valores.length === 0) {
    throw new RangeError('La lista no puede estar vacía');
  }
}

export function media(valores) {
  exigirDatos(valores);
  return valores.reduce((acc, v) => acc + v, 0) / valores.length;
}

export function mediana(valores) {
  exigirDatos(valores);
  const orden = [...valores].sort((a, b) => a - b);
  const mitad = Math.floor(orden.length / 2);
  return orden.length % 2 === 0
    ? (orden[mitad - 1] + orden[mitad]) / 2
    : orden[mitad];
}

export function porcentajeAprobados(valores, aprobado = 5) {
  exigirDatos(valores);
  return (valores.filter((v) => v >= aprobado).length / valores.length) * 100;
}

export function parsear(texto) {
  return texto
    .split(/[,;\s]+/)
    .filter(Boolean)
    .map(Number)
    .filter(Number.isFinite);
}