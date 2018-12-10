// Import de base
import React, { Component } from 'react';

// Import des composants du formulaire
import EmailField from './EmailField';
import PasswordField from './PasswordField';
import AgeRange from './AgeRange';
import Department from './Department';
import BusinessFocus from './BusinessFocus';
import Seniority from './Seniority';
import Gender from './Gender';
import Company from './Company';

// Import Material UI
import { Grid } from '@material-ui/core';



// Déclaration de la fonction stateless Form
class Form extends Component {
    render(){
    return (
    // Déclaration du formulaire
    <Grid>
        <Grid item xs={12}>
            <Gender />
        </Grid>
        <Grid item xs={12}>
            <EmailField/>
        </Grid>
        <Grid item xs={12}>
            <PasswordField />
        </Grid>
            <Grid item xs={12}>
        <AgeRange/>
            </Grid>
        <Grid item xs={12}>
            <Company />
            </Grid>
        <Grid item xs={12}>
            <Department />
            </Grid>
        <Grid item xs={12}>
            <BusinessFocus />
            </Grid>
        <Grid item xs={12}>
            <Seniority />
        </Grid>
    </Grid>
  );
 };
};

export default Form;
