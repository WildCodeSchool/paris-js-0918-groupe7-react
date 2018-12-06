// Import de base
import React, { Component } from 'react';

// Import MATERIEL UI
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    seniorityContainer: {
      width: 300,
    },
});

const seniority = [
    {
        value: '-5',
        label: '-5',
    },
    {
        value: '5-9',
        label: '5-9',
    },
    {
        value: '10-14',
        label: '10-14',
    },
    {
        value: '15-19',
        label: '15-19',
    },
    {
        value: '20+',
        label: '20+',
        },
    ];


// Déclaration de la fonction stateless PasswordField
class Seniority extends Component {
  state = {
    seniority: ''
   };

   handleChangeSeniority = prop => event => {
     this.setState({ [prop]: event.target.value });
   };

    render(){
      const { classes } = this.props;
        return(
          <TextField className={classes.seniorityContainer}
          select
          label="Seniority"
          value={this.state.seniority}
          onChange={this.handleChangeSeniority('seniority')}
          helperText="Please select your seniority"
          margin="normal"
          variant="outlined"
        >
          {seniority.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        )
    }
}


export default withStyles(styles)(Seniority);