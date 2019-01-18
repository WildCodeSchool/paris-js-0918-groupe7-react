import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import ImgIntro from "../../images/intro_image.png";
import UpdateCompaniesCard from "./UpdateCompaniesCard";

class UpdateCompanies extends Component {
  render() {
    return (
      <div>
        <Grid
          container
          className="gridUpdateCompanies"
          style={{
            backgroundColor: "rgb(125, 146, 177)",
            position: "absolute",
            minHeight: "100%"
          }}
        >
          <Grid item xs={12} sm={6}>
            <Typography
              className="UpdateCompanies"
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
              Update Companies
            </Typography>
            <UpdateCompaniesCard />                       
          </Grid>
          <Grid
            style={{
              backgroundImage: `url(${ImgIntro})`,
              backgroundSize: "auto",
              backgroundRepeat: "no-repeat"
            }}
            item xs={12} sm={6}
          />
        </Grid>
      </div>
    );
  }
}

export default UpdateCompanies;