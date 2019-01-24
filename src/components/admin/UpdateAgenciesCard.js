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

import arrow from "../../images/left-arrow.png"


// import "./UpdateCompanies.css";

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
        if (res.data.length===0) {
          alert("No agencies for this company ! You can add one, if you want. ")
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
          .then(res => this.setState({ deleteStatus: res.status, agency: null }))
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
      .then(alert(`Agency ${this.state.addAgency} added`))
      .then(document.getElementById("agencyInput").value="")
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
          <CardContent className="cardContent">

          <Button style={{ fontSize: "calc(0.4vw + 0.4vh + 0.6vmin)", padding: "2%"}}
            onClick={this.handleClick}>
            <img className="arrow" src={arrow} alt="back arrow"/>
              Back
          </Button>

              <Grid style={{ padding:"0 0 0 15%"}}>
                <TextField
                  className={classes.poleContainer}
                  select
                  value={this.state.company}
                  onChange={this.handleChangeCompany("company")}
                  label="Please select a company"
                  margin="normal"
                  style={{fontSize: "calc(0.55vw + 0.55vh + 0.55vmin)" ,margin: "", width: "50%", }}
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
                  label="Please select an agency"
                  margin="normal"
                  style={{fontSize: "calc(0.55vw + 0.55vh + 0.55vmin)" ,margin: "5% 2% 0 auto", width: "50%" }}

                >
                  {this.state.agencies.map(option => (
                    <MenuItem key={option.id} value={option.id}>
                      {option.name}
                    </MenuItem>
                  ))}
                </TextField>

                <Button
                className="BtnSend"
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
                    padding: "8px 20px",
                    fontFamily: "Raleway",
                  }}
                  >
                  Delete Agency
                </Typography>
              </Button>



            <CardContent>
              <form onSubmit={this.handleAddAgency}>
                <Input
                  onChange={this.onChange}
                  name="addAgency"
                  style={{ width: "200px" }}
                  id="agencyInput"
                  placeholder="Your agency name here"
                  />

                <Button
                className="BtnSend"
                onClick={this.handleAddAgency}
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
                    padding: "8px 41px",
                    fontFamily: "Raleway",
                  }}
                  >
                  Add Agency
                </Typography>
              </Button>

              </form>
            </CardContent>
            </Grid>

              <p style={{
                textAlign: "center",
                alignItems:"center",
                fontSize: "calc(0.55vw + 0.55vh + 0.55vmin)",}}>* Select a company and a agency before deleting this agency</p>
              <h3 style={{
                textAlign: "center",
                alignItems:"center",
                fontSize: "calc(0.55vw + 0.55vh + 0.55vmin)",}}>** Don't forget to refresh your page after your changes</h3></CardContent>
        </Card>
      </div>
    );
  }
}
export default withStyles(styles)(UpdateAgenciesCard);