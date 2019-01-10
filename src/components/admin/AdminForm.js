// Import de base
import React, { Component } from 'react';

// Import des composants du formulaire
import AgenciesForm from "./AgenciesForm";
import CompaniesForm from "./CompaniesForm";
import EmailExtensionForm from "./Email_extensionsForm";
import PillarsForm from "./PillarsForm";
import PolesForm from "./PolesForm";
import QuestionsForm from "./QuestionsForm";
import SubPillarsForm from "./Sub_pillarsForm";
// import Form from "../form/Form";

// Import Material UI
import { Grid } from '@material-ui/core';



// Déclaration de la fonction stateless Form
class AdminForm extends Component {
    render(){
    return (
    // Déclaration du formulaire
    <Grid>
		<Grid item xs={12}>
			<h3>Companies</h3>
			<CompaniesForm />
		</Grid>
		<br />
        <Grid item xs={12}>
			<h3>Agencies</h3>
            <AgenciesForm />
        </Grid>
		<br />
        <Grid item xs={12}>
			<h3>Email Extensions</h3>
            <EmailExtensionForm />
        </Grid>
		<br />
        <Grid item xs={12}>
			<h3>Pillars</h3>
            <PillarsForm />
        </Grid>
		<br />
        <Grid item xs={12}>
			<h3>Poles</h3>
            <PolesForm />
        </Grid>
		<br />
        <Grid item xs={12}>
			<h3>Sub Pillars</h3>
            <SubPillarsForm />
        </Grid>
		<br />
        <Grid item xs={12}>
			<h3>Users</h3>
            <usersForm />
        </Grid>
		<br />
        <Grid item xs={12}>
			<h3>Questions</h3>
            <QuestionsForm />
        </Grid>
    </Grid>
  );
 };
};

export default AdminForm;
