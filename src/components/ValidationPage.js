import React, { Component } from "react";
import CardValidation from "./CardValidation";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import ImgValidation from "../images/validationImg.jpg";

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
          <Grid className="color" item xs={12} sm={6}>
            <Typography
              className="thank"
              style={{
                textAlign: "center",
                justifyContent: "center",
                verticalAlign: "middle",
                fontFamily: "Raleway",
                fontSize: "2em",
                color: "white",
                margin: "5% auto"
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

          <Grid
            className="grid2"
            id="imgvalidation"
            style={{
              backgroundImage: `url(${ImgValidation})`,
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

export default ValidationPage;
