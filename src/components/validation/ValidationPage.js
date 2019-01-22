import React, { Component } from "react";
import CardValidation from "./CardValidation";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import ImgValidation from "../../images/validationImg.jpg";

import Hidden from '@material-ui/core/Hidden';

class ValidationPage extends Component {
  render() {
    console.table(this.props.answers_users)
    return (
      <div className="ValidationContainer">
        <Grid
          container
          className="gridthanks"
          style={{
            backgroundColor: "rgb(125, 146, 177)",
            position: "absolute",
            minHeight: "100%"
          }}
        >
          <Grid className="color" item xs={12} md={6}>
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
              Thank you for asking to Agile Maturity Assessment
            </Typography>

            <CardValidation
              thanksPage={this.props.thanksPage}
              validPage={this.props.validPage}
            />
          </Grid>

            <Hidden only={['xs', 'sm']}>
              <Grid item md={6}
                id="imgvalidation"
                style={{
                  backgroundImage: `url(${ImgValidation})`,
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

export default ValidationPage;
