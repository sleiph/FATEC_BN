import React from 'react';
import SocialMedia from '../social-media/index'

import '../../styles/bootstrap.css';
import '../../styles/global.css';
import '../../components/footer/styles.css'

import logoCPS from '../../images/cps-logo.png';

export default function Footer() {
    return (
        <footer id="main-footer" className="py-5 bg-dark">
            <div className="container">
                <SocialMedia />
                <img src={logoCPS} alt="Centro Paula Souza"/>
                <p className="m-0 text-center text-white">Copyright &copy; FATEC Guarulhos 2020</p>
            </div>
        </footer>
    )
};