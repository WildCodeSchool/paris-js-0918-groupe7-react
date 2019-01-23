import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import AdminCardCrtl from './AdminCardCrtl';


class AdminHomePage extends Component {
    render() {
        return (
            <div>
                <Grid container className='gridintro' style={{
                    backgroundColor: 'rgb(125, 146, 177)',
                    position: 'absolute',
                    minHeight: '100%'
                }}>

                    <Grid sm={12}>

                        <Typography style={{
                            textAlign: 'center',
                            justifyContent: 'center',
                            color: 'white',
                            margin: '5%',
                            fontFamily: 'Raleway',
                            fontSize: '2em',
                        }} gutterBottom> Welcome Admin
                        </Typography>
                        <AdminCardCrtl />
                    </Grid>


                </Grid>
            </div>
        )
    }
}

export default AdminHomePage;
