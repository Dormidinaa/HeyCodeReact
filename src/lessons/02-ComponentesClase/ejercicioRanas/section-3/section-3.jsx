import { Component, Fragment } from 'react';
import './section-3.css';
import Card1 from '../card-1/card-1';
import Card2 from '../card-2/card-2';
import Card3 from '../card-3/card-3';
export default class Section3 extends Component {
  render() {
    return (
      <Fragment>
        <section className="section-3">
          <Card1 />
          <Card2 />
          <Card3 />
        </section>
      </Fragment>
    );
  }
}
