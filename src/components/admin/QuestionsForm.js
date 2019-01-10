import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import { withStyles } from '@material-ui/core/styles';


const styles = theme => ({
    questionContainer: {
      width: 300,
    },
  });

const subpillar = [
    {
        value: 'Sub Pillar 1',
        label: 'Sub Pillar 1',
    },
    {
        value: 'Sub Pillar 2',
        label: 'Sub Pillar 2',
    },
    {
        value: 'Sub Pillar 3',
        label: 'Sub Pillar 3',
    },
];

class QuestionForm extends Component{
    state = {
        subpillar: '',
      };

      handleChangeSubPillar = prop => event => {
        this.setState({ [prop]: event.target.value });
      };
    render(){
        const { classes } = this.props;
        return(
            <div>
                <TextField className={classes.questionContainer}
                label="Question"
                type="text"
                name="question"
                autoComplete="question"
                margin="normal"
                variant="outlined"
                />
                <br/>
                <TextField className={classes.questionContainer}
                select
                label="Sub Pillar"
                value={this.state.pillar}
                onChange={this.handleChangeSubPillar('subpillar')}
                helperText="Please select a sub pillar"
                margin="normal"
                variant="outlined"
                >
                {subpillar.map(option => (
                    <MenuItem key={option.value} value={option.value}>
                    {option.label}
                    </MenuItem>
                ))}
                </TextField>
            </div>
        )
    }
}

export default withStyles(styles)(QuestionForm);
