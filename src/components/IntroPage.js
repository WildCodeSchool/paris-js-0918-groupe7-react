import React, { Component } from 'react';
import CardIntro from './CardIntro'
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import './IntroPage.css';
import Img from '../images/intro_image.png';


class IntroPage extends Component {
    render(){
        return (
            <div>
                <Grid container className='mabite'>
                
                    <Grid item xs={12} sm={6}>

                        <Typography className='thank' style={{
                        textAlign: 'center',
                        justifyContent: 'center',
                        verticalAlign: 'middle',
                        color: 'white',
                        margin: '5% auto',
                        }} variant="display3" gutterBottom> Thank you for creating you account !
                        </Typography>

                        <CardIntro />
                        
                    </Grid>
                    
                    <Grid className='grid2' style={{
                        backgroundImage: `url(${Img})`,
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