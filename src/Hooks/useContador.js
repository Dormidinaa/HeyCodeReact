import { useState } from 'react';

export const useContador = (initialValue = 0, factor = 1) => {
  const [contador, setContador] = useState(initialValue);
  // const restar = () => setNum1((prev) => prev - 1);
  const restar = () => setContador(contador - factor);
  const reset = () => setContador(initialValue);
  const sumar = () => setContador(contador + factor);

  return { contador, restar, reset, sumar };
};
