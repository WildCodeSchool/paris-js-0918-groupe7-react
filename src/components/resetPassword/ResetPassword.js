import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Input from "@material-ui/core/Input";
import axios from "axios";
import { Redirect } from "react-router-dom";

import Grid from "@material-ui/core/Grid";


class ResetPassword extends Component {
  state = { password: "", password2: "", redirected: false };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.password !== this.state.password2) {
      alert("Password doesn't match");
    } else {
      const config = {
        new_pass: this.state.password
      };

      let Url = `http://localhost:3002/users/reset/${this.props.match.params.reset_token}`;
      axios
        .put(Url, config)
        .then(res => {
          if (res.status === 200) {
            alert("Thank you ! Your password has been updated !");
            this.setState({
              redirected: !this.state.redirected
            });
          }
        })
        .catch(err => {
          return alert(err);
        });
    }
  };

  render() {
    console.log(this.props.match.params.reset_token);
    console.log(this.state.password, this.state.password2);
    if (this.state.redirected) {
      return <Redirect to="/login" />;
    }
    return (
        <Grid
          container
          style={{
            backgroundColor: "rgb(125, 146, 177)",
            position: "absolute",
            minHeight: "100%"
          }}
        >
        <Card
          className="card"
          style={{
            width: "50%",
            height: "60%",
            alignContent: "center",
            alignItems: "center",
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: "10%",
            paddingBottom:"2%",
            paddingRight:"1%",
            borderRadius: "5%"
          }}
        >
          <CardContent className="cardContent">
            <Typography
              gutterBottom
              style={{
                fontFamily: "Raleway, sans-serif",
                fontSize: "calc(1vw + 1vh + 1vmin)",
                margin: "5% 0 0 8%",
                textAlign: "start",
                fontWeight: "bold",
              }}
            >
              Reset Password
            </Typography>
            <form onSubmit={this.handleSubmit}>
              <div>
                <Input
                  type="password"
                  id="password"
                  name="password"
                  required
                  placeholder="New password"
                  minLength="8"
                  style={{ margin: "10% 0 0 17%", width: "50%",fontSize: "calc(0.4vw + 0.4vh + 0.6vmin)" }}
                  onChange={this.onChange}
                  value={this.state.password}
                />
              </div>

              <div >
                <Input
                  type="password"
                  id="password"
                  name="password2"
                  required
                  placeholder="Confirm"
                  minLength="8"
                  style={{ margin: "5% 0 5% 17%", width: "50%",fontSize: "calc(0.4vw + 0.4vh + 0.6vmin)" }}
                  onChange={this.onChange}
                  value={this.state.password2}
                />
              </div>
              <div style={{float:"right"}}>
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
                      alignItems: "center",
                      color: "white",
                      fontSize: "calc(0.4vw + 0.4vh + 0.6vmin)",
                      padding: "8px 30px",
                      fontFamily: "Raleway",
                    }}
                  >
                    Send
                  </Typography>
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
        </Grid>
    );
  }
}

export default ResetPassword;
