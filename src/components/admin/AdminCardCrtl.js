import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import { Redirect } from 'react-router-dom';
import Grid from "@material-ui/core/Grid";
import { Link } from 'react-router-dom';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';


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
        const { classes } = this.props;
        const { value } = this.state;

        console.log(this.state.redirect)
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

            <Card className='card' style={{
                textAlign: "left",
                justifyContent: "center",
                verticalAlign: "middle",
                color: "black",
                marginBottom: "13%",
                marginLeft: "20%",
                marginRight: "20%",
                marginTop: "5%",
                fontFamily: "Raleway",
                fontSize: "1em",
                backgroundColor: "white",
                borderRadius: "10px",
                padding: "3%"
            }}>

                <CardContent className='cardContent'>

                    <div >
                        <Grid container>
                            <Grid sm={12}>
                                <div >
                                    <BottomNavigation value={value} showLabels className='NavBar'>
                                        <BottomNavigationAction component={Link} to='/admin/DownloadData' label=" Download Data" />
                                        <BottomNavigationAction component={Link} to='/admin/UpdateCompanies' label="Update Companies" />
                                        <BottomNavigationAction component={Link} to='/admin/UpdateAgencies' label="Update Agencies" />
                                        <BottomNavigationAction component={Link} to='/admin/UpdateUsersRole' label="Update Users Role" />
                                    </BottomNavigation>

                                </div>
                            </Grid>
                        </Grid>
                        <Grid md={12}>
                            <Button
                                variant="contained"
                                className="but"
                                size="large"
                                value='logout'
                                style={{
                                    backgroundColor: "rgb(186, 28, 58)",
                                    color: "white",
                                    marginLeft: "auto",
                                    marginRight: "auto",
                                    marginTop: '5%',
                                    display: "block",
                                    marginBottom: "5%",
                                    width: "30%",
                                    fontSize: "1.3em",
                                    fontFamily: "Raleway"
                                }}
                                onClick={this.handleLogOut}
                            >
                                Log Out
                               </Button>
                        </Grid>
                    </div>

                </CardContent>

            </Card>
        );
    }
}


export default AdminCardCrtl;
