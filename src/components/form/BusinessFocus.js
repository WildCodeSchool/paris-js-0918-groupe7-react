// Import de base
import React, { Component } from 'react';

// Import MATERIEL UI
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
});

const business_focus = [
    {
        value: 'Corporate ans Investissement Banking',
        label: 'Corporate ans Investissement Banking',
    },
    {
        value: 'Fintech and start-up',
        label: 'Fintech and start-up',
    },
    {
        value: 'Insurance',
        label: 'Insurance',
    },
    {
        value: 'Private Banking',
        label: 'Private Banking',
    },
    {
        value: 'Retail Banking',
        label: 'Retail Banking',
    },
    {
        value: 'Specialized Financial Services (Consumer Finance, Leasing, ...)',
        label: 'Specialized Financial Services (Consumer Finance, Leasing, ...)',
    },
    ];

// Déclaration de la fonction stateless PasswordField
class BusinessFocus extends Component {
    state = {
        business_focus: '',
      };

      handleChangeBusinessFocus = prop => event => {
        this.setState({ [prop]: event.target.value });
      };

    render(){
      const { classes } = this.props;
        return(
          <TextField
          select
          label="Business Focus"
          value={this.state.business_focus}
          onChange={this.handleChangeBusinessFocus('business_focus')}
          SelectProps={{
            MenuProps: {
              className: classes.menu,
            },
          }}
          helperText="Please select your business_focus"
          margin="normal"
          variant="outlined"
          >
          {business_focus.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        )
    }
}


export default withStyles(styles)(BusinessFocus);