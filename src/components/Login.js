import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import "./IntroPage.css";
import IntroImage from "../images/intro_image.png";
import LoginCard from "./LoginCard";

class Login extends Component {
  render() {
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
          <Grid item xs={12} sm={6}>
            <Typography
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
              Welcome to survey AAA
            </Typography>
            <LoginCard />
          </Grid>

          <Grid
            className="grid2"
            id="postit"
            style={{
              backgroundImage: `url(${IntroImage})`,
              backgroundSize: "100% 100% 100%",
              backgroundRepeat: "no-repeat"
            }}
            item
            xs={12}
            sm={6}
          />
        </Grid>
      </div>
    );
  }
}

export default Login;
