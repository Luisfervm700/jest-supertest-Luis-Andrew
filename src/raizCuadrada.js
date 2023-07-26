function raizCuadrada(num) {
  if (num < 0) {
    throw new Error('No se puede calcular la raíz cuadrada de un número negativo.');
  }
  return Math.sqrt(num);
}

export default raizCuadrada;
