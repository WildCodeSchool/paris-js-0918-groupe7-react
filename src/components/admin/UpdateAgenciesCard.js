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

class UpdateAgenciesCard extends Component {
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
      url: "http://localhost:3002/companies/isactive",
      headers: {
        authorization: `Bearer ${this.state.token}`
      }
    }).then(res => this.setState({ companies: res.data }));
  };

  handleChangeCompany = prop => event => {
    this.setState({ [prop]: event.target.value }, () => {
      // Recherche d'agences
      axios({
        method: "GET",
        url: `http://localhost:3002/agencies/companyId/${
          this.state.company
          }/is_active`,
        headers: {
          authorization: `Bearer ${this.state.token}`
        }
      }).then(res => {
        // Si pas d'agences, récupération des données de la compagnie
        if (res.data === []) {
          axios({
            method: "GET",
            url: `http://localhost:3002/companies/uapq/${this.state.company}`,
            headers: {
              authorization: `Bearer ${this.state.token}`
            }
          }).then(res => this.setState({ data: res.data }));
        } else {
          // Stockage des agences dans un state
          this.setState({ agencies: res.data });
        }
      });
    });
  };

  handleChangeAgency = prop => event => {
    const agency = event.target.value;
    this.setState({ [prop]: agency });

    axios({
      method: "GET",
      url: `http://localhost:3002/agencies/uapq/${agency}`,
      headers: {
        authorization: `Bearer ${this.state.token}`
      }
    }).then(res => this.setState({ data: res.data }));
  };

  handleClick = e => {
    this.setState({
      adminHomePage: true
    });
  };

  handleDelete = () => {
    axios({
      method: "PUT",
      url: `http://localhost:3002/agencies/${this.state.agency}`,
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
          url: `http://localhost:3002/users/agencyId/${this.state.agency}`,
          headers: {
            authorization: `Bearer ${this.state.token}`
          },
          data: {
            is_active: 0
          }
        })
          .then(res => this.setState({ deleteStatus: res.status }))
          .then(alert(`Agency with Id ${this.state.agency} deleted`));
      }
    });
  };

  handleAddAgency = e => {
    e.preventDefault();
    const url = `http://localhost:3002/agencies/`;
    const config = {
      name: this.state.addAgency,
      companyId: this.state.company
    };
    // const headers = {
    //   authorization: `Bearer ${this.state.token}`
    // };

    axios
      .post(url, config)
      .then(res => this.setState({ data: res.data }))
      .then(alert(`Agency ${this.state.addAgency} added`));
  };

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    if (this.state.adminHomePage) return <Redirect to="/admin/Home" />;

    const { classes } = this.props;

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
              Update Agencies
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
                >
                  {this.state.companies.map(option => (
                    <MenuItem key={option.id} value={option.id}>
                      {option.name}
                    </MenuItem>
                  ))}
                </TextField>
                <TextField
                  className={classes.poleContainer}
                  select
                  value={this.state.agency}
                  onChange={this.handleChangeAgency("agency")}
                  label="Agencies"
                  helperText="Please select an agency"
                  margin="normal"
                  variant="outlined"
                >
                  {this.state.agencies.map(option => (
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
                  Delete Agency
                </Button>
              </Grid>
            </form>

            <CardContent>
              <form onSubmit={this.handleAddAgency}>
                <Input
                  onChange={this.onChange}
                  name="addAgency"
                  style={{ width: "200px" }}
                  placeholder="Your agency name here"
                />
                <Button
                  className="ButtonSubmit"
                  onClick={this.handleAddAgency}
                  style={{
                    border: "solid"
                  }}
                >
                  Add Agency
                </Button>
              </form>
            </CardContent>

            <CardContent>
              <p>* Select a company and a agency before deleting this agency</p>
            </CardContent>
            <CardContent><h3>** Don't forget to refresh your page after your changes</h3></CardContent>
          </CardContent>
        </Card>
      </div>
    );
  }
}
export default withStyles(styles)(UpdateAgenciesCard);