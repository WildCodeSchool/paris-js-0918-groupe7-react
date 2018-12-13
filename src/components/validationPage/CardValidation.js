import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import './CardValidation.css';

const styles = {
  pos: {
    marginBottom: 0,
  },
};

function CardValidation(props) {

  return (
      <Card className='card' style={{ 
        
        width: '65%',
        alignContent: 'center',
        alignItems: 'center',
        marginLeft: 'auto',
        marginRight: 'auto',
        
       }}>
        <CardContent className='cardContent'>
          <Button style={{
              border: 'solid'
          }}>  Back </Button>
          <Typography variant="subtitle1" gutterBottom style={{ 
            textAlign: 'center' }}>
            Congratulations, you’re finished !
          </Typography>
          <Typography variant="subtitle1" gutterBottom style={{ 
          textAlign: 'center' }}> 
            Please note that no changes will be possible after the validation
          </Typography>
          
          <div className='button'>
            <Button 
            variant="contained" 
            color="primary" 
            className='but'
            style={{
              marginLeft: 'auto',
              marginRight: 'auto',
              display: 'block',
              marginTop: '5%',
            }}
            >
              DONE
            </Button>
          </div>

        </CardContent>

      </Card>
  );
}
CardValidation.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(CardValidation);