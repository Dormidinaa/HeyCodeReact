import { Component, Fragment } from 'react';
import foto1 from '../../../assets/marge.jpg';
import homer from '../../../../public/images/homer.jpg';

// import './explic.css';

export default class ExplicCompClass extends Component {
  render() {
    // let styles = {
    //   color: ' #61dafbaa',
    //   height: '200px',
    //   backgroundColor: 'red',
    // };
    console.log(foto1);

    return (
      <Fragment>
        <header>
          <h1>Componente de tipo class</h1>
          <hr />
        </header>
        <main className="principal">
          <p>Que bonito React</p>
          <div>
            {/* partimos desde public */}
            <img src="/images/homer.jpg" alt="" />
            <img src={foto1} alt="" />
            <img src={homer} alt="" />
          </div>
        </main>
      </Fragment>
    );
  }
}
