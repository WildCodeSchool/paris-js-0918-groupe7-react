import React, { Component } from 'react';
import axios from 'axios'

import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';


class DropMenu extends Component {

state = {
    dropDownMenu: null,
    answer: '',
    isLoading:false
}

componentDidMount() {
        //const token = localStorage.getItem("token");
        axios({
            url: 'http://localhost:3002/answers_possibilities',
        })
    .then(res => this.setState({ dropDownMenu:res.data.splice(8,12), isLoading:true}));
}

handleChange = prop => event => {
    this.setState({ [prop]: event.target.value });
};

    render(){
        if(!this.state.isLoading)
            return <div>Loading...</div>
            console.log(this.state)
        return(
            <div>
                <TextField
                select
                label=""
                onChange={this.handleChange('answer')}
                value={this.state.answer}
                helperText="Select your answer"
                margin="normal"
                variant="outlined"
                >
                {this.state.dropDownMenu.map((e, i) => (
                    <MenuItem key={i} value={e.value}>
                        {e.answer}
                    </MenuItem>
                ))}
                </TextField>
        </div>
        );
    }
}

export default (DropMenu);