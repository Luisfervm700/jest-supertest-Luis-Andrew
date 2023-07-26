import potencia from '../src/potencia';

test('elevar 2^3 es igual a 8', () => {
  expect(potencia(2, 3)).toBe(8);
});
