import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';


export default function SocialMedia() {
    return (
        <div className="social-media">
          <div>
            <Link to=""><span className="fa fa-facebook"></span></Link>
          </div>
          <div>
            <Link to=""><span className="fa fa-twitter"></span></Link>
          </div>
          <div>
            <Link to=""><span className="fa fa-instagram"></span></Link>
          </div>
          <div>
            <Link to=""><span className="fa fa-whatsapp"></span></Link>
          </div>
          <div>
            <Link to=""><span className="fa fa-linkedin"></span></Link>
          </div>
        </div>
    )
};