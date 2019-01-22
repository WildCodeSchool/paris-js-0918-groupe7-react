import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import UpdateUsersRoleCard from "./UpdateUsersRoleCard";

class UpdateUsersRole extends Component {
  render() {
    return (
      <div>
        <Grid
          container
          className="gridUpdateUsersRole"
          style={{
            backgroundColor: "rgb(125, 146, 177)",
            position: "absolute",
            minHeight: "100%"
          }}
        >
          <Grid item xs={12}>
            <Typography
              className="UpdateUsersRole"
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
              Update Users Role
            </Typography>
            <UpdateUsersRoleCard />                       
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default UpdateUsersRole;
