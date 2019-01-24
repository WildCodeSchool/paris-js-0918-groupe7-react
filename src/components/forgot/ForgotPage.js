import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import IntroImage from "../../images/intro_image.png";

import Hidden from '@material-ui/core/Hidden';
import ForgotCard from "./ForgotCard";

class ForgotPage extends Component {
  render() {
    return (
      <div>
        <Grid
          container
          style={{
            backgroundColor: "rgb(125, 146, 177)",
            position: "absolute",
            minHeight:"100%"
          }}
        >
          <Grid item xs={12} md={6}  style={{
              marginTop:"5%"
            }}>
            <ForgotCard />
          </Grid>

          <Hidden only={['xs', 'sm']}>
            <Grid item md={6}
              style={{
                backgroundImage: `url(${IntroImage})`,
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

export default ForgotPage;
