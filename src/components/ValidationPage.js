import React, { Component } from "react";
import CardValidation from "./CardValidation";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import ImgValidation from "../images/validationImg.jpg";

class ValidationPage extends Component {
  render() {
    return (
      <div>
        <Grid container>
          <Grid className="color" item xs={12} sm={6}>
            <Typography
              className="thank"
              style={{
                textAlign: "center",
                justifyContent: "center",
                verticalAlign: "middle",

                color: "white",
                margin: "5% auto"
              }}
              variant="subtitle1"
              gutterBottom
            >
              {" "}
              Thank you for asking to Agile Maturity Assessment
            </Typography>

            <CardValidation />
          </Grid>

          <Grid
            className="grid2"
            style={{
              backgroundImage: `url(${ImgValidation})`,
              backgroundSize: "auto",
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
