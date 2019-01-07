import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import './SurveyPage.css';
import BarProgress from './BarProgress';


class SurveyPage extends Component {
    render(){
        return (
            <div>

                <BarProgress />

                <Grid container>
                
                    <Grid item xs={12} sm={6} style ={{
                        backgroundColor: 'rgb(125, 146, 177)',
                        backgroundRepeat: 'no-repeat',
                        backgroundSize:'',
                    }}>

                        <Typography style={{
                        justifyContent: 'center',
                        marginLeft: '5%',
                        color: 'white',
                        margin: '5% ',
                        fontFamily: 'Raleway',
                        fontSize: '2em',
                        }} gutterBottom> AGILE MATURITY ASSESSMENT
                        </Typography>

                        <Typography style={{
                        justifyContent: 'center',
                        color: 'white',
                        margin: '5%',
                        fontFamily: 'Raleway',
                        fontSize: '1.7em',
                        }} gutterBottom> COMPANY
                        </Typography>

                        <Typography style={{
                        textAlign: 'center',
                        justifyContent: 'center',
                        verticalAlign: 'middle',
                        color: 'white',
                        margin: '5%',
                        fontFamily: 'Raleway',
                        fontSize: '1.7em',
                        }} gutterBottom> 
                        </Typography>
                         
                    </Grid>
                    
                    <Grid className='grid2' item xs={12} sm={6}>

                    </Grid>

                </Grid>
            </div>
        )
    }
}

export default SurveyPage;