import React, { Component } from "react";
import axios from "axios";
import SimpleTable from './SimpleTable';
import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import { Redirect } from "react-router-dom";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import "./DownloadCard.css";
import Grid from "@material-ui/core/Grid";

import arrow from "../../images/left-arrow.png"


const styles = theme => ({
  companyContainer: {
    width: 300
  }
});

class UpdateUsersRoleCard extends Component {
  state = {
    users: [],
    roles: ["client", "admin", "super_admin"],
    role: "",
    selectedUsers: [],
    token: localStorage.getItem("token"),
    adminHomePage: false
  };

  componentDidMount = () => {
    const company = "Exton"

    axios({
      method: "GET",
      url: `http://localhost:3002/users/companyUsers=${company}`,
      headers: {
        authorization: `Bearer ${this.state.token}`
      }
    }).then(res => this.setState({ users: res.data }));
  };

  handleChangeRole = event => {
    this.setState({ role: event.target.value })
  };

  selectingUsers = (array) => {
    this.setState({ selectedUsers: array })
  };

  handleBack = e => {
    this.setState({
      adminHomePage: true
    });
  };

  handleValidate = () => {
    this.state.selectedUsers.map(selectedUser => {
      return (
        axios({
          method: "PUT",
          url: `http://localhost:3002/users/${selectedUser}`,
          headers: {
            authorization: `Bearer ${this.state.token}`
          },
          data: {
            role: this.state.role
          }
        })
          .then(res => res.status)
      )
    });
    alert(`The role has been set to ${this.state.role}`);
  };

  render() {
    // console.log(this.state.users.length === 0)
    if (this.state.users.length === 0)
      return <h3>LOADING...</h3>
    const { classes } = this.props;
    if (this.state.adminHomePage) return <Redirect to="/admin/Home" />;

    if (this.state.companies === null) return <p>loading</p>;
    return (
      <div>
        <Card
          className="card"
          style={{
            width: "80%",
            maxHeight: "70%",
            alignContent: "center",
            alignItems: "center",
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: "5%",
            marginBottom: "auto",
            borderRadius: "10px",
          }}
        >

            <Button style={{ fontSize: "calc(0.4vw + 0.4vh + 0.6vmin)", padding: "2%"}}
            onClick={this.handleBack}>
            <img className="arrow" src={arrow} alt="back arrow"/>
              Back
          </Button>

          <Grid style={{ padding:"0 5%"}}>
            <SimpleTable users={this.state.users} selectingUsers={this.selectingUsers}/>
            <TextField
              className={classes.poleContainer}
              select
              value={this.state.role}
              onChange={this.handleChangeRole}
              label="Please select a new role"
              margin="normal"
            style={{fontSize: "calc(0.55vw + 0.55vh + 0.55vmin)", width: "20%" }}

            >
              {this.state.roles.map((role, index) => (
                <MenuItem key={index} value={role}>
                  {role}
                </MenuItem>
              ))}
            </TextField>

            <CardContent style={{ float: "right" }}>
              <Button
                className="BtnSend"
                type="submit"
                onClick={this.handleValidate}
                style={{
                  backgroundColor: "rgb(186, 28, 58)",
                  color: "white",
                  fontFamily: "Raleway",
                  borderRadius: "15px",
                  margin:"5% 2% 0 0",
                }}
                >
                <Typography
                  gutterBottom
                  style={{
                    textAlign: "center",
                    alignItems:"center",
                    color: "white",
                    fontSize: "calc(0.4vw + 0.4vh + 0.6vmin)",
                    padding: "8px 20px",
                    fontFamily: "Raleway",
                  }}
                  >
                  Validate
                </Typography>
              </Button>
            </CardContent>

            <h3 style={{
                textAlign: "center",
                alignItems:"center",
                fontSize: "calc(0.55vw + 0.55vh + 0.55vmin)",
                margin: "5% 0"}}>* Don't forget to refresh your page after your changes</h3>
        </Grid>
        </Card>
      </div>
    );
  }
}
export default withStyles(styles)(UpdateUsersRoleCard);
