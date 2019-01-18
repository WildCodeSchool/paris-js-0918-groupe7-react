import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import "./IntroPage.css";
import ThanksImg from "../images/thanks_img.jpg";
import ThanksCard from "./ThanksCard";
//import BarProgress from "./BarProgress";

class ThanksPage extends Component {
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
              Thank you for asking to Agile Maturity Assessment !
            </Typography>

            <ThanksCard  />
          </Grid>

          <Grid
            style={{
              backgroundImage: `url(${ThanksImg})`,
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
