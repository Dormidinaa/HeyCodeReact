import { Button } from 'react-bootstrap';
import { useContador } from '../../../Hooks/useContador';

export const CustomHookApp = () => {
  const contador1 = useContador(30, 3);
  const contador2 = useContador(45, 5);
  const contador3 = useContador();

  return (
    <div>
      <h1>Contadores con hook personalizados</h1>
      <hr />
      <h2>Contador 1</h2>
      <h3>num1: {contador1.contador}</h3>
      <div className="d-flex gap-2">
        <Button onClick={contador1.restar}>-3</Button>
        <Button onClick={contador1.reset}>reset</Button>
        <Button onClick={contador1.sumar}>+3</Button>
      </div>
      <hr />
      <h2>Contador 2</h2>
      <h3>num1: {contador2.contador}</h3>
      <div className="d-flex gap-2">
        <Button onClick={contador2.restar}>-5</Button>
        <Button onClick={contador2.reset}>reset</Button>
        <Button onClick={contador2.sumar}>+5</Button>
      </div>
      <hr />
      <h2>Contador 3</h2>
      <h3>num1: {contador3.contador}</h3>
      <div className="d-flex gap-2">
        <Button onClick={contador3.restar}>-1</Button>
        <Button onClick={contador3.reset}>reset</Button>
        <Button onClick={contador3.sumar}>+1</Button>
      </div>
    </div>
  );
};
