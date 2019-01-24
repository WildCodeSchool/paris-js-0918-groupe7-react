import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import { Redirect } from 'react-router-dom';
import Grid from "@material-ui/core/Grid"
import { Typography } from "@material-ui/core";

import './AdminCardCtrl.css'




class AdminCardCrtl extends Component {
    state = {
        redirect: '',

    }


    handleClick = (e) => {
        this.setState({
            redirect: e.currentTarget.value
        })
    }
    handleLogOut = (e) => {
        localStorage.removeItem("token");
        this.setState({
            redirect: e.currentTarget.value
        })
    }
    render() {
        if (this.state.redirect === 'download')
            return <Redirect to="/admin/DownloadData" />
        if (this.state.redirect === 'updateCompanies')
            return <Redirect to="/admin/UpdateCompanies" />
        if (this.state.redirect === 'updateAgencies')
            return <Redirect to="/admin/UpdateAgencies" />
        if (this.state.redirect === 'updateUsersRole')
            return <Redirect to="/admin/UpdateUsersRole" />
        if (this.state.redirect === 'logout')
            return <Redirect to="/login" />
        return (

            <Card style={{
                width:"90%",
                textAlign: "center",
                justifyContent: "center",
                verticalAlign: "center",
                color: "black",
                padding: "5% 0 6% 0",
                margin:"10% auto 0 auto",
                fontFamily: "Raleway",
                fontSize: "1em",
                backgroundColor: "white",
                borderRadius: "10px",
            }}>
                        <Grid container >
                            <Grid style={{textAlign:"center"}}>
                                <Button
                                    onClick={this.handleClick}
                                    variant="contained"
                                    size='large'
                                    value='download'
                                    style={{
                                        backgroundColor: 'rgb(38, 56, 87)',
                                        color: "white",
                                        fontFamily: "Raleway",
                                        borderRadius: "15px",
                                        margin:"5% 2% 0 0",
                                        width: "250px"
                                      }}
                                      >
                                      <Typography
                                        gutterBottom
                                        style={{
                                          margin:"0",
                                          textAlign: "center",
                                          alignItems:"center",
                                          color: "white",
                                          fontSize: "calc(0.4vw + 0.4vh + 0.6vmin)",
                                          fontFamily: "Raleway",
                                        }}
                                        >
                                        Download data
                                      </Typography>
                                    </Button>
                                <Button
                                    onClick={this.handleClick}
                                    variant="contained"
                                    className='but'
                                    size='large'
                                    value='updateCompanies'
                                    style={{
                                        backgroundColor: 'rgb(38, 56, 87)',
                                        color: "white",
                                        fontFamily: "Raleway",
                                        borderRadius: "15px",
                                        margin:"5% 2% 0 0",
                                        width: "250px"

                                      }}
                                      >
                                      <Typography
                                        gutterBottom
                                        style={{
                                            margin:"0",
                                            textAlign: "center",
                                          alignItems:"center",
                                          color: "white",
                                          fontSize: "calc(0.4vw + 0.4vh + 0.6vmin)",
                                          fontFamily: "Raleway",
                                        }}
                                        >Update companies                                      </Typography>
                                    </Button>
                                <Button
                                    onClick={this.handleClick} 
                                    variant="contained"  
                                    className='but'
                                    size='large'
                                    value='updateAgencies'
                                    style={{
                                        backgroundColor: 'rgb(38, 56, 87)',
                                        color: "white",
                                        fontFamily: "Raleway",
                                        borderRadius: "15px",
                                        margin:"5% 2% 0 0",
                                        width: "250px"

                                      }}
                                      >
                                      <Typography
                                        gutterBottom
                                        style={{
                                            margin:"0",
                                          textAlign: "center",
                                          alignItems:"center",
                                          color: "white",
                                          fontSize: "calc(0.4vw + 0.4vh + 0.6vmin)",
                                          fontFamily: "Raleway",
                                        }}
                                        >Update agencies                                      </Typography>
                                    </Button>
                                <Button
                                    onClick={this.handleClick}
                                    variant="contained"
                                    className='but'
                                    size='large'
                                    value='updateUsersRole'
                                    style={{
                                        backgroundColor: 'rgb(38, 56, 87)',
                                        color: "white",
                                        fontFamily: "Raleway",
                                        borderRadius: "15px",
                                        margin:"5% 2% 0 0",
                                        width: "250px"

                                      }}
                                      >
                                      <Typography
                                        gutterBottom
                                        style={{
                                            margin:"0",
                                          textAlign: "center",
                                          alignItems:"center",
                                          color: "white",
                                          fontSize: "calc(0.4vw + 0.4vh + 0.6vmin)",
                                          fontFamily: "Raleway",
                                        }}
                                        >Update user role                                      </Typography>
                                    </Button>
                                <div>
                                <Button
                                onClick={this.handleLogOut}
                                    variant="contained"
                                    className="but"
                                    size="large"
                                    value='logout'
                                    style={{
                                        backgroundColor: "rgb(186, 28, 58)",
                                        color: "white",
                                        fontFamily: "Raleway",
                                        borderRadius: "15px",
                                        margin:"5% 2% 0 0",
                                        width: "250px"

                                      }}
                                      >
                                      <Typography
                                        gutterBottom
                                        style={{
                                            margin:"0",
                                          textAlign: "center",
                                          alignItems:"center",
                                          color: "white",
                                          fontSize: "calc(0.4vw + 0.4vh + 0.6vmin)",
                                          fontFamily: "Raleway",
                                        }}
                                        >Log out                                      </Typography>
                                    </Button>
                                    </div>
                            </Grid>
                        </Grid>

            </Card>
        );
    }
}


export default AdminCardCrtl;
