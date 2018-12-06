import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';


const styles = theme => ({
    emailContainer: {
      width: 300,
    },
  });


class EmailField extends Component{
    render(){
        const { classes } = this.props;
        return(
            <TextField className={classes.emailContainer}
            label="Email"
            type="email"
            name="email"
            autoComplete="email"
            margin="normal"
            variant="outlined"
            />
        )
    }
}

export default withStyles(styles)(EmailField);
