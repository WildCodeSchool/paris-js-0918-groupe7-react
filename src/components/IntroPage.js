import React, { Component } from 'react';
import CardIntro from './CardIntro'
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import './IntroPage.css';
import ImgIntro from '../images/intro_image.png';


class IntroPage extends Component {
    render(){
        return (
            <div>
                <Grid container className='gridintro' style={{
                    backgroundColor: 'rgb(125,146, 177)',
                    position: 'absolute',
                    minHeight: '100%'
                }}>
                
                    <Grid item xs={12} sm={6}>

                        <Typography className='thank' style={{
                        textAlign: 'center',
                        justifyContent: 'center',
                        verticalAlign: 'middle',
                        color: 'white',
                        margin: '5% auto',
                        }} variant="subtitle1" gutterBottom> Thank you for creating you account !
                        </Typography>

                        <CardIntro />
                        
                    </Grid>
                    
                    <Grid className='grid2' style={{
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

export default IntroPage