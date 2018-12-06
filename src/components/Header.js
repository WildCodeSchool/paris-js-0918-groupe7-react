// Import de base
import React from 'react';
import Grid from '@material-ui/core/Grid';

// Import css
import './Header.css';

// Import du logo Exton depuis dossiers images
import logo_exton from '../images/logo_exton.png';

// Déclaration de la fonction stateless HEADER
const Header = (props) => {
        return(
        <div className="Header">
            <Grid container>
                <Grid item xs={12} sm={12}>
                    <img className="logo" src={logo_exton} alt='logo Exton'/>
                </Grid>
            </Grid>
        </div>
)};

export default Header;
