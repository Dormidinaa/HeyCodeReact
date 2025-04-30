//importación con nombre van entre {}
import datos, {
  PRUEBA1,
  kms,
  nombre,
  chicas,
  chicos,
  numero,
  apellidos,
} from './export-examples';
//si no pongo llaves, me traigo lo que está exportado por defecto y le pongo el nombre que me da la gana

export const ImportExportApp = () => {
  console.log(PRUEBA1);
  return (
    //jsx
    <div className="principal">
      <h1>Explicación import / export</h1>
      <hr />
      <p>prueba1 es {PRUEBA1}</p>
      <p>nombre: {nombre}</p>
      <p>kms: {kms}</p>
      <p>Apellidos: {apellidos}</p>
      <h2>Chicas!</h2>
      <p>Chica 1: {chicas[0]}</p>
      <p>Chica 2: {chicas[1]}</p>
      <p>Chica 3: {chicas[2]}</p>
      <p>Chica 4: {chicas[3]}</p>
      <h2>Chicos!</h2>
      <p>Chico 1: {chicos[0]}</p>
      <p>Chico 2: {chicos[1]}</p>
      <p>Chico 3: {chicos[2]}</p>
      <p>Chico 4: {chicos[3]}</p>
      <p>Chico 5: {chicos[4]}</p>
      <h3>DATOS!</h3>
      <p>nombre: {datos.nombre}</p>
      <p>direccion: {datos.direccion}</p>
      <p>email: {datos.email}</p>
      <p className="error">la suma de 4 + 2 = {numero(4, 2)}</p>
    </div>
  );
};
