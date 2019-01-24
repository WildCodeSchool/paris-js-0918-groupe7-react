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
import './DownloadCard.css';
import CircularProgress from '@material-ui/core/CircularProgress';

import arrow from "../../images/left-arrow.png"

import { CSVLink } from "react-csv";

const styles = theme => ({
  companyContainer: {
    width: 300
  }
});

class DownloadCard extends Component {
  state = {
    data: [],
    results: [],
    companies: [],
    company: "",
    agencies: [],
    agency: "",
    token: localStorage.getItem("token"),
    adminHomePage: false,
    employees: 0,
    totalEmployees: 0
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
        url: `http://localhost:3002/agencies/companyId/${this.state.company}`,
        headers: {
          authorization: `Bearer ${this.state.token}`
        }
      }).then(res => {
        // Si pas d'agences, récupération des données de la compagnie
        if (res.data.length === 0) {
          axios({
            method: "GET",
            url: `http://localhost:3002/companies/uapq/${this.state.company}`,
            headers: {
              authorization: `Bearer ${this.state.token}`
            }
          }).then(res =>
            this.setState({ data: res.data }, () => { this.formatData() })
          );
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
    }).then(res =>
      this.setState({ data: res.data }, () => { this.formatData() })
    );
  };

  handleClick = e => {
    this.setState({
      adminHomePage: true
    });
  };

  formatData = () => {
    let results = [];
    this.state.data[0].users.map((user, index) => {

      const axes = ["Agile Capabilities", "Agile Adoption"];
      let userData = {
        user: index + 1,
        gender: user.gender,
        seniority: user.seniority,
        age_range: user.age_range,
        business_focus: user.business_focus,
        department: user.pole.name
      };
      axes.map(axe => {
        let axeWeight = 0;

        user.users_answers_possibilities_questions.filter(quest_ans => {
          if (user.users_answers_possibilities_questions !== []) {
            if (quest_ans.question.agile_orientation.includes(axe)) {
              axeWeight += quest_ans.answers_possibility.weight
            }
            this.setState({ employees: this.state.employees + 1 })
          }
          return 0;
        });
        userData[axe] = axeWeight;
        return 0;
      });
      results.push(userData);
      return 0;
    });
    this.setState({ results: results, totalEmployees: this.state.data[0].users.length });
  };

  render() {
    const { classes } = this.props;
    if (this.state.adminHomePage) return <Redirect to="/admin/Home" />;

    if (this.state.companies === null) return <CircularProgress disableShrink style={{ alignItems: "center" }} />;;
    return (
      <div>
        <Card
          className="card"
          style={{
            width: "70%",
            maxHeight: "70%",
            alignContent: "center",
            alignItems: "center",
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: "5%",
            marginBottom: "auto",
            borderRadius: "10px"
          }}
        >
          <CardContent className="cardContent">
          <Button style={{ fontSize: "calc(0.4vw + 0.4vh + 0.6vmin)", padding: "2%" ,marginRight: "50px"}}
            onClick={this.handleClick}>
            <img className="arrow" src={arrow} alt="back arrow"/>
              Back
          </Button>
            <CardContent>
              <TextField
                className={classes.poleContainer}
                select
                value={this.state.company}
                onChange={this.handleChangeCompany("company")}
                label="Please select a company"
                margin="normal"
                style={{fontSize: "calc(0.4vw + 0.4vh + 0.4vmin)" ,margin: "10% auto 0 auto", width: "70%", marginLeft: "13%", }}
              >
                {this.state.companies.map(option => (
                  <MenuItem key={option.id} value={option.id}>
                    {option.name}
                  </MenuItem>
                ))}
              </TextField>
            </CardContent>
            <CardContent>
              <TextField
                className={classes.poleContainer}
                select
                value={this.state.agency}
                onChange={this.handleChangeAgency("agency")}
                label="Please select an agency"
                margin="normal"
                style={{fontSize: "calc(0.4vw + 0.4vh + 0.4vmin)" ,margin: "0 auto 0 auto", width: "70%", marginLeft: "13%", }}

              >
                {this.state.agencies.map(option => (
                  <MenuItem key={option.id} value={option.id}>
                    {option.name}
                  </MenuItem>
                ))}
              </TextField>
            </CardContent>
              <h5 className={this.state.totalEmployees === 0 ? 'HiddenCount' : 'VisibleCount'}>
              Actually, there are {this.state.employees} out of {this.state.totalEmployees} employees who are completing ( or have completed  ) your survey. 
              </h5>
              <div style={{ textAlign: "center", alignItems:"center", marginTop: "7%"}}>
            <Button style={{
                  backgroundColor: "rgb(45,52,90)",
                  color: "white",
                  fontFamily: "Raleway",
                  borderRadius: "15px",
                }}>
                <CSVLink style={{ textDecoration:"none" }} data={this.state.results}>
                <Typography
                  gutterBottom
                  style={{
                    textAlign: "center",
                    alignItems:"center",
                    color: "white",
                    fontSize: "calc(0.4vw + 0.4vh + 0.6vmin)",
                    padding: "8px 30px",
                    fontFamily: "Raleway",
                    textDecoration:"none"
                  }}
                  >
                  Download
                </Typography>
              </CSVLink>
            </Button>
            </div>
          </CardContent>
          <h3 style={{
            textAlign: "center",
            alignItems:"center",
            fontSize: "calc(0.55vw + 0.55vh + 0.55vmin)",}}> * Don't forget to refresh your page after your changes</h3>
        </Card>
      </div>
    );
  }
}

export default withStyles(styles)(DownloadCard);
