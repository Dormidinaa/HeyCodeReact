export const Teoria = () => {
  return (
    <>
      <h1>Leccion 4, hooks, ciclo de vida de componetes y useState</h1>
      <hr />
      <h1>HOOKS</h1>
      <h2>
        Hooks: Son funciones (Nos las provee react, o librerías o podemos
        nosotros crear los nuestros personalizados) que nos permite trabajar
        estados
      </h2>
      <h3>Normas de los hooks</h3>
      <ul>
        <li>Todos comienza por use (useState, useEffect, useRef)</li>
        <li>Solamente se puede usar con componentes de tipo funcional</li>
        <li>
          Todos tienen que ser llamados en el más alto nivel dentro de un
          componente (Nunca dentro de funciones o bucles o condicionales)
        </li>
      </ul>
      <hr />
      <h1>useState</h1>
      <p>
        Este hook nos permite crear variables de estado, las cuales son
        vigiladas por react
      </p>
      <h1>
        CADA VEZ QUE SE CAMBIA O SE SETEA UNA VARIABLE DE ESTADO SE PRODUCE LA
        RERENDERIZACION DEL COMPONENTE QUE CONTIENE DICHA VARIABLE Y DE TDOOS
        SUS HIJOS, ESTO IMPLICA QUE SE LEE Y EJECUTA TODO COMPONENTE
      </h1>
      <hr />
      <h2>
        EL ESTADO ES INMUTABLE (solamente se puede mutar a través de un seteo)
      </h2>
      <h1>CICLO DE VIDA DE UN COMPONENTE DE REACT</h1>
      <h4>
        1.- Montaje del componente: la primera vez que un componente se monta
      </h4>
      <h4>
        2.- Actualizacion: la renderizacion que provoca el cambio de alguno de
        sus estados
      </h4>
      <h4>3.- Desmontaje: Cuando borramos el componente</h4>
    </>
  );
};
