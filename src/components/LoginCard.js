import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Input from "@material-ui/core/Input";
import axios from "axios";
import "./LoginCard.css";
// import Forgot from "./Forgot.js";

// Helpers
import checkRole from '../helpers/checkRole';
import { Redirect } from "react-router-dom";


import arrow from "../images/left-arrow.png"


const styles = theme => ({
  pos: {
    margin: 30
  }
});
class LoginCard extends Component {
  state = {
    email: "",
    password: "",
    forgot: false,
    role: null,
    isLoading: true,
    back: false
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleClick = e => {
    e.preventDefault();
    this.setState({
      forgot: !this.state.forgot
    });
  };

  BackFunction = e => {
    this.setState({
      back: !this.state.back
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    const config = {
      email: this.state.email,
      password: this.state.password
    };

    let Url = "http://localhost:3002/users/login";
    axios
      .post(Url, config)
      .then(res => {
        localStorage.setItem("token", res.headers["x-access-token"]);
      })
      .then(async () => {
          const role = await checkRole();

          this.setState({
            role: role,
            isLoading: false})
      })
      .catch(err => alert("Wrong Email or Password"));
  };

  render() {
    if (this.state.forgot) {
      return <Redirect to="/forgot_password" />;
    }
    if (this.state.back) {
      return <Redirect to="/" />;
    }
    if(!this.state.isLoading) {
      if(this.state.role === "client") {
        return <Redirect to="/user"/>
      } else if(this.state.role === "admin" || this.state.role === "adminIT" )
        return <Redirect to="/admin"/>
    }

    return (
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

          <Button style={{ fontSize: "calc(0.6vw + 0.6vh + 0.6vmin)" ,padding: "2%" ,marginRight: "50px"}}
          onClick={this.BackFunction}>
          <img className="arrow" src={arrow} alt="back arrow"/>
            Back
          </Button>

          <Typography
            gutterBottom
            style={{
              fontFamily: "Raleway, sans-serif",
              fontSize: "calc(1vw + 1vh + 1vmin)",
              marginTop: "5%",
              textAlign:"start",
              fontWeight:"bold",
              paddingLeft: "13%"
            }}
          >
            Login
          </Typography>
          <form onSubmit={this.handleSubmit}>
            <div >
              <Input
                type="text"
                id="email"
                name="email"
                required
                placeholder="Email"
                style={{fontSize: "calc(0.5vw + 0.5vh + 0.5vmin)" ,margin: "10% auto 0 auto", width: "70%", marginLeft: "13%", }}
                onChange={this.onChange}
                value={this.state.email}
              />
            </div>

            <div>
              <Input
                type="password"
                id="password"
                name="password"
                required
                placeholder="Password"
                minLength="8"
                style={{fontSize: "calc(0.5vw + 0.5vh + 0.5vmin)", margin: "5% auto 0 auto", width: "70%", marginLeft: "13%", }}
                onChange={this.onChange}
                value={this.state.password}
              />
            </div>


            {/* <Button
              style={{
                marginLeft: "63%",
                marginTop: "15%",
              }}
              onClick={this.handleClick}
            >
              <Typography
                gutterBottom
                style={{
                  color: "rgb(55,61,98)",
                  fontSize: "14px",
                  textAlign:"start",
                }}
              >
                Forgot password ?
              </Typography>
            </Button> */}
            <div className="link-forgot-password">
              <a onClick={this.handleClick}>
                Forgot password ?
              </a>
            </div>


            <div className="form-data">
              <Button
                className="BtnSend"
                type="submit"
                value="Login"
                style={{
                  backgroundColor: "rgb(186, 28, 58)",
                  color: "white",
                  fontFamily: "Raleway",
                  borderRadius: "15px",
                }}
              >
                <Typography
                  gutterBottom
                  style={{
                    textAlign: "center",
                    color: "white",
                    fontSize: "calc(0.6vw + 0.6vh + 1vmin)",
                    padding: "15px 35px",
                    fontFamily: "Raleway",
                  }}
                >
                  Login
                </Typography>
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    );
  }
}
LoginCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(LoginCard);
