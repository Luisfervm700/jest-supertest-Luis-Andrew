import areaCirculo from '../src/areaCirculo';

test('el área de un círculo con radio 5 es igual a 78.53975', () => {
  expect(areaCirculo(5)).toBe(78.53975);
});