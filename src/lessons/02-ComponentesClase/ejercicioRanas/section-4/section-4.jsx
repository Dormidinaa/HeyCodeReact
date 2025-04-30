import { Component, Fragment } from 'react';
import './section-4.css';
import {
  frogTextIntro,
  frogTextDesc,
  frogTextDist,
  frogTextComp,
  frogTextTox1,
  frogTextTox2,
  frogTextFuente,
} from '../data/ranas';

export default class Section4 extends Component {
  render() {
    return (
      <section className="section-4">
        <div className="container">
          <h4>Introducción:</h4>
          <p>{frogTextIntro}</p>
        </div>
        <div className="container">
          <h4>Descripción:</h4>
          <p>{frogTextDesc}</p>
        </div>
        <div className="container">
          <h4>Distribución:</h4>
          <p>{frogTextDist}</p>
        </div>
        <div className="container">
          <h4>Comportamiento:</h4>
          <p>{frogTextComp}</p>
        </div>
        <div className="container">
          <h4>Toxicidad:</h4>
          <p>
            {frogTextTox1} {frogTextTox2}
          </p>
        </div>
        <p className="container p-pd">{frogTextFuente}</p>
      </section>
    );
  }
}
