import calcularDistanciaRecorrida from '../src/calcularDistanciaRecorrida';

test('la distancia recorrida a una velocidad de 10 m/s durante 5 segundos es igual a 50 metros', () => {
  expect(calcularDistanciaRecorrida(10, 5)).toBe(50);
});