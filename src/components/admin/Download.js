import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import axios from "axios";
import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";

const styles = theme => ({
  companyContainer: {
    width: 300
  }
});

class Download extends Component {
  state = {
    data: null,
    companies: null,
    company: "",
    agencies: [],
    agency: "",
    token: localStorage.getItem("token")
  };

  componentDidMount = () => {
    axios({
      method: "GET",
      url: "http://localhost:3002/companies/",
      headers: {
        authorization: `Bearer ${this.state.token}`
      }
    }).then(res => this.setState({ companies: res.data }));
  };

  handleChangeCompany = prop => event => {
    this.setState({ [prop]: event.target.value }, () => {
      axios({
        method: "GET",
        url: `http://localhost:3002/agencies/companyId/${this.state.company}`,
        headers: {
          authorization: `Bearer ${this.state.token}`
        }
      }).then(res => this.setState({ agencies: res.data }));
    });
  };

  handleChangeAgency = prop => event => {
    this.setState({ [prop]: event.target.value });
  };

  // recupere la data d'une compagnie selectionnee au format csv et gestion du telechargement de la data
  handleDownload = event => {
    event.preventDefault();
    if(this.state.agencies === []) {
      axios({
        method: "POST",
        url: `http://localhost:3002/company`,  // mettre la route exacte
        headers: {
          authorization: `Bearer ${this.state.token}`
        }
      }).then(res => this.setState({ data: res.data }));
    }
    else {
      axios({
        method: "POST",
        url: `http://localhost:3002/agency`, // mettre la route exacte
        headers: {
          authorization: `Bearer ${this.state.token}`
        }
      }).then(res => this.setState({ data: res.data }));
    }
    // Si le state finale des agences est null => axios sur route company, sinon axios route agency
    //return telechargement
  };

  render() {
    const { classes } = this.props;

    if (this.state.companies === null) return <p>loading</p>;
    console.log("the patriots", this.state);
    return (
      <div>
        <Grid
          container
          className="gridintro"
          style={{
            backgroundColor: "rgb(125, 146, 177)",
            position: "absolute",
            minHeight: "100%"
          }}
        >
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
            Download Company Data
          </Typography>
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
          </TextField>{" "}
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(Download);
