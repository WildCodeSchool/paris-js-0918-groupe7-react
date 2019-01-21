// Import de base
import React, { Component } from 'react';

// Import MATERIEL UI
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  ageRangeContainer: {
    width: 200,
  },
});

const age_range = [
  {
      value: '-30',
      label: '-30',
  },
  {
      value: '30-39',
      label: '30-39',
  },
  {
      value: '40-49',
      label: '40-49',
  },
  {
      value: '50-59',
      label: '50-59',
  },
  {
      value: '60+',
      label: '60+',
      },
  ];

// Déclaration de la fonction stateless PasswordField
class AgeRange extends Component {
    state = {
        age_range: '',
      };

      handleChangeAgeRange = prop => event => {
        this.setState({ [prop]: event.target.value });
      };

    render(){
      const { classes } = this.props;
        return(
          <TextField className={classes.ageRangeContainer}
          select
          label="Age range"
          value={this.state.age_range}
          onChange={this.handleChangeAgeRange('age_range')}
          SelectProps={{
            MenuProps: {
              className: classes.menu,
            },
          }}
          helperText="Please select your age_range"
          margin="normal"
          variant="outlined"
          >
          {age_range.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        )
    }
}


export default withStyles(styles)(AgeRange);