import React from 'react';
import CSS from 'csstype';
import { Link } from 'react-router-dom';

import NavBar from '../../components/navbar/index';
import SocialMedia from '../../components/social-media/index';
import Footer from '../../components/footer/index';

import '../../styles/bootstrap.css';
import '../../pages/page-landing/styles.css';

import slide1 from '../../images/fatec-main.jpg'


export default function Home(){
    return(
      <div className="App">

      <NavBar />

      <header>
      <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
      <ol className="carousel-indicators">
        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      </ol>
      <div className="carousel-inner" role="listbox">
        <img className="carousel-item active" src={slide1} />
          <div className="carousel-caption d-none d-md-block">
            <h3>BEM VINDO À FATEC GUARULHOS</h3>
            <p>This is a description for the first slide.</p>
          </div>
        
        <div className="carousel-item">
          <div className="carousel-caption d-none d-md-block">
            <h3>Second Slide</h3>
            <p>This is a description for the second slide.</p>
          </div>
        </div>
        
        <div className="carousel-item">
          <div className="carousel-caption d-none d-md-block">
            <h3>Third Slide</h3>
            <p>This is a description for the third slide.</p>
          </div>
        </div>
      </div>
      <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  </header>

  
  <div className="container">
    <h1 className="my-4">Destaques</h1>
    <div className="row">
      <div className="col-lg-4 mb-4">
        <div className="card h-100">
          <h4 className="card-header">Destaque 1</h4>
          <div className="card-body">
            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.</p>
          </div>
          <div className="card-footer">
            <a href="#" className="btn btn-primary">Saiba mais</a>
          </div>
        </div>
      </div>
      <div className="col-lg-4 mb-4">
        <div className="card h-100">
          <h4 className="card-header">Destaque 2</h4>
          <div className="card-body">
            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis ipsam eos, nam perspiciatis natus commodi similique totam consectetur praesentium molestiae atque exercitationem ut consequuntur, sed eveniet, magni nostrum sint fuga.</p>
          </div>
          <div className="card-footer">
            <a href="#" className="btn btn-primary">Saiba mais</a>
          </div>
        </div>
      </div>
      <div className="col-lg-4 mb-4">
        <div className="card h-100">
          <h4 className="card-header">Destaque 3</h4>
          <div className="card-body">
            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.</p>
          </div>
          <div className="card-footer">
            <a href="#" className="btn btn-primary">Saiba mais</a>
          </div>
        </div>
      </div>
    </div>
    
    <h2>Conteúdos Principais</h2>

    <div className="row">
      <div className="col-lg-4 col-sm-6 portfolio-item">
        <div className="card h-100">
          <a href="#"><img className="card-img-top" src="http://placehold.it/700x400" alt=""/></a>
          <div className="card-body">
            <h4 className="card-title">
              <a href="#">Análise e Desenvolvimento de Sistemas</a>
            </h4>
            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur eum quasi sapiente nesciunt? Voluptatibus sit, repellat sequi itaque deserunt, dolores in, nesciunt, illum tempora ex quae? Nihil, dolorem!</p>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-sm-6 portfolio-item">
        <div className="card h-100">
          <a href="#"><img className="card-img-top" src="http://placehold.it/700x400" alt=""/></a>
          <div className="card-body">
            <h4 className="card-title">
              <a href="#">Logística</a>
            </h4>
            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae.</p>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-sm-6 portfolio-item">
        <div className="card h-100">
          <a href="#"><img className="card-img-top" src="http://placehold.it/700x400" alt=""/></a>
          <div className="card-body">
            <h4 className="card-title">
              <a href="#">Comércio Exterior</a>
            </h4>
            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos quisquam, error quod sed cumque, odio distinctio velit nostrum temporibus necessitatibus et facere atque iure perspiciatis mollitia recusandae vero vel quam!</p>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-sm-6 portfolio-item">
        <div className="card h-100">
          <a href="#"><img className="card-img-top" src="http://placehold.it/700x400" alt=""/></a>
          <div className="card-body">
            <h4 className="card-title">
              <a href="#">Logística Aeroportuária</a>
            </h4>
            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae.</p>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-sm-6 portfolio-item">
        <div className="card h-100">
          <a href="#"><img className="card-img-top" src="http://placehold.it/700x400" alt=""/></a>
          <div className="card-body">
            <h4 className="card-title">
              <a href="#">Corpo Docente</a>
            </h4>
            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae.</p>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-sm-6 portfolio-item">
        <div className="card h-100">
          <a href="#"><img className="card-img-top" src="http://placehold.it/700x400" alt=""/></a>
          <div className="card-body">
            <h4 className="card-title">
              <a href="#">Gestão da Produção Industrial</a>
            </h4>
            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque earum nostrum suscipit ducimus nihil provident, perferendis rem illo, voluptate atque, sit eius in voluptates, nemo repellat fugiat excepturi! Nemo, esse.</p>
          </div>
        </div>
      </div>
    </div>

    <hr/>

    
    <div className="row mb-4">
      <div className="col-md-8">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias, expedita, saepe, vero rerum deleniti beatae veniam harum neque nemo praesentium cum alias asperiores commodi.</p>
      </div>
      <div className="col-md-4">
        <a className="btn btn-lg btn-secondary btn-block" href="#">Ir para o topo</a>
      </div>
    </div>
    </div>

      <Footer />

    </div>

    );
}