import { test } from 'node:test';
import assert from 'node:assert/strict';
import {
  media,
  mediana,
  porcentajeAprobados,
  parsear,
} from '../src/estadisticas.js';

test('media de una lista', () => {
  assert.equal(media([4, 6, 8]), 6);
});

test('mediana con cantidad impar de datos', () => {
  assert.equal(mediana([9, 1, 5]), 5);
});

test('mediana con cantidad par de datos', () => {
  assert.equal(mediana([1, 2, 3, 4]), 2.5);
});

test('porcentaje de aprobados', () => {
  assert.equal(porcentajeAprobados([3, 5, 7, 9]), 75);
});

test('una lista vacía lanza RangeError', () => {
  assert.throws(() => media([]), RangeError);
});

test('parsear descarta valores no numéricos', () => {
  assert.deepEqual(parsear('5, 7;abc 9'), [5, 7, 9]);
});