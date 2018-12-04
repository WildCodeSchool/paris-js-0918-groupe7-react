// Import de base
import React from 'react';

// Import css
import './Header.css';

// Import du logo Exton depuis dossiers images
import logo_exton from '../images/logo_exton.png';

// Déclaration de la fonction stateless HEADER
const Header = (props) => {
        return(
        <div className="Header">
            <img className="logo" src={logo_exton} alt='logo Exton'/>
        </div>
        )};

export default Header;
