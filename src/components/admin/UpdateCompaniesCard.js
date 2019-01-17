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
import Input from '@material-ui/core/Input';

import { CSVLink } from "react-csv";


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
    agency: '',
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
    })
    });
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
            blockSize: '18px',
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
            Update Companies
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
          <Button>Delete</Button>
          <CardContent>
            <Input />
          </CardContent>
          </CardContent>  
        </Card>
      </div>
    );
  }
}

export default withStyles(styles)(UpdateCompaniesCard);
