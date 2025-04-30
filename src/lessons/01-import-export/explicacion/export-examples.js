//Tipos de exportación
//1.- exportación con nombre antes de la sentencia

export const PRUEBA1 = 1000;

//2.- exportación con nombre despues de la sentencia

const kms = 10000;
const nombre = 'Eli';

//3.- Exportaciones por defecto (sin nombre) SOLAMENTE UNA EXPORTACIÓN POR DEFECTO POR ARCHIVO

const apellidos = 'Osuna Vargas';

//------------------------------EJERCICIO---------------------------------------

/*exportación con nombre antes de la sentencia de un array con 3 nombres femeninos, pintar los tres nombres en la pantalla
exportación despuñes de la sentencia de un array de 3 nombres masculinos y pintarlos en pantalla
exportar una función que se le pasan 2 numeros y nos devuelve su suma
pintar el resultado de la suma de 4+2
exportar un objeto nombre, dirección y email y pintarlos en pantalla POR DEFECTO
*/

const chicas = ['Alexia', 'Miriam', 'Maria', 'Marina'];
const chicos = ['Arturo', 'Edgar', 'Javier', 'Xavi', 'Adrian'];

const numero = (a, b) => {
  return a + b;
};

const datos = {
  nombre: 'Elisama',
  direccion: 'Lejos',
  email: 'k4in@hotmail.es',
};

export { chicas, chicos, numero, apellidos, kms, nombre };
export default datos;
