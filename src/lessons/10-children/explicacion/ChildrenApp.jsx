import React from 'react';
import { CustomButton } from './components/CustomButton';
import { Formulario } from './components/Formulario';
import { Button } from 'react-bootstrap';
import { useState } from 'react';

export const ChildrenApp = () => {
  const [show, setShow] = useState(true);

  return (
    <div>
      <h1>children</h1>
      <hr />
      <h3>
        Son unas props especiales que sirven para pasar de padres a hijos jsx{' '}
      </h3>

      <CustomButton onClick={() => console.log('me han pulsado')}>
        Aceptarrrrrrrrr
      </CustomButton>

      <Button onClick={() => setShow(!show)}>abrir/cerrar</Button>

      <hr />
      <div className="d-flex gap-3">
        <Formulario title="form1">
          {show && (
            <div>
              <div>
                <label htmlFor="">nombre</label>
                <input type="text" />
              </div>
              <div>
                <label htmlFor="">apellisod</label>
                <input type="text" />
              </div>
              <div>
                <label htmlFor="">email</label>
                <input type="text" />
              </div>
              <div>
                <label htmlFor="">password1</label>
                <input type="text" />
              </div>
              <div>
                <label htmlFor="">password2</label>
                <input type="text" />
              </div>
              <div>
                <label htmlFor="">edad</label>
                <input type="text" />
              </div>
              <div>
                <label htmlFor="">sexo</label>
                <input type="text" />
              </div>
            </div>
          )}
        </Formulario>
        <Formulario title="form2" />
        <Formulario title="form3">
          <button>Aceptar</button>
        </Formulario>
      </div>
    </div>
  );
};
