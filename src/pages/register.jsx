import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Button from '@material-ui/core/Button';


import { Link } from 'react-router-dom';

//import font awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'


library.add(faUser)
library.add(faEnvelope)

const styles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    margin: {
        margin: theme.spacing.unit,
    },
    textField: {
        flexBasis: 200,
    },
});

class Register extends React.Component {
    state = {
        username: '',
        password: '',
        confirmPassword: '',
        email: '',
        showPassword: false,
        showConfirmPassword: false
    };

    handleChange = prop => event => {
        this.setState({ [prop]: event.target.value });
    };

    handleClickShowPassword = () => {
        this.setState(state => ({ showPassword: !state.showPassword }));
    };

    handleClickShowConfirmPassword = () => {
        this.setState(state => ({ showConfirmPassword: !state.showConfirmPassword }));
    };

    handleSubmit = event => {
        event.preventDefault();
    }

    render() {
        const { classes } = this.props;

        return (
            <React.Fragment>
                <form onSubmit={this.handleSubmit} className={classes.root} style={{ flexDirection: 'column' }}>
                    <TextField
                        id="filled-adornment-username"
                        className={classNames(classes.margin, classes.textField)}
                        variant="filled"
                        label="Username"
                        value={this.state.username}
                        onChange={this.handleChange('username')}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment variant="filled" position="end">
                                    <FontAwesomeIcon icon="user" />
                                </InputAdornment>
                            ),
                        }}
                        style={{
                            marginBottom: -130
                        }}
                    />

                    <TextField
                        id="filled-adornment-email"
                        className={classNames(classes.margin, classes.textField)}
                        variant="filled"
                        label="Email"
                        value={this.state.email}
                        onChange={this.handleChange('email')}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment variant="filled" position="end">
                                    <FontAwesomeIcon icon="envelope" />
                                </InputAdornment>
                            ),
                        }}
                        style={{
                            marginBottom: -130
                        }}
                    />

                    <TextField
                        id="filled-adornment-password"
                        className={classNames(classes.margin, classes.textField)}
                        variant="filled"
                        type={this.state.showPassword ? 'text' : 'password'}
                        label="Password"
                        value={this.state.password}
                        onChange={this.handleChange('password')}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment variant="filled" position="end">
                                    <IconButton
                                        aria-label="Toggle password visibility"
                                        onClick={this.handleClickShowPassword}
                                    >
                                        {this.state.showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            ),
                        }}
                        style={{
                            marginBottom: -130
                        }}
                    />

                    <TextField
                        id="filled-adornment-password"
                        className={classNames(classes.margin, classes.textField)}
                        variant="filled"
                        type={this.state.showConfirmPassword ? 'text' : 'password'}
                        label="Password"
                        value={this.state.confirmPassword}
                        onChange={this.handleChange('confirmPassword')}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment variant="filled" position="end">
                                    <IconButton
                                        aria-label="Toggle password visibility"
                                        onClick={this.handleClickShowConfirmPassword}
                                    >
                                        {this.state.showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            ),
                        }}
                        style={{
                            marginBottom: -130
                        }}
                    />
                    
                    <Button 
                        variant="contained" 
                        color="primary" 
                        type="submit" 
                        className={classes.button}
                        style={{ 
                        marginBottom: 25
                    }}
                    >
                        Register
                    </Button>
                </form>
            </React.Fragment>
        );
    }
}

Register.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Register);