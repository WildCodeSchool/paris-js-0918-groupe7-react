import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import './CardIntro.css'

const styles = {
  pos: {
    marginBottom: 0,
  },
};

function CardIntro(props) {

  return (
      <Card className='card' style={{ 
        
        width: '80%',
        height: 'auto',
        alignContent: 'center',
        alignItems: 'center',
        marginLeft: 'auto',
        marginRight: 'auto',
        verticalAlign: 'middle',
        marginTop: 'auto',
        marginBottom: 'auto',
        
       }}>
        <CardContent className='cardContent'>

          <Typography gutterBottom style={{ 
            textAlign: 'center',
            fontFamily: 'Raleway',
            fontSize: '1em'
            }}>This survey, conducted by Exton Consulting, aims at assessing the level of maturity of your company / entity on Agile.</Typography>
          <Typography gutterBottom style={{ 
            textAlign: 'center',
            fontFamily: 'Raleway',
            fontSize: '1em'
            }}>Please note that the survey is a picture of your Agile adoption and capabilities level at a given moment and that the results are likely to change overtime. </Typography>
          <Typography gutterBottom style={{ 
            textAlign: 'center',
            fontFamily: 'Raleway',
            fontSize: '1em' }}>
            While completing the survey, please answer with as much transparency as possible ! </Typography>
          <Typography gutterBottom style={{ 
            textAlign: 'center',
            fontFamily: 'Raleway',
            fontSize: '1em' }}>
            *** </Typography>
          <Typography gutterBottom style={{ 
            textAlign: 'center',
            fontFamily: 'Raleway',
            fontSize: '1em' }}>
            Some information before you begin </Typography>
          <Typography gutterBottom style={{ 
            textAlign: 'center',
            fontFamily: 'Raleway',
            fontSize: '1em' }}>
            The survey should last around 20 minutes. </Typography>
          <Typography gutterBottom style={{ 
            textAlign: 'center',
            fontFamily: 'Raleway',
            fontSize: '1em' }}>
            You can quit the survey and resume at your convenience. </Typography>
          <Typography gutterBottom style={{ 
            textAlign: 'center',
            fontFamily: 'Raleway',
            fontSize: '1em' }}>
            Your answers will be automatically saved. </Typography>
          
          <div className='button'>
            <Button 
            variant="contained" 
            color="primary" 
            className='but'
            size='large'
            style={{
              marginLeft: 'auto',
              marginRight: 'auto',
              display: 'block',
              marginTop: '5%',
              blockSize: '1em',
              fontSize: '1.3em',
              fontFamily: 'Raleway'
            }}
            >
              Start Now
            </Button>
          </div>

        </CardContent>

      </Card>
  );
}

CardIntro.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CardIntro);