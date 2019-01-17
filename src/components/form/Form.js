// Import de base
import React, { Component } from "react";
import { Redirect } from "react-router-dom";

// Import des composants du formulaire
import EmailField from "./EmailField";
import PasswordField from "./PasswordField";
import AgeRange from "./AgeRange";
import Department from "./Department";
import BusinessFocus from "./BusinessFocus";
import Seniority from "./Seniority";
import Gender from "./Gender";
import Company from "./Company";

// Import Material UI
import { Grid } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

class Form extends Component {
  state = {
    redirect: false
  };

  handleClick = e => {
    this.setState({
      redirect: true
    });
  };
  render() {
    if (this.state.redirect) {
      return <Redirect to="/login" />;
    }
    return (
      <Card
        className="card"
        style={{
          borderRadius: "20px",
          width: "70%",
          height: "auto",
          alignContent: "center",
          alignItems: "center",
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: "auto",
          marginBottom: "5%"
        }}
      >
        <CardContent className="cardContent">
          <Typography
            gutterBottom
            style={{
              textAlign: "center",
              fontFamily: "Raleway, sans-serif",
              fontSize: "28px"
            }}
          >
            Create your account{" "}
          </Typography>
          <Grid>
            <Grid item xs={12}>
              <Gender />
            </Grid>
            <Grid item xs={12}>
              <EmailField />
            </Grid>
            <Grid item xs={12}>
              <PasswordField />
            </Grid>
            <Grid item xs={12}>
              <AgeRange />
            </Grid>
            <Grid item xs={12}>
              <Company />
            </Grid>
            <Grid item xs={12}>
              <Department />
            </Grid>
            <Grid item xs={12}>
              <BusinessFocus />
            </Grid>
            <Grid item xs={12}>
              <Seniority />
            </Grid>
          </Grid>
          <Button
            className="BtnSend"
            type="submit"
            value="Login"
            style={{
              backgroundColor: "rgb(45,52,90)",
              color: "white",
              marginLeft: "20px",
              marginRight: "20px",
              marginTop: "10%",
              marginBottom: "5%",
              display: "block",
              fontSize: "1.3em",
              fontFamily: "Raleway",
              borderRadius: "15px"
            }}
          >
            <Typography
              gutterBottom
              style={{
                textAlign: "center",
                color: "white",
                fontSize: "20px",
                lineHeight: "14px",
                padding: "15px 25px"
              }}
            >
              Sign Up
            </Typography>
          </Button>
          <Typography
            gutterBottom
            style={{
              textAlign: "center",
              fontFamily: "Raleway, sans-serif",
              fontSize: "18px",
              marginLeft: "20px"
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
              marginLeft: "20px",
              marginRight: "20px",
              marginTop: "4%",
              marginBottom: "5%",
              display: "block",
              fontSize: "1.3em",
              fontFamily: "Raleway",
              borderRadius: "15px"
            }}
          >
            <Typography
              gutterBottom
              style={{
                textAlign: "center",
                color: "white",
                fontSize: "20px",
                lineHeight: "14px",
                padding: "15px 35px"
              }}
            >
              Login
            </Typography>
          </Button>
        </CardContent>
      </Card>
    );
  }
}

export default Form;
