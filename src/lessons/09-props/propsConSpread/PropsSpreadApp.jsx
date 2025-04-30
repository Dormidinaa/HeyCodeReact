import React from 'react';
import { Hijo } from './components/Hijo';

export const PropsSpreadApp = () => {
  let prop1 = 'propiedad1';
  let prop2 = 'propiedad2';
  let prop3 = 'propiedad3';
  let prop4 = 'propiedad4';
  let prop5 = 'propiedad5';

  return (
    <main>
      <div>PropsSpreadApp</div>
      <hr />
      <Hijo
        prop1={prop1}
        prop2={prop2}
        prop3={prop3}
        prop4={prop4}
        prop5={prop5}
      />
    </main>
  );
};
