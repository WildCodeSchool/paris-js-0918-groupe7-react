import React, { Component } from "react";
import { Typography } from "@material-ui/core";
import axios from "axios";
import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import { Redirect } from "react-router-dom";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Input from "@material-ui/core/Input";
import Grid from "@material-ui/core/Grid";

import "./UpdateCompanies.css";

const styles = theme => ({
  companyContainer: {
    width: 300
  }
});

class UpdateCompaniesCard extends Component {
  state = {
    data: [],
    companies: [],
    company: "",
    agencies: [],
    agency: "",
    token: localStorage.getItem("token"),
    adminHomePage: false,
    deleteStatus: 0
  };

  componentDidMount = () => {
    axios({
      method: "GET",
      url: (`https://exton-back.herokuapp.com/companies/isactive`),
      headers: {
        authorization: `Bearer ${this.state.token}`
      }
    }).then(res => this.setState({ companies: res.data }));
  };

  handleChangeCompany = prop => event => {
    this.setState({ [prop]: event.target.value }, () => {
      console.log("testId", event.target.value);
      // Recherche d'agences
      axios({
        method: "GET",
        url: (`https://exton-back.herokuapp.com/agencies/companyId/${this.state.company}`),
        headers: {
          authorization: `Bearer ${this.state.token}`
        }
      }).then(res => this.setState({ data: res.data }));
    });
  };

  handleClick = e => {
    this.setState({
      adminHomePage: true
    });
  };

  handleDelete = () => {
    axios({
      method: "PUT",
      url: (`https://exton-back.herokuapp.com/companies/${this.state.company}`),
      headers: {
        authorization: `Bearer ${this.state.token}`
      },
      data: {
        is_active: 0
      }
    }).then(res => {
      // Desactivation de l'agence ou des  agences?
      if (res.status === 200) {
        axios({
          method: "PUT",
          url: (`https://exton-back.herokuapp.com/agencies/companyId/${this.state.company}`),
          headers: {
            authorization: `Bearer ${this.state.token}`
          },
          data: {
            is_active: 0
          }
        }).then(res => {
          if (res.status === 200) {
            // Désactivation des emails extensions
            axios({
              method: "DELETE",
              url: (`https://exton-back.herokuapp.com/email_extensions/companyId/${this.state.company}`),
              headers: {
                authorization: `Bearer ${this.state.token}`
              }
            })
              .then(res => this.setState({ deleteStatus: res.status }))
              .then(alert(`Company with Id ${this.state.company} deleted`));
          }
        });
      }
    });
  };

  handleAddCompany = e => {
    e.preventDefault();
    const url = (`https://exton-back.herokuapp.com/companies`);
    const config = {
      name: this.state.addCompany
    };
    const headers = {
      authorization: `Bearer ${this.state.token}`
    };

    axios
      .post(url, config)
      .then(res => this.setState({ data: res.data }))
      .then(alert(`Company ${this.state.addCompany} added`));
  };

  handleAddEmailExtension = e => {
    e.preventDefault();
    const url = (`https://exton-back.herokuapp.com/email_extensions`);
    const config = {
      email_extension: this.state.addEmailExtension,
      companyId: this.state.company
    };
    const headers = {
      authorization: `Bearer ${this.state.token}`
    };
    axios
      .post(url, config)
      .then(res => this.setState({ data: res.data }))
      .then(alert(`Email extension ${this.state.addEmailExtension} added`));
  };

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    if (this.state.adminHomePage) return <Redirect to="/admin/Home" />;

    const { classes } = this.props;
    console.log("the patriots", this.state);

    if (this.state.companies === null) return <p>loading</p>;
    return (
      <div>
        <Card
          className="card"
          style={{
            textAlign: "left",
            justifyContent: "center",
            verticalAlign: "middle",
            color: "black",
            margin: "5%",
            fontFamily: "Raleway",
            fontSize: "1em",
            backgroundColor: "white",
            borderRadius: "10%",
            padding: "10%"
          }}
        >
          <CardContent className="cardContent">
            <Button
              onClick={this.handleClick}
              variant="contained"
              className="but"
              size="large"
              style={{
                backgroundColor: "rgb(38, 56, 87)",
                color: "white",
                marginLeft: "auto",
                marginRight: "auto",
                display: "block",
                marginTop: "5%",
                fontSize: "1.3em",
                fontFamily: "Raleway"
              }}
            >
              Back
            </Button>

            <Typography
              className="thank"
              style={{
                textAlign: "center",
                justifyContent: "center",
                verticalAlign: "middle",
                color: "white",
                margin: "5% auto",
                fontFamily: "Raleway",
                fontSize: "2em"
              }}
              gutterBottom
            >
              {" "}
              Update Companies
            </Typography>
            <form>
              <Grid>
                <TextField
                  className={classes.poleContainer}
                  select
                  value={this.state.company}
                  onChange={this.handleChangeCompany("company")}
                  label="Companies"
                  helperText="Please select a company"
                  margin="normal"
                  variant="outlined"
                  style={{
                    marginTop: "1%"
                  }}
                >
                  {this.state.companies.map(option => (
                    <MenuItem key={option.id} value={option.id}>
                      {option.name}
                    </MenuItem>
                  ))}
                </TextField>
                <Button
                  className="ButtonSubmit"
                  onClick={this.handleDelete}
                  style={{ border: "solid" }}
                >
                  Delete Company
                </Button>
              </Grid>
            </form>

            <CardContent>
              <form onSubmit={this.handleAddCompany}>
                <Input
                  onChange={this.onChange}
                  name="addCompany"
                  style={{ width: "200px" }}
                  placeholder="Your company name here"
                />
                <Button
                  className="ButtonSubmit"
                  onClick={this.handleAddCompany}
                  style={{
                    border: "solid"
                  }}
                >
                  Add Company
                </Button>
              </form>
            </CardContent>

            <CardContent>
              <form onSubmit={this.handleAddEmailExtension}>
                <Input
                  onChange={this.onChange}
                  name="addEmailExtension"
                  placeholder="Exemple: @gmail.com"
                  style={{ width: "200px" }}
                />

                <Button
                  className="ButtonSubmit"
                  onClick={this.handleAddEmailExtension}
                  style={{
                    border: "solid"
                  }}
                >
                  Add Email Company
                </Button>
                <p>* Select a company before adding an email extension</p>
              </form>
            </CardContent>
          </CardContent>
        </Card>
      </div>
    );
  }
}

export default withStyles(styles)(UpdateCompaniesCard);
