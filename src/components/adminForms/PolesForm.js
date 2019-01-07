import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import { withStyles } from '@material-ui/core/styles';


const styles = theme => ({
    poleContainer: {
      width: 300,
    },
  });

const pillar = [
    {
        value: 'Client',
        label: 'Client',
    },
    {
        value: 'Company',
        label: 'Company',
    },
    {
        value: 'Code',
        label: 'Code',
    },
];

class PolesForm extends Component{
    state = {
        pillar: '',
      };

      handleChangePillar = prop => event => {
        this.setState({ [prop]: event.target.value });
      };
    render(){
        const { classes } = this.props;
        return(
            <div>
                <TextField className={classes.poleContainer}
                label="Pole"
                type="text"
                name="pole"
                autoComplete="pole"
                margin="normal"
                variant="outlined"
                />
                <br/>
                <TextField className={classes.poleContainer}
                select
                label="Pillar"
                value={this.state.pillar}
                onChange={this.handleChangePillar('pillar')}
                helperText="Please select a pillar"
                margin="normal"
                variant="outlined"
                >
                {pillar.map(option => (
                    <MenuItem key={option.value} value={option.value}>
                    {option.label}
                    </MenuItem>
                ))}
                </TextField>
            </div>
        )
    }
}

export default withStyles(styles)(PolesForm);
