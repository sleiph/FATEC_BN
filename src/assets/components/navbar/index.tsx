import React from 'react';
import { Link } from 'react-router-dom';

import '../../styles/bootstrap.css';
import '../../styles/global.css';

function NavBar() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container">
          <Link className="nav-link" to="/"><h1 className="text-white">FATEC</h1></Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <Link className="nav-link" to=""></Link>
              </li>
              <div className="dropdown">
                <li className="nav-item">
                  <Link className="nav-link dropdown-toggle " id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" to="#">Cursos</Link>
                  <div className="dropdown-menu dropdown-menu-right bg-dark" aria-labelledby="dropdownMenuButton">
                    <Link className="dropdown-item text-light" to="#">Análise e Desenvolvimento de Sistemas</Link>
                    <Link className="dropdown-item text-light" to="#">Comércio Exterior</Link>
                    <Link className="dropdown-item text-light" to="#">Gestão da Produção Industrial</Link>
                    <Link className="dropdown-item text-light" to="#">Logística</Link>
                    <Link className="dropdown-item text-light" to="#">Logística Aeroportuária</Link>
                  </div>
                </li>
              </div>
              <div className="dropdown">
                <li className="nav-item">
                  <Link className="nav-link dropdown-toggle " id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" to="#">Acadêmico</Link>
                  <div className="dropdown-menu dropdown-menu-right bg-dark" aria-labelledby="dropdownMenuButton">
                    <Link className="dropdown-item text-light" to="#">Biblioteca</Link>
                    <Link className="dropdown-item text-light" to="#">Calendário Acadêmico</Link>
                    <Link className="dropdown-item text-light" to="#">Docentes</Link>
                    <Link className="dropdown-item text-light" to="#">Discentes</Link>
                  </div>
                </li>
              </div>
            </ul>
          </div>
        </div>
    </nav>
    )
  };
  
  export default NavBar; 