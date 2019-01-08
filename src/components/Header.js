// Import de base
import React from 'react';

// Import css
import './Header.css';

// Import Material UI
import { Grid } from '@material-ui/core';

// Import du logo Exton depuis dossiers images
import logo_Exton_consulting from '../images/Logo_Exton_consulting.png';
import logo_Exton_AAA from '../images/logo_exton.png';


// Déclaration de la fonction stateless HEADER
const Header = (props) => {
        return(
                <Grid container justify="space-between">
                    <Grid  item xs={3} md={4} justify="flex-start" className="Header">
                        <img className="logo" src={logo_Exton_consulting} alt='logo Exton'/>
                    </Grid>
                    <Grid item xs={3} md={4} justify="flex-end">
                        <img className="logo" src={logo_Exton_AAA} alt='logo Exton AAA'/>
                    </Grid>
                </Grid>
        )};
export default Header;
