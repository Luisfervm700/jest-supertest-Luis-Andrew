import multiplicacion from '../src/multiplicacion';


test('multiplicar 6 * 8 es igual a 48', () => {
  expect(multiplicacion(6, 8)).toBe(48);
});