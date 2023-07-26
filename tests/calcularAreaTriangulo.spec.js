import calcularAreaTriangulo from '../src/calcularAreaTriangulo';

test('el área de un triángulo con base 8 y altura 6 es igual a 24', () => {
  expect(calcularAreaTriangulo(8, 6)).toBe(24);
});