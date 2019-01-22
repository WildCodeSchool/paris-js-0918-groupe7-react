import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import ThanksImg from "../../images/thanks_img.jpg";
import ThanksCard from "./ThanksCard";

import Hidden from '@material-ui/core/Hidden';

class ThanksPage extends Component {
  render() {
    return (
      <div>
        <Grid
          container
          style={{
            backgroundColor: "rgb(125, 146, 177)",
            position: "absolute",
            minHeight: "100%"
          }}
        >
          <Grid item xs={12} md={6}>
            <Typography
              style={{
                textAlign: "center",
                justifyContent: "center",
                verticalAlign: "middle",
                color: "white",
                margin: "5% auto",
                padding: "0% 5%",
                fontFamily: "Raleway",
                fontSize: "calc(1vw + 1vh + 1vmin)",
              }}
              gutterBottom
            >
              {" "}
              Thank you for asking to Agile Maturity Assessment !
            </Typography>

            <ThanksCard  />
          </Grid>

        <Hidden only={['xs', 'sm']}>
          <Grid item md={6}
            style={{
              backgroundImage: `url(${ThanksImg})`,
              backgroundSize: "100% 100%",
              backgroundRepeat: "no-repeat"
            }}
          >
          </Grid>
        </Hidden>
        </Grid>
      </div>
    );
  }
}

export default ThanksPage;
