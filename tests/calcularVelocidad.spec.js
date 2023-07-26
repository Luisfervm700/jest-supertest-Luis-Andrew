import calcularVelocidad from '../src/calcularVelocidad';

test('la velocidad de un objeto que recorre 100 metros en 20 segundos es igual a 5', () => {
  expect(calcularVelocidad(100, 20)).toBe(5);
});