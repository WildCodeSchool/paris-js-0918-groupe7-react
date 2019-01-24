import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Input from "@material-ui/core/Input";
import axios from "axios";
import './ForgotCard.css';
import { Redirect } from "react-router-dom";

import arrow from "../../images/left-arrow.png"

const styles = theme => ({
  pos: {
    margin: 30
  }
});

class Forgot extends Component {
  state = {
    back: false,
    email: ""
  };

  BackFunction = e => {
    this.setState({
      back: !this.state.back
    });
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    const config = {
      email: this.state.email
    };

    let Url = "http://localhost:3002/users/forgot";
    axios
      .post(Url, config)
      .then(res => {
        if (res.status === 200) {
          alert(`An email has been sent to ${this.state.email}`);
          /* window.location.assign("http://localhost:3000/")*/
          // TO DO: REDIRECT TO HOME AFTER ALERT
        }
      })
      .catch(err => {
        return alert(err);
      });
  };

  render() {
    console.log(this.state);
    if (this.state.back) {
      return <Redirect to="/login" />;
    }
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
          onClick={this.BackFunction}>
          <img className="arrow" src={arrow} alt="back arrow"/>
            Back
          </Button>

              <Typography
                gutterBottom
                style={{
                  fontFamily: "Raleway, sans-serif",
                  fontSize: "calc(0.7vw + 0.7vh + 0.7vmin)",
                  marginTop: "5%",
                  textAlign:"start",
                  fontWeight:"bold",
                  paddingLeft: "13%"
                }}
              >
                Forgot your password ?
              </Typography>
              <form onSubmit={this.handleSubmit}>
                <div className="form-data" style={{ margin: "5% 15% 0 0"}}>
                  <Input
                    type="text"
                    id="email"
                    name="email"
                    required
                    placeholder="Email"
                    style={{fontSize: "calc(0.4vw + 0.4vh + 0.4vmin)" ,    margin: "5% 15% 0 0", width: "70%", marginLeft: "13%", textAlign: "left" }}
                    onChange={this.onChange}
                    value={this.state.email}
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
      </div>
    );
  }
}
Forgot.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Forgot);
