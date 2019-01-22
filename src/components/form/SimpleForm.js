import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Redirect } from 'react-router-dom';

import './SimpleForm.css';

import axios from 'axios';

import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const required = value => (value || typeof value === 'number' ? undefined : 'Required')

const email = value => (value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
  ? 'Invalid email address'
  : undefined);

export const minLength = (min) => value =>
  value && value.length < min ? `Must be ${min} characters or more` : undefined
export const minLength6 = minLength(6)

const renderField = ({
  input,
  label,
  type,
  meta: { touched, error, warning }
}) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} placeholder={label} type={type} className="widthInput" />
      {touched
          && ((error && <span className="errorMessage">{error}</span>)
            || (warning && <span>{warning}</span>))}
    </div>
  </div>
);

const age_range = [
  {
    value: "-30",
    label: "-30"
  },
  {
    value: "30-39",
    label: "30-39"
  },
  {
    value: "40-49",
    label: "40-49"
  },
  {
    value: "50-59",
    label: "50-59"
  },
  {
    value: "60+",
    label: "60+"
  }
];

const business_focus = [
  {
    value: "Corporate and Investment banking",
    label: "Corporate and Investment banking"
  },
  {
    value: "Fintech and start-up",
    label: "Fintech and start-up"
  },
  {
    value: "Insurance",
    label: "Insurance"
  },
  {
    value: "Private Banking",
    label: "Private Banking"
  },
  {
    value: "Retail Banking",
    label: "Retail Banking"
  },
  {
    value: "Specialized Financial Services",
    label: "Specialized Financial Services"
  }
];

const seniority = [
  {
    value: "-5",
    label: "-5"
  },
  {
    value: "5-9",
    label: "5-9"
  },
  {
    value: "10-14",
    label: "10-14"
  },
  {
    value: "15-19",
    label: "15-19"
  },
  {
    value: "20+",
    label: "20+"
  }
];

class SimpleForm extends Component {

  state = {
    agencies: [],
    companies: null,
    company: null,
    poles: null,
    redirect: false
  };

  componentDidMount() {
    let urlC = "http://localhost:3002/companies/isactive";
    let urlP = "http://localhost:3002/poles";
    
    axios.get(urlC).then(res => this.setState({ companies: res.data }));
    axios.get(urlP).then(res => this.setState({ poles: res.data }));
  }

  handleClick = e => {
    this.setState({
      redirect: true
    });
  };

  handleChange = e => {
    axios
    .get(`http://localhost:3002/agencies/companyId/${e.target.value}`)
    .then(res => this.setState({agencies: res.data}));
  };

  render() {
    console.log("agencies", this.state.agencies)
    console.log("comp", this.state.companies)
    console.log("poles", this.state.poles)
    if (
      this.state.companies === null ||
      this.state.poles === null
    )
      return "loading.....";

    if (this.state.redirect) {
      return <Redirect to="/login" />;
    }
    const { handleSubmit, pristine, submitting } = this.props;

    return (
      <form
        style={{
          textAlign:"center",
          justifyContent: "center",
          verticalAlign: "middle",
          color: "black",
          marginTop: "5%",
          marginLeft:"17%",
          marginRight :"17%",
          marginBottom: "10%",
          fontFamily: "Raleway",
          backgroundColor: "white",
          borderRadius: "10px",
          padding: "1%",
          alignItems: 'middle',
        }}
      >
        <div>
          <h1
            style={{
              fontFamily: "Raleway",
              fontSize: "calc(0.7vw + 0.7vh + 0.7vmin)"
            }}>Create your account</h1>
          {/* <label className="title-input">Gender</label> */}
          <div>
            <label>
              <Field
                name="gender"
                component="input"
                type="radio"
                value="male"
                className="genderRadio"
                style={{
                  marginTop: "3%",
                }}
                validate={[required]}
              />{" "}
              Male
            </label>
            <label>
              <Field
                name="gender"
                component="input"
                type="radio"
                value="female"
                className="genderRadio"
                validate={[required]}
              />{" "}
              Female
            </label>
          </div>
        </div>

        <div>
          <label className="title-input">Email</label>
          <div>
            <Field
              name="email"
              type="email"
              validate={[required, email]}
              component={renderField}
            />
          </div>
        </div>

        <div>
          <label className="title-input">Password</label>
          <div>
            <Field
              className="widthInput"
              name="password"
              component="input"
              type="password"
              validate={[required, minLength6]}
            />
          </div>
        </div>

        <div>
          <label className="title-input">Age range</label>
          <div>
            <Field
              name="age_range"
              component="select"
              className="widthInput"
              validate={[required]}>
            >
              <option />
              {age_range.map((e, i) => (
                <option key={i}>{e.value}</option>
              ))}
            </Field>
          </div>
        </div>

        <div>
          <label className="title-input">Company</label>
          <div>
            <Field
              name="company"
              onChange={this.handleChange}
              component="select"
              className="widthInput"
              validate={[required]}
            >
              <option />
              {this.state.companies.map((e, i) => (
                <option key={i} value={e.id}>
                  {e.name}
                </option>
              ))}
            </Field>
          </div>
        </div>

        <div>
          <label className="title-input">Agency</label>
          <div>
            <Field
              name="agency"
              component="select"
              className="widthInput"
              validate={[required]}
            >
              <option />
              {this.state.agencies.map((e, i) => (
                <option key={i} value={e.id}>
                  {e.name}
                </option>
              ))}
            </Field>
          </div>
        </div>

        <div>
          <label className="title-input">Department</label>
          <div>
            <Field
              name="department"
              component="select"
              className="widthInput"
              validate={[required]}
            >
              <option />
              {this.state.poles.map((e, i) => (
                <option key={i} value={e.id}>
                  {e.name}
                </option>
              ))}
            </Field>
          </div>
        </div>

        <div>
          <label className="title-input">Business focus</label>
          <div>
            <Field
              name="business_focus"
              component="select"
              className="widthInput"
              validate={[required]}
            >
              <option />
              {business_focus.map((e, i) => (
                <option key={i}>{e.value}</option>
              ))}
            </Field>
          </div>
        </div>

        <div>
          <label className="title-input">Seniority</label>
          <div>
            <Field
              name="seniority"
              component="select"
              className="widthInput"
              validate={[required]}
            >
              <option />
              {seniority.map((e, i) => (
                <option key={i}>{e.value}</option>
              ))}
            </Field>
          </div>
        </div>

        <div>
          <Button
            onClick={handleSubmit}
            type="submit"
            disabled={pristine || submitting}
            className="BtnSend"
            value="Login"
            style={{
              backgroundColor: "rgb(45,52,90)",
              color: "white",
              fontFamily: "Raleway",
              borderRadius: "15px",
              margin:"5% 2% 10% 0"
            }}
          >
            <Typography
              gutterBottom
              style={{
                textAlign: "center",
                alignItems:"center",
                color: "white",
                fontSize: "calc(0.4vw + 0.4vh + 0.6vmin)",
                padding: "8px 30px",
                fontFamily: "Raleway",
              }}
            >
              Sign Up
            </Typography>
          </Button>
        </div>

        <Typography
          gutterBottom
          style={{
            fontFamily: "Raleway, sans-serif",
            fontSize: "calc(0.4vw + 0.4vh + 0.5vmin)",
          }}
        >
          Already have an account ?
        </Typography>
        <Button
          className="BtnSend"
          type="submit"
          value="Login"
          onClick={this.handleClick}
          style={{
            backgroundColor: "rgb(186, 28, 58)",
            color: "white",
            fontFamily: "Raleway",
            borderRadius: "15px",
            margin:"2% 2% 10% 0"
          }}
        >
          <Typography
            gutterBottom
            style={{
              textAlign: "center",
              alignItems:"center",
              color: "white",
              fontSize: "calc(0.4vw + 0.4vh + 0.6vmin)",
              padding: "8px 30px",
              fontFamily: "Raleway",
            }}
          >
            Login
          </Typography>
        </Button>
      </form>
    );
  }
}

export default reduxForm({
  form: "simple" // a unique identifier for this form
})(SimpleForm);
