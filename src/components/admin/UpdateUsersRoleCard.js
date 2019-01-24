import React, { Component } from "react";
import { Typography } from "@material-ui/core";
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

const styles = theme => ({
  companyContainer: {
    width: 300
  }
});

class UpdateUsersRoleCard extends Component {
  state = {
    users: [],
    roles: ["client", "admin", "super_admin"],
    role:"",
    selectedUsers: [],
    token: localStorage.getItem("token"),
    adminHomePage: false,
    refresh: false
  };

  getExtonUsers = () => {
    const company="Exton"

    axios({
      method: "GET",
      url: `http://localhost:3002/users/companyUsers=${company}`,
      headers: {
        authorization: `Bearer ${this.state.token}`
      }
    }).then( res => this.setState({ users: res.data }));
  };

  componentDidMount = () => {
   this.getExtonUsers();
  };

  handleChangeRole = event => {
    this.setState({role: event.target.value})
  };

  selectingUsers = (array) => {
    this.setState({selectedUsers: array})
  };

  disableRefresh = () => {
    this.setState({refresh: false})
  };

  handleBack = e => {
    this.setState({
      adminHomePage: true
    });
  };

  handleValidate = () => {
    let promises = [];

    this.state.selectedUsers.map(selectedUser => {
      const promise = axios({
        method: "PUT",
        url: `http://localhost:3002/users/${selectedUser}`,
        headers: {
          authorization: `Bearer ${this.state.token}`
        },
        data: {
          role: this.state.role
        }
      })
      .then(res => res); 

      promises.push(promise)
    })

    Promise.all(promises)
    .then( (res) => {
      this.getExtonUsers();
    })
    .then(() => this.setState({refresh: true, role: ""}))

  };

  render() {
    if(this.state.users.length === 0)
      return <h3>LOADING...</h3>
    const { classes } = this.props;
    if (this.state.adminHomePage) return <Redirect to="/admin/Home" />;

    if (this.state.companies === null) return <p>loading</p>;
    return (
      <div>
        <Card
          className="card"
          style={{
            textAlign: "left",
            justifyContent: "center",
            verticalAlign: "middle",
            color: "black",
            fontFamily: "Raleway",
            fontSize: "1em",
            backgroundColor: "white",
            borderRadius: "10%",
            padding: "10%",
            margin: "5%",
            width: "70%"
          }}
        >
          <CardContent className="cardContent">
            <Button
              onClick={this.handleBack}
              variant="contained"
              className="but"
              size="large"
              style={{
                backgroundColor: "rgb(38, 56, 87)",
                color: "white",
                marginLeft: "auto",
                marginRight: "auto",
                display: "block",
                marginTop: "5%",
                fontSize: "1.3em",
                fontFamily: "Raleway"
              }}
            >
              Back
            </Button>
            <SimpleTable users={this.state.users} selectingUsers={this.selectingUsers} refresh={this.state.refresh} disableRefresh={this.disableRefresh}/>
            <TextField
              className={classes.poleContainer}
              select
              value={this.state.role}
              onChange={this.handleChangeRole}
              label="Role"
              helperText="Please select a new role"
              margin="normal"
              variant="outlined"
            >
              {this.state.roles.map((role, index) => (
                <MenuItem key={index} value={role}>
                  {role}
                </MenuItem>
              ))}
            </TextField>
            <CardContent>
              <Button
                  className="ButtonSubmit"
                  onClick={this.handleValidate}
                  style={{ border: "solid" }}
                >
                  Validate
              </Button>
            </CardContent>
            <CardContent><h3>* Don't forget to refresh your page after your changes</h3></CardContent>
          </CardContent>
        </Card>
      </div>
    );
  }
}
export default withStyles(styles)(UpdateUsersRoleCard);
