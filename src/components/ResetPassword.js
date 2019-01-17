import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Input from "@material-ui/core/Input";
import axios from "axios";
import { Redirect } from "react-router-dom";

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
      <div>
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
              Reset Password
            </Typography>
            <form onSubmit={this.handleSubmit}>
              <div className="form-data">
                <Input
                  type="password"
                  id="password"
                  name="password"
                  required
                  placeholder="New password"
                  minLength="8"
                  style={{ marginTop: "5%", width: "80%" }}
                  onChange={this.onChange}
                  value={this.state.password}
                />
              </div>

              <div className="form-data">
                <Input
                  type="password"
                  id="password"
                  name="password2"
                  required
                  placeholder="Confirm new password"
                  minLength="8"
                  style={{ marginTop: "5%", width: "80%" }}
                  onChange={this.onChange}
                  value={this.state.password2}
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
                    Send
                  </Typography>
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    );
  }
}

export default ResetPassword;
