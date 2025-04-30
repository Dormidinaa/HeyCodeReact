import { Component, Fragment } from 'react';
import './header-navbar.css';
export default class HeaderNavbar extends Component {
  render() {
    return (
      <Fragment>
        <header>
          <nav>
            <span>RANAS FLECHA</span>
            <div>
              <a href="#Inicio">Inicio</a>
              <a href="#Inicio">Especies</a>
              <a href="#Inicio">Cuidados</a>
              <a href="#Inicio" className="last-nav-a">
                Consejos
              </a>
            </div>
          </nav>
        </header>
      </Fragment>
    );
  }
}
