import { Component, Fragment } from 'react';
import './footer.css';

export default class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="social-icons">
          <a href="#">
            <img src="./facebook.svg" alt="" />
          </a>
          <a href="#">
            <img src="./instagram.svg" alt="" />
          </a>
          <a href="#">
            <img src="./pinterest.svg" alt="" />
          </a>
          <a href="#">
            <img src="./twitter.svg" alt="" />
          </a>
        </div>
        <p>Created by me. Todos los derechos reservados</p>
      </footer>
    );
  }
}
