import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';


const styles = theme => ({
    pillarContainer: {
      width: 300,
    },
  });


class PillarsForm extends Component{
    render(){
        const { classes } = this.props;
        return(
            <TextField className={classes.pillarContainer}
            label="Pillar"
            type="text"
            name="pillar"
            autoComplete="pillar"
            margin="normal"
            variant="outlined"
            />
        )
    }
}

export default withStyles(styles)(PillarsForm);
