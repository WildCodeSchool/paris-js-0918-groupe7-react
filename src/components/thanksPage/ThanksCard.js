import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import './ThanksCard.css'

const styles = {
  pos: {
    marginBottom: 0,
  },
};

function ThanksCard(props) {

  return (
      
      <Card className='card' style={{ 
        
        width: '70%',
        height: 'auto',
        alignContent: 'center',
        alignItems: 'center',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 'auto',
        marginBottom: 'auto',
        
       }}>
        
        <CardContent className='cardContent'>

            <Button style={{
              border: 'solid'
          }}>  Back </Button>

            <Typography gutterBottom style={{ 
                textAlign: 'center',
                fontFamily: 'Raleway, sans-serif',
                fontSize: '18px'
                }}>You have completed the survey.
            </Typography>

            <Typography gutterBottom style={{ 
                textAlign: 'center',
                fontFamily: 'Raleway, sans-serif',
                fontSize: '18px'
                }}>Thank you for your time and your participation !
            </Typography>
          
          <div className='button'>
            <Button 
            variant="contained"  
            className='but'
            size='large'
            style={{
              backgroundColor: 'rgb(186, 28, 58)',
              color: 'white',
              marginLeft: 'auto',
              marginRight: 'auto',
              display: 'block',
              marginTop: '5%',
              blockSize: '18px',
              fontSize: '1.3em',
              fontFamily: 'Raleway'
            }}>
              Sign Out
            </Button>
          </div>

        </CardContent>

      </Card>
      
  );
}

ThanksCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ThanksCard);