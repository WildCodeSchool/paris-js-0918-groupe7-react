// Import de base
import React, { Component } from 'react';

// Import MATERIEL UI
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
});

const department = [
  {
      value: 'Administration',
      label: 'Administration',
  },
  {
      value: 'Audit',
      label: 'Audit',
  },
  {
      value: 'Branch network',
      label: 'Branch network',
  },
  {
      value: 'Commercial and Client relationship management',
      label: 'Commercial and Client relationship management',
  },
  {
      value: 'Communication',
      label: 'Communication',
  },
  {
      value: 'Executive Commitee member',
      label: 'Executive Commitee member',
  },
  {
      value: 'Finance and Accounting member',
      label: 'Finance and Accounting member',
  },
  {
      value: 'Human Resources',
      label: 'Human Resources',
  },
  {
      value: 'Information technology',
      label: 'Information technology',
  },
  {
      value: 'Legal and Compliance',
      label: 'Legal and Compliance',
  },
  {
      value: 'Marketing and Distribution',
      label: 'Marketing and Distribution',
  },
  {
      value: 'Operations',
      label: 'Operations',
  },
  {
      value: 'Purchasing',
      label: 'Purchasing',
  },
  {
      value: 'Risk',
      label: 'Risk',
  },
  ];

// Déclaration de la fonction stateless PasswordField
class Department extends Component {
    state = {
        department: '',
      };

      handleChangeDepartment = prop => event => {
        this.setState({ [prop]: event.target.value });
      };

    render(){
      const { classes } = this.props;
        return(
          <TextField
          select
          label="Department"
          value={this.state.department}
          onChange={this.handleChangeDepartment('department')}
          SelectProps={{
            MenuProps: {
              className: classes.menu,
            },
          }}
          helperText="Please select your department"
          margin="normal"
          variant="outlined"
          >
          {department.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        )
    }
}


export default withStyles(styles)(Department);