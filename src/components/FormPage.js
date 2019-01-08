import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import "./IntroPage.css";
// import Form from "./form/Form";
import IntroImage from "../images/intro_image.png";
//import BarProgress from "./BarProgress";

// import showResults from "../showResults";
import SimpleForm from "./SimpleForm";
// import axios from "axios";


class ThanksPage extends Component {
  handleSubmit(values){
    console.log(values)
  };

  render() {
    return (
      <div>
        {/*<BarProgress />*/}
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
              className="thank"
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
{/*
            <Form /> */}
            <SimpleForm onSubmit={this.handleSubmit}/>

          </Grid>

          <Grid
            className="grid2"
            id="postit"
            style={{
              backgroundImage: `url(${IntroImage})`,
              backgroundSize: "100% 100%",
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

export default ThanksPage;
