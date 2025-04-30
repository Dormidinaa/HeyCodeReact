import { Component, Fragment } from 'react';
import './body.css';
import Section1 from '../section-1/section-1';
import Section2 from '../section-2/section-2';
import Section3 from '../section-3/section-3';
import Section4 from '../section-4/section-4';
import Footer from '../footer/footer';
export default class Body extends Component {
  render() {
    return (
      <Fragment>
        <main>
          <Section1 />
          <Section2 />
          <Section3 />
          <Section4 />
        </main>
        <Footer />
      </Fragment>
    );
  }
}
