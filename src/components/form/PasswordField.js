// Import de base
import React, { Component } from 'react';

// Import MATERIEL UI
import TextField from '@material-ui/core/TextField';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';

// Déclaration de la fonction stateless PasswordField
class PasswordField extends Component {
    state = {
        showPassword: false,
      };

      handleClickShowPassword = () =>{
          this.setState(state => ({ showPassword: !state.showPassword}));
      }

      handleChangePassword = prop => event => {
        this.setState({ [prop]: event.target.value });
      };

    render(){
        return(
            <TextField
            variant="outlined"
            type={this.state.showPassword ? 'text' : 'password'}
            label="Password"
            value={this.state.password}
            onChange={this.handleChangePassword('password')}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="Toggle password visibility"
                    onClick={this.handleClickShowPassword}
                  >
                    {this.state.showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        )
    }
}

export default PasswordField;