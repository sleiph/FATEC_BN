import React from 'react';

import '../../styles/bootstrap.css';
import '../../styles/global.css';
import logoCPS from '../../images/cps-logo.png';

export default function Footer() {
    return (
        <div className="footer">
            <footer id="main-footer" className="py-5 bg-black">
                <div className="container">
                    <img src={logoCPS} className="logoCPS" alt="Centro Paula Souza"/>
                    <p className="m-0 text-center text-black">Copyright &copy; Fatec Guarulhos 2020</p>
                </div>
            </footer>
        </div>
    )
};