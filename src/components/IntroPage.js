import React, { Component } from 'react';
import CardIntro from './CardIntro'
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import ImgIntro from '../images/intro_image.png';




class IntroPage extends Component {
    render(){
        return (
            <div>
                <Grid container >
                    <Grid item xs={12} md={6}
                        style={{
                            backgroundColor: 'rgb(125, 146, 177)',
                            backgroundSize: 'auto 100%',
                            backgroundRepeat: 'no-repeat',
                        }} >
                        <Typography
                            style={{
                                backgroundColor: 'rgb(125, 146, 177)',
                                textAlign: 'center',
                                justifyContent: 'center',
                                verticalAlign: 'middle',
                                color: 'white',
                                margin: '5% auto',
                                fontFamily: 'Raleway',
                                fontSize: '3vh',
                                }}>
                                Thank you for creating your account !
                        </Typography>
                        <CardIntro />
                    </Grid>


                    <Grid item md={6}
                        style={{
                            backgroundImage: `url(${ImgIntro})`,
                            backgroundSize: 'auto',
                            backgroundRepeat: 'no-repeat',
                        }} >
                    </Grid>

                </Grid>
            </div>
        )
    }
}

export default IntroPage