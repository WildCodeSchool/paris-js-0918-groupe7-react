import React, { Component } from "react";
import { Typography } from "@material-ui/core";
import axios from "axios";
import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import { Redirect } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { CSVLink } from "react-csv";


const styles = theme => ({
  companyContainer: {
    width: 300
  }
});

class DownloadCard extends Component {
  state = {
    data: [],
    companies: [],
    company: "",
    agencies: [],
    agency: "",
    token: localStorage.getItem("token"),
    adminHomePage: false
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
      // Recherche d'agences
      axios({
        method: "GET",
        url: `http://localhost:3002/agencies/companyId/${this.state.company}`,
        headers: {
          authorization: `Bearer ${this.state.token}`
        }
      }).then(res => {
        // Si pas d'agences, récupération des données de la compagnie
        if (res.data === []) {
          axios({
            method: "GET",
            url: `http://localhost:3002/companies/uapq/${this.state.company}`, // mettre la route exacte
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
      url: `http://localhost:3002/agencies/uapq/${agency}`, // mettre la route exacte
      headers: {
        authorization: `Bearer ${this.state.token}`
      }
    }).then(res => this.setState({ data: res.data }));
    // recupere la data d'une compagnie selectionnee au format csv et gestion du telechargement de la data
    //mise en forme des
  };

  handleClick = (e) => {
    this.setState({
        adminHomePage: true
    })
  }
  render() {
    if (this.state.adminHomePage)
      return <Redirect to="/admin/Home" />

    const { classes } = this.props;
    console.log("the patriots", this.state);
    
    if (this.state.companies === null) return <p>loading</p>;
    return (
      <div>
        <Card className='card' style={{ 
                
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
              
        }}>                
          <CardContent className='cardContent'>
          <Button 
            onClick={this.handleClick}
            variant="contained"  
            className='but'
            size='large'
            style={{
            backgroundColor: 'rgb(38, 56, 87)',
            color: 'white',
            marginLeft: 'auto',
            marginRight: 'auto',
            display: 'block',
            marginTop: '5%',
            fontSize: '1.3em',
            fontFamily: 'Raleway'
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
          {/* <button > */}
          <CSVLink data={this.state.data}>Download</CSVLink>
          {/* </button> */}
          </CardContent>  
        </Card>
      </div>
    );
  }
}

export default withStyles(styles)(DownloadCard);
