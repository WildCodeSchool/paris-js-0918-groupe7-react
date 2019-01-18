import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import ImgIntro from '../../images/intro_image.png';
import AdminCardCrtl from './AdminCardCrtl';


class AdminHomePage extends Component {
    render(){
        return (
            <div>
                <Grid container className='gridintro' style={{
                    backgroundColor: 'rgb(125, 146, 177)',
                    position: 'absolute',
                    minHeight: '100%'
                }}>
                
                    <Grid item xs={12} sm={6}>

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
                    
                    <Grid style={{
                        backgroundImage: `url(${ImgIntro})`,
                        backgroundSize: 'auto',
                        backgroundRepeat: 'no-repeat',
                        
                    }} item xs={12} sm={6}>
                          
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default AdminHomePage;
