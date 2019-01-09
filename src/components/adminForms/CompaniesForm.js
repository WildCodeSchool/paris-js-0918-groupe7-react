import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';


const styles = theme => ({
    companyContainer: {
      width: 300,
    },
  });


class CompaniesForm extends Component{
    render(){
        const { classes } = this.props;
        return(
            <TextField className={classes.companyContainer}
            label="Company"
            type="text"
            name="company"
            autoComplete="company"
            margin="normal"
            variant="outlined"
            />
        )
    }
}

export default withStyles(styles)(CompaniesForm);
