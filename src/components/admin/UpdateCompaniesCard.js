import React, { Component } from "react";
import { Typography } from "@material-ui/core";
import axios from "axios";
import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import { Redirect } from "react-router-dom";
import Card from "@material-ui/core/Card";
import Input from "@material-ui/core/Input";
import Grid from "@material-ui/core/Grid";

import arrow from "../../images/left-arrow.png"


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

  getCompanies = () => {
    axios({
      method: "GET",
      url: "http://localhost:3002/companies/isactive",
      headers: {
        authorization: `Bearer ${this.state.token}`
      }
    }).then(res => this.setState({ companies: res.data }));
  };

  componentDidMount = () => {
    this.getCompanies();
  };

  handleChangeCompany = prop => event => {
    this.setState({ [prop]: event.target.value }, () => {
      console.log("testId", event.target.value);
      // Recherche d'agences
      axios({
        method: "GET",
        url: `http://localhost:3002/agencies/companyId/${this.state.company}`,
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

  handleDelete = event => {
    event.preventDefault();
    axios({
      method: "PUT",
      url: `http://localhost:3002/companies/${this.state.company}`,
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
          url: `http://localhost:3002/agencies/companyId/${this.state.company}`,
          headers: {
            authorization: `Bearer ${this.state.token}`
          },
          data: {
            is_active: 0
          }
        }).then(res => {
          if (res.status === 200) {
            // Désactivation des users de la companie
            axios({
              method: "PUT",
              url: `http://localhost:3002/users/companyId/${
                this.state.company
                }`,
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
                  url: `http://localhost:3002/email_extensions/companyId/${
                    this.state.company
                    }`,
                  headers: {
                    authorization: `Bearer ${this.state.token}`
                  }
                })
                  .then(res => this.setState({ deleteStatus: res.status }))
                  .then(alert(`Company with Id ${this.state.company} deleted`))
                  .then(this.getCompanies());
              }
            });
          }
        });
      }
    });
  };

  handleAddCompany = e => {
    // e.preventDefault();
    const url = `http://localhost:3002/companies/`;
    const config = {
      name: this.state.addCompany
    };
    // const headers = {
    //   authorization: `Bearer ${this.state.token}`
    // };

    axios
      .post(url, config)
      .then(res => this.setState({ data: res.data }))
      .then(alert(`Company ${this.state.addCompany} added`))
      .then(document.getElementById("companyInput").value="")
      .then(this.getCompanies());
  };

  handleAddEmailExtension = e => {
    // e.preventDefault();
    const url = `http://localhost:3002/email_extensions/`;
    const config = {
      email_extension: this.state.addEmailExtension,
      companyId: this.state.company
    };
    // const headers = {
    //   authorization: `Bearer ${this.state.token}`
    // };
    axios
      .post(url, config)
      .then(res => this.setState({ data: res.data }))
      .then(alert(`Email extension ${this.state.addEmailExtension} added`))
      .then(document.getElementById("emailInput").value="");
  };

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    if (this.state.adminHomePage) return <Redirect to="/admin" />;

    const { classes } = this.props;
    console.log("the patriots", this.state);

    if (this.state.companies === null) return <p>loading</p>;
    return (
      <div>
        <Card
          className="card"
          style={{
            width: "80%",
            maxHeight: "70%",
            alignContent: "center",
            alignItems: "center",
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: "5%",
            marginBottom: "auto",
            borderRadius: "10px",
          }}
        >
          <Button style={{ fontSize: "calc(0.4vw + 0.4vh + 0.6vmin)", padding: "2%" ,margin: "3% 0 0 3%"}}
            onClick={this.handleClick}>
            <img className="arrow" src={arrow} alt="back arrow"/>
              Back
          </Button>

              <Grid style={{ padding:"0 0 0 15%"}}>
            <form>
                <TextField 
                  className={classes.poleContainer}
                  select
                  value={this.state.company}
                  onChange={this.handleChangeCompany("company")}
                  label="Please select a company"
                  margin="normal"
                  style={{ fontSize: "calc(0.35vw + 0.35vh + 0.35vmin)", width: "50%"}}
                >
                  {this.state.companies.map(option => (
                    <MenuItem key={option.id} value={option.id}>
                      {option.name}
                    </MenuItem>
                  ))}
                </TextField>


                <Button
                className="BtnSend"
                value="Login"
                onClick={this.handleDelete}
                style={{
                  backgroundColor: "rgb(186, 28, 58)",
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
                    padding: "8px 32px",
                    fontFamily: "Raleway",
                  }}
                >
                  Delete Company
                </Typography>
              </Button>

            </form>


              <form onSubmit={this.handleAddCompany}>
                <Input
                  onChange={this.onChange}
                  name="addCompany"
                  id="companyInput"
                  style={{fontSize: "calc(0.55vw + 0.55vh + 0.55vmin)" ,margin: "10% auto 0 auto", width: "50%" }}
                  placeholder="Your company name here"
                />

                <Button
                className="BtnSend"
                onClick={this.handleAddCompany}
                style={{
                  backgroundColor: "rgb(45,52,90)",
                  color: "white",
                  fontFamily: "Raleway",
                  borderRadius: "15px",
                  margin:"0 2% 10% 0"
                }}
              >
                <Typography
                  gutterBottom
                  style={{
                    textAlign: "center",
                    alignItems:"center",
                    color: "white",
                    fontSize: "calc(0.4vw + 0.4vh + 0.6vmin)",
                    padding: "8px 41px",
                    fontFamily: "Raleway",
                  }}
                >
                  Add Company
                </Typography>
              </Button>

              </form>

              <form onSubmit={this.handleAddEmailExtension}>
                <Input
                  onChange={this.onChange}
                  name="addEmailExtension"
                  id="emailInput"
                  placeholder="Exemple: @gmail.com"
                  style={{fontSize: "calc(0.55vw + 0.55vh + 0.55vmin)" ,margin: "10% auto 0 auto", width: "50%" }}
                />

                <Button
                className="BtnSend"
                onClick={this.handleAddEmailExtension}
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
                    padding: "8px 20px",
                    fontFamily: "Raleway",
                  }}
                >
                  Add email extension
                </Typography>
              </Button>

              </form>
              </Grid>


              <p style={{
                textAlign: "center",
                alignItems:"center",
                fontSize: "calc(0.55vw + 0.55vh + 0.55vmin)",}}>* Select a company before adding an email extension</p>

            
              <h3 style={{
                textAlign: "center",
                alignItems:"center",
                fontSize: "calc(0.55vw + 0.55vh + 0.55vmin)",}}>** Don't forget to refresh your page after your changes</h3>
        </Card>
      </div>
    );
  }
}

export default withStyles(styles)(UpdateCompaniesCard);
