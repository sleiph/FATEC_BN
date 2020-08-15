import React from 'react';
import { Link } from 'react-router-dom';

import NavBar from '../../components/navbar/index';
import SocialMedia from '../../components/social-media/index';

import '../../styles/bootstrap.css';
import '../../styles/global.css';



export default function Home(){
    return(
      <div className="App">

      <NavBar />

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
                <SocialMedia />
              </address>
          </div>
        </div>
      <footer id="main-footer" className="py-5 bg-black">
        <div className="container">
          <img src="" alt="Centro Paula Souza"/>
          <p className="m-0 text-center text-white">Copyright &copy; Fatec Guarulhos 2020</p>
        </div>
      </footer>
      </div>
    </div>
    );
}