import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Input from "@material-ui/core/Input";
import axios from "axios";
import { Redirect } from "react-router-dom";

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
        <Grid
          container
          className="gridthanks"
          style={{
            backgroundColor: "rgb(125, 146, 177)",
            position: "absolute",
            minHeight: "100%"
          }}
        >
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
                Forgot Password
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
        </Grid>
      </div>
    );
  }
}
Forgot.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Forgot);
