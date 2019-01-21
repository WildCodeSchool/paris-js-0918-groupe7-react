// Import de base
import React from 'react';

// Import css
import './Header.css';

// Import Material UI
import { Grid } from '@material-ui/core';

// Import du logo Exton depuis dossiers images
import logo_Exton_consulting from '../../images/Logo_Exton_consulting.png';
import logo_Exton_AAA from '../../images/logo_Exton_AAA_2.png';


// Déclaration de la fonction stateless HEADER
const Header = (props) => {
        return(
                <Grid container className="header-container">
                    <Grid className="container-logo-exton" item xs={3}>
                        <img className="logo-exton" src={logo_Exton_consulting} alt='logo Exton'/>
                    </Grid>
                    <Grid className="container-logo-AAA" item xs={3}>
                        <img className="logo-AAA" src={logo_Exton_AAA} alt='logo Exton AAA'/>
                    </Grid>
                </Grid>
        )};
export default Header;
