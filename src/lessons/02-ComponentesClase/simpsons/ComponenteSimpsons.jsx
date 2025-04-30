import { Component, Fragment } from 'react';
import './compSimp.css';
import personajes from './data/data';
export default class ComponenteSimpsons extends Component {
  render() {
    return (
      <Fragment>
        <header>
          <h1>BIENVENIDO A LA FAMILIA SIMPSON</h1>
        </header>
        <main>
          <section>
            <h2 className="h2-section">Estos son los padres</h2>
            <div className="padres-section">
              <div>
                <img src="/images/homer2.jpg" alt="" />
                <p>Nombre: {personajes[0].name}</p>
                <p>Sexo: {personajes[0].sexo}</p>
              </div>
              <div>
                <img src="/images/marge.jpg" alt="" />
                <p>Nombre: {personajes[1].name}</p>
                <p>Sexo: {personajes[1].sexo}</p>
              </div>
            </div>
          </section>
          <section>
            <h2 className="h2-section">Estos son los hijos</h2>
            <div className="padres-section">
              <div>
                <img src="/images/bart.jpg" alt="" />
                <p>Nombre: {personajes[2].name}</p>
                <p>Sexo: {personajes[2].sexo}</p>
              </div>
              <div>
                <img src="/images/lisa.jpg" alt="" />
                <p>Nombre: {personajes[3].name}</p>
                <p>Sexo: {personajes[3].sexo}</p>
              </div>
              <div>
                <img src="/images/maggie.jpg" alt="" />
                <p>Nombre: {personajes[4].name}</p>
                <p>Sexo: {personajes[4].sexo}</p>
              </div>
            </div>
          </section>
        </main>
      </Fragment>
    );
  }
}
