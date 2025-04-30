import { Component, Fragment } from 'react';
import './card-1.css';
import { frogs } from '../data/ranas';

export default class Card1 extends Component {
  render() {
    return (
      <Fragment>
        <div className="frog-card card1">
          <img src="/images/rana1.jpg" alt="Ameerega trivittata" />
          <h3>{frogs[0].name}</h3>
          <p>
            <strong>Hábitat:</strong> {frogs[0].habitat}
          </p>
          <p>
            <strong>Tamaño macho:</strong> {frogs[0].tam_machos}
          </p>
          <p>
            <strong>Tamaño hembra:</strong> {frogs[0].tam_hembras}
          </p>
        </div>
      </Fragment>
    );
  }
}
