import React from 'react';
import PDFReader from 'react-typescript-pdf-reader';

import cpsLogo from './assets/images/cps-logo.png';
import log from './assets/images/courses/log.jpg';
import ads from './assets/images/courses/ads.jpg';
import comExt from './assets/images/courses/com-ext.jpg';
import ind from './assets/images/courses/ind.jpg';

function App() {
  return (
    
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container">
          <h1 className="text-white">FATEC</h1>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#">Início</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Acadêmico</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Cursos</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

  
      <header id="main-header" className="bg-primary py-5 mb-5">
        <div className="container h-100">
          <div className="row">
            <div className="col-lg-12">
              <h1 id="main-text" className="display-4 text-white mt-5 mb-2"><strong>Bem vindo a Fatec Guarulhos!</strong></h1>
              <p className="lead mb-5 text-white">Ensino superior gratuito e de qualidade.</p>
            </div>
          </div>
        </div>
      </header>

  
      <div className="container">
        <div className="row">
          <div className="col-md-8 mb-5">
            <h2>Sobre as FATECS</h2>
              <hr/>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A deserunt neque tempore recusandae animi soluta quasi? Asperiores rem dolore eaque vel, porro, soluta unde debitis aliquam laboriosam. Repellat explicabo, maiores!</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis optio neque consectetur consequatur magni in nisi, natus beatae quidem quam odit commodi ducimus totam eum, alias, adipisci nesciunt voluptate. Voluptatum.</p>
                <a className="btn btn-primary btn-lg" href="#">Saber mais! &raquo;</a>
          </div>
          <div className="col-md-4 mb-5">
            <h2>Contatos</h2>
              <hr/>
              <address>
                <strong>Endereço</strong>
                <br/>R. Cristóbal Cláudio Elilo, 88
                <br/>Parque Cecap, Guarulhos
                <br/>
              </address>
              <address>
                <strong>Telefones</strong>
                <br/>
                <abbr title="Phone">(11) 2229-0392 / 2229-0393</abbr>
                <br/>
                <br/>
                <strong>Emails</strong>
                <br/>
                <abbr title="Email">Diretoria:  </abbr>
                <a href="mailto:f167dir@cps.sp.gov.br">f167dir@cps.sp.gov.br</a>
                <br/>
                <abbr title="Email">Administrativo:  </abbr>
                <a href="mailto:f167adm@cps.sp.gov.br">f167adm@cps.sp.gov.br</a>
                <br/>
                <abbr title="Email">Acadêmico:  </abbr>
                <a href="mailto:f167acad@cps.sp.gov.br">f167acad@cps.sp.gov.br</a>
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
                  <a href="" className="btn btn-primary">Projeto Pedagógico Logística</a>
                  <a href="" className="btn btn-primary">Projeto Pedagógico Logística Aeroportuária</a>
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
                  <a href="" className="btn btn-primary">Projeto Pedagógico</a>
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
                  <a href="" className="btn btn-primary">Projeto Pedagógico</a>
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
                  <a href="" className="btn btn-primary">Projeto Pedagógico</a>
                </div>
              </div>
            </div>
            
        </div>
      </div>
  
      <footer id="main-footer" className="py-5 bg-dark">
        <div className="container">
          <img src={cpsLogo} alt="Centro Paula Souza"/>
          <p className="m-0 text-center text-black">Copyright &copy; Fatec Guarulhos 2020</p>
        </div>
      </footer>
    </div>
    
  );
}

export default App;
