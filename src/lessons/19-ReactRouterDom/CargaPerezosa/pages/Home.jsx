console.log('Soy Home');

const Home = () => {
  return (
    <div>
      <h1>Lazy load o carga perezosa</h1>
      <p>
        Los componentes se cargan cuando esten siendo utliziados, de manera que
        solo tenemos en memoria aquellos componentes utilizando, mejorando el
        rendimiento de la aplicacion.
      </p>
      <br />
      <h2>Norma obligatoria</h2>
      <p>Los componentes tiene que ser exportados por default</p>
    </div>
  );
};

export default Home;
