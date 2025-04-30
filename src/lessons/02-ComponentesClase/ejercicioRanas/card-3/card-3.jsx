import { Component, Fragment } from 'react';
import './card-3.css';
import { frogs } from '../data/ranas';

export default class Card3 extends Component {
  render() {
    return (
      <Fragment>
        <div className="frog-card card3">
          <img src="/images/rana3.jpg" alt="Ameerega trivittata" />
          <h3>{frogs[0].name}</h3>
          <p>
            <strong>Hábitat:</strong> {frogs[2].habitat}
          </p>
          <p>
            <strong>Tamaño macho:</strong> {frogs[2].tam_machos}
          </p>
          <p>
            <strong>Tamaño hembra:</strong> {frogs[2].tam_hembras}
          </p>
        </div>
      </Fragment>
    );
  }
}
