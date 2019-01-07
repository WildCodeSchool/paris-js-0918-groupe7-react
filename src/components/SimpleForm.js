import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

import "./SimpleForm.css"

import Button from "@material-ui/core/Button";
import Axios from 'axios';

const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'Invalid email address'
    : undefined

  const renderField = ({
    input,
    label,
    type,
    meta: { touched, error, warning }
  }) => (
    <div>
      <label>{label}</label>
      <div>
        <input {...input} placeholder={label} type={type} className="widthInput"/>
        {touched &&
          ((error && <span>{error}</span>) ||
            (warning && <span>{warning}</span>))}
      </div>
    </div>
  )


const age_range = [
  {
    value: '-30',
    label: '-30',
  },
  {
    value: '30-39',
    label: '30-39',
  },
  {
    value: '40-49',
    label: '40-49',
  },
  {
    value: '50-59',
    label: '50-59',
  },
  {
    value: '60+',
    label: '60+',
  },
];

const business_focus = [
  {
    value: 'Corporate ans Investissement Banking',
    label: 'Corporate ans Investissement Banking',
  },
  {
    value: 'Fintech and start-up',
    label: 'Fintech and start-up',
  },
  {
    value: 'Insurance',
    label: 'Insurance',
  },
  {
    value: 'Private Banking',
    label: 'Private Banking',
  },
  {
    value: 'Retail Banking',
    label: 'Retail Banking',
  },
  {
    value: 'Specialized Financial Services',
    label: 'Specialized Financial Services',
  },
];

const seniority = [
  {
    value: '-5',
    label: '-5',
  },
  {
    value: '5-9',
    label: '5-9',
  },
  {
    value: '10-14',
    label: '10-14',
  },
  {
    value: '15-19',
    label: '15-19',
  },
  {
    value: '20+',
    label: '20+',
  },
];


class SimpleForm extends Component {

state = {
  agencies: null,
  companies: null,
  poles: null
}

componentDidMount(){
  let urlA = "http://localhost:3002/agencies"
  let urlC = "http://localhost:3002/companies"
  let urlP = "http://localhost:3002/poles"
  Axios.get(urlA)
  .then(res => this.setState({agencies: res.data}))
  Axios.get(urlC)
  .then(res => this.setState({companies: res.data}))
  Axios.get(urlP)
  .then(res => this.setState({poles: res.data}))
}

  render(){
    if(this.state.agencies === null || this.state.companies === null || this.state.poles === null)
      return ("loading.....")
  // console.log("agencies", this.state.agencies)
  // console.log("comp", this.state.companies)
  // console.log("poles", this.state.poles)
    const { handleSubmit, pristine, submitting } = this.props;
  return (
    <form style={{
      textAlign: "left",
      justifyContent: "center",
      verticalAlign: "middle",
      color: "black",
      margin: "5%",
      fontFamily: "Raleway",
      fontSize: "1em",
      backgroundColor:"white",
      borderRadius:"10%",
      padding:"10%",
    }}
     onSubmit={handleSubmit}>
      <div>
        <h1>Create your account</h1>
        <label>Gender</label>
        <div>
          <label>
            <Field name="gender" component="input" type="radio" value="male" className="genderRadio" />
            {' '}
            Male
          </label>
          <label>
            <Field name="gender" component="input" type="radio" value="female" className="genderRadio" />
            {' '}
            Female
          </label>
        </div>
      </div>

      <div>
        <label>Email</label>
        <div>
          <Field
            placeholder="Email"
            name="email"
            type="email"
            validate={email}
            component={renderField}
          />
        </div>
      </div>

      <div>
        <label>Password</label>
        <div>
          <Field className="widthInput"
            name="password"
            component="input"
            type="password"
            placeholder="Password"
          />
        </div>
      </div>

      <div>
      <label>Age range</label>
        <div>
          <Field name="age_range" component="select" className="widthInput">
            <option />
            {age_range.map((e,i) =>
              <option key={i}>{e.value}</option>
            )}
          </Field>
        </div>
      </div>

      <div>
        <label>Company</label>
        <div>
          <Field name="company" component="select" className="widthInput">
            <option />
            {this.state.companies.map((e, i) =>
              <option key={i}>{e.name}</option>
            )}
          </Field>
        </div>
      </div>

      <div>
        <label>Agency</label>
        <div>
          <Field name="agency" component="select" className="widthInput">
            <option />
            {this.state.agencies.map((e, i) =>
              <option key={i}>{e.name}</option>
            )}
          </Field>
        </div>
      </div>

      <div>
        <label>Department</label>
        <div>
          <Field name="department" component="select" className="widthInput">
            <option />
            {this.state.poles.map((e, i) =>
              <option key={i}>{e.name}</option>
            )}
          </Field>
        </div>
      </div>


      <div>
        <label>Business focus</label>
        <div>
          <Field name="business_focus" component="select" className="widthInput">
            <option />
            {business_focus.map((e, i) =>
              <option key={i}>{e.value}</option>
            )}
          </Field>
        </div>
      </div>
      

      <div>
        <label>Seniority</label>
        <div>
          <Field name="seniority" component="select" className="widthInput">
            <option />
            {seniority.map((e, i) =>
              <option key={i}>{e.value}</option>
            )}
          </Field>
        </div>
      </div>




      <div>
        <Button type="submit" disabled={pristine || submitting}
                className="BtnSend"
                style={{
                  backgroundColor: "rgb(59, 84, 125)",
                  color: "white",
                  fontSize: "1em",
                  fontFamily: "Raleway",
                  borderRadius: "5%",
                  padding:"2% 4%",
                  margin:"30px 0 0 0"
                }}
              >Submit
        </Button>
      </div>
    </form>
  );
}
};

export default reduxForm({
  form: 'simple', // a unique identifier for this form
})(SimpleForm);
