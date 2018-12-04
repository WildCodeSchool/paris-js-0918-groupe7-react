// Import de base
import React, { Component } from 'react';

// Import des composants
import EmailField from './EmailField';
import PasswordField from './PasswordField';
import AgeRange from './AgeRange';
import Department from './Department';
import BusinessFocus from './BusinessFocus';
import Seniority from './Seniority';




// Déclaration de la fonction stateless Form
class Form extends Component {
    render(){
    return (
    // Déclaration du formulaire
    <form>
        <div>
            <label>Mrs</label>
            <input className="select_gender_male"
            name="Mrs"
            type="radio"
            />
            <label>Mr</label>
            <input className="select_gender_female"
            name="Mr"
            type="radio"
            />
        </div>

        <EmailField/>
        <PasswordField />
        <AgeRange/>
        <Department />
        <BusinessFocus />
        <Seniority />

        <div>
            <label>Company</label>
            <input className="select_company"
            name="company"
            type="text"
            placeholder="Company"
            />
        </div>
    </form>
  );
 };
};

export default Form;
