import React, { Component } from "react";
import { Redirect } from "react-router-dom";

// Material UI dependencies
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

class UserAlreadyExist extends Component {
  state = {
    redirect: false
  };

  handleClick = e => {
    e.preventDefault();
    this.setState({ redirect: true });
  };

  render() {
    if (this.state.redirect) {
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
                Error during your Sign Up
              </Typography>

              <p>User already exist! Please Login.</p>

              <div className="form-data">
                <Button
                  onClick={this.handleClick}
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
            </CardContent>
          </Card>
        </Grid>
      </div>
    );
  }
}

export default UserAlreadyExist;
