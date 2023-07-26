import modulo from '../src/modulo';

test('módulo de 10 % 3 es igual a 1', () => {
  expect(modulo(10, 3)).toBe(1);
});
