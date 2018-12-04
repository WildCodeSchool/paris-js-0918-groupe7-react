import React from 'react';
import TextField from '@material-ui/core/TextField';

const EmailField = () => {
    return (
    <TextField
        className="email-input"
        label="Email"
        type="email"
        name="email"
        autoComplete="email"
        margin="normal"
        variant="outlined"
    />
)};

export default EmailField;