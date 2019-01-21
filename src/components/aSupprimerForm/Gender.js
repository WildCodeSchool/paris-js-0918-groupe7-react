import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

const styles = theme => ({
    // formControl: {
    //   margin: theme.spacing.unit * 3,
    // },
    // group: {
    //   margin: `${theme.spacing.unit}px 0`,
    // },
  });

class Gender extends Component {
    state = {
        value: '',
      };

      handleChange = event => {
        this.setState({ value: event.target.value });
      };

    render(){
        const { classes } = this.props;
        return(
                <FormControl component="fieldset" className={classes.formControl}>
                    <FormLabel className={classes.genderFlex} component="legend">Gender</FormLabel>
                        <RadioGroup row
                        aria-label="gender"
                        name="gender"
                        className={classes.group}
                        value={this.state.value}
                        onChange={this.handleChange}
                        >
                        <FormControlLabel
                        value="female"
                        control={<Radio color="primary" />}
                        label="Female"
                        labelPlacement="start"
                        />
                        <FormControlLabel
                        value="male"
                        control={<Radio color="primary" />}
                        label="Male"
                        labelPlacement="start"
                        />
                        </RadioGroup>
                </FormControl>
)};
}

export default withStyles(styles)(Gender);
