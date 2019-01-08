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
import Forgot from "./Forgot.js";

// Helpers
import checkRole from '../helpers/checkRole';
import { Redirect } from "react-router-dom";

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
    isLoading: true
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
        return <Redirect to="/client"/>
      } else if(this.state.role === "admin" || this.state.role === "adminIT" )
        return <Redirect to="/admin"/>
    }
    
    return (
      <Card
        className="card"
        style={{
          width: "70%",
          height: "60%",
          alignContent: "center",
          alignItems: "center",
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: "auto",
          marginBottom: "auto",
          paddingLeft: "10%",
          borderRadius: "5%"
        }}
      >
        <CardContent className="cardContent">
          <Button
            style={{
              border: "solid",
              marginTop: "2%"
            }}
            onClick={this.BackFunction}
          >
            {" "}
            Back{" "}
          </Button>

          <Typography
            gutterBottom
            style={{
              fontFamily: "Raleway, sans-serif",
              fontSize: "28px",
              marginTop: "5%",
              marginLeft: "1%",
              letterSpacing: "0.4rem"
            }}
          >
            Login
          </Typography>
          <form onSubmit={this.handleSubmit}>
            <div className="form-data">
              <Input
                type="text"
                id="email"
                name="email"
                required
                placeholder="Email"
                style={{ marginTop: "5%", width: "80%" }}
                onChange={this.onChange}
                value={this.state.email}
              />
            </div>

            <div className="form-data">
              <Input
                type="password"
                id="password"
                name="password"
                required
                placeholder="Password"
                minLength="8"
                style={{ marginTop: "5%", width: "80%" }}
                onChange={this.onChange}
                value={this.state.password}
              />
            </div>

            <Button
              style={{
                marginLeft: "64%",
                marginTop: "5%"
              }}
              onClick={this.handleClick}
            >
              <Typography
                gutterBottom
                style={{
                  color: "rgb(55,61,98)",
                  fontSize: "14px",
                  fontFamily: "Helvetica",
                  lineHeight: "14px"
                }}
              >
                Forgot password ?
              </Typography>
            </Button>

            <div className="form-data">
              <Button
                className="BtnSend"
                type="submit"
                value="Login"
                style={{
                  backgroundColor: "rgb(186, 28, 58)",
                  color: "white",
                  marginLeft: "auto",
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
                    padding: "15px 35px"
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
