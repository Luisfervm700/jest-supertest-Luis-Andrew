import raizCuadrada from '../src/raizCuadrada';

test('raíz cuadrada de 9 es igual a 3', () => {
  expect(raizCuadrada(9)).toBe(3);
});

test('raíz cuadrada de -4 lanza un error', () => {
  expect(() => raizCuadrada(-4)).toThrowError('No se puede calcular la raíz cuadrada de un número negativo.');
});
