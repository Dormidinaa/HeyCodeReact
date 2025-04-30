import { Component, Fragment } from 'react';
import './card-2.css';
import { frogs } from '../data/ranas';

export default class Card2 extends Component {
  render() {
    return (
      <Fragment>
        <div className="frog-card card2">
          <img src="/images/rana2.jpg" alt="Ameerega trivittata" />
          <h3>{frogs[0].name}</h3>
          <p>
            <strong>Hábitat:</strong> {frogs[1].habitat}
          </p>
          <p>
            <strong>Tamaño macho:</strong> {frogs[1].tam_machos}
          </p>
          <p>
            <strong>Tamaño hembra:</strong> {frogs[1].tam_hembras}
          </p>
        </div>
      </Fragment>
    );
  }
}
