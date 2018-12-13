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

const styles = theme => ({
  pos: {
    margin: 30
  }
});
class LoginCard extends Component {
  state = {
    email: "",
    password: ""
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
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
        console.log(res);
        localStorage.setItem("token", res.headers["x-access-token"]);
        console.log("token", localStorage.getItem("token"));
      })
      .then(res => console.log(res));
    /*.then(NotConnected => {
        if (!NotConnected) {
          const token = localStorage.getItem("token");
          console.log(token);
          axios({
            method: "POST",
            url: "http://localhost:3002/users/login",
            headers: {
              Authorization: `Bearer ${token}`
            }
          })
        }
      });*/
  };

  render() {
    console.log(this.state);

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
                  marginTop: "30%",
                  marginBottom: "10%",
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
