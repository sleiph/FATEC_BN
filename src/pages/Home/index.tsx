import React from 'react';
import {Link} from 'react-router-dom';

import cpsLogo from '../../assets/images/cps-logo.png';
import log from '../../assets/images/courses/log.jpg';
import ads from '../../assets/images/courses/ads.jpg';
import comExt from '../../assets/images/courses/com-ext.jpg';
import ind from '../../assets/images/courses/ind.jpg';
import fb from '../../assets/images/social-media/facebook.svg';
import instagram from '../../assets/images/social-media/instagram.svg';
import twitter from '../../assets/images/social-media/twitter.svg';
import linkedin from '../../assets/images/social-media/linkedin.svg';
import './style.css';

let ppLog = require('../../assets/pp/log.pdf');
let ppLogAp = require('../../assets/pp/log-ap.pdf');
let ppAds = require('../../assets/pp/ads.pdf');
let ppComExt = require('../../assets/pp/com-ext.pdf');
let ppInd = require('../../assets/pp/ind.pdf');

export default function Home(){
    return(
        <div className="App">
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
                    <Link className="dropdown-item text-light" to="#">CST em Análise e Desenvolvimento de Sistemas</Link>
                    <Link className="dropdown-item text-light" to="#">CST em Comércio Exterior</Link>
                    <Link className="dropdown-item text-light" to="#">CST em Gestão da Produção Industrial</Link>
                    <Link className="dropdown-item text-light" to="#">CST em Logística</Link>
                    <Link className="dropdown-item text-light" to="#">CST em Logística Aeroportuária</Link>
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

  
      <header id="main-header" className="bg-primary py-5 mb-5">
        <div className="container h-100">
          <div className="row">
            <div className="col-lg-12">
              <h1 id="main-text" className="display-4 text-white mt-5 mb-2"><strong>BEM-VINDO À FATEC GUARULHOS</strong></h1>
              <p className="lead mb-5 text-white">Ensino superior gratuito e de qualidade.</p>
            </div>
          </div>
        </div>
      </header>

  
      <div className="container">
        <div className="row">
          <div className="col-md-12 mb-5">
            <h2>Sobre as FATECS</h2>
              <hr/>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A deserunt neque tempore recusandae animi soluta quasi? Asperiores rem dolore eaque vel, porro, soluta unde debitis aliquam laboriosam. Repellat explicabo, maiores!</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis optio neque consectetur consequatur magni in nisi, natus beatae quidem quam odit commodi ducimus totam eum, alias, adipisci nesciunt voluptate. Voluptatum.</p>
                <Link className="btn btn-primary btn-lg" to="#">Saber mais! &raquo;</Link>
          </div>
          <div className="col-md-8 mb-5">
            <h2>A unidade de Guarulhos</h2>
              <hr/>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A deserunt neque tempore recusandae animi soluta quasi? Asperiores rem dolore eaque vel, porro, soluta unde debitis aliquam laboriosam. Repellat explicabo, maiores!</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis optio neque consectetur consequatur magni in nisi, natus beatae quidem quam odit commodi ducimus totam eum, alias, adipisci nesciunt voluptate. Voluptatum.</p>
                <address>
                  <strong>Endereço</strong>
                  <br/>R. Cristóbal Cláudio Elilo, 88 - Parque Cecap, Guarulhos
                </address>
          </div>
          <div className="col-md-4 mb-5">
            <h2>Contatos</h2>
              <hr/>
              <address>
                <strong>Telefones</strong>
                <br/>
                <p title="Phone">(11) 2229-0392 / 2229-0393</p>
                <strong>Emails</strong>
                <p title="Email">Diretoria:  <a href="mailto:f167dir@cps.sp.gov.br">f167dir@cps.sp.gov.br</a></p>
                <p title="Email">Administrativo:  <a href="mailto:f167adm@cps.sp.gov.br">f167adm@cps.sp.gov.br</a></p>
                <p title="Email">Acadêmico:  <a href="mailto:f167acad@cps.sp.gov.br">f167acad@cps.sp.gov.br</a></p>
                <strong>Redes Sociais</strong>
                <br/>
                <Link to=""><img src={fb} alt="Facebook"/></Link>
                <Link to=""><img src={instagram} alt="Instagram"/></Link>
                <Link to=""><img src={twitter} alt="Twitter"/></Link>
                <Link to=""><img src={linkedin} alt="Linkedin"/></Link>
              </address>

          </div>
        </div>
        <div className="row">
          <div className="col-md-3 mb-5">
            <div className="card h-100">
              <img className="card-img-top" src={log} alt=""/>
                <div className="card-body">
                  <h4 className="card-title">Logística e Logística Aeroportuária</h4>
                  <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque sequi doloribus.</p>
                </div>
                <div className="card-footer">
                  <a href={ppLog} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Projeto Pedagógico Logística</a>
                  <a href={ppLogAp} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Projeto Pedagógico Logística Aeroportuária</a>
                </div>
            </div>
          </div>
          <div className="col-md-3 mb-5">
            <div className="card h-100">
              <img className="card-img-top" src={ads} alt=""/>
                <div className="card-body">
                  <h4 className="card-title">Análise e Desenvolvimento de Sistemas</h4>
                  <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque sequi doloribus totam ut praesentium aut.</p>
                </div>
                <div className="card-footer">
                  <a href={ppAds} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Projeto Pedagógico</a>
                </div>
            </div>
          </div>
          <div className="col-md-3 mb-5">
            <div className="card h-100">
              <img className="card-img-top" src={comExt} alt=""/>
                <div className="card-body">
                  <h4 className="card-title">Comércio Exterior</h4>
                  <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque sequi doloribus totam ut praesentium aut.</p>
                </div>
                <div className="card-footer">
                  <a href={ppComExt} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Projeto Pedagógico</a>
                </div>
            </div>
          </div>
            <div className="col-md-3 mb-5">
              <div className="card h-100">
               <img className="card-img-top" src={ind} alt=""/>
                <div className="card-body">
                  <h4 className="card-title">Gestão da Produção Industrial</h4>
                  <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.</p>
                </div>
                <div className="card-footer">
                  <a href={ppInd} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Projeto Pedagógico</a>
                </div>
              </div>
            </div>
            
        </div>
      </div>
  
      <footer id="main-footer" className="py-5 bg-black">
        <div className="container">
          <img src={cpsLogo} alt="Centro Paula Souza"/>
          <p className="m-0 text-center text-white">Copyright &copy; Fatec Guarulhos 2020</p>
        </div>
      </footer>
      
    </div>
    );
}