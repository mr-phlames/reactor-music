import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Icon from '@material-ui/core/Icon';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';

const styles = {
    root: {
        width: 500,
    },
};

class BottomNav extends React.Component {
    state = {
        value: 'home',
    };

    

    renderAuth = () => {
        return this.props.hasAuth ? (
            <BottomNavigation value={ this.state.value } position="fixed" onChange={(event, value)=>{
                this.setState({ value });
            }} className={ this.props.classes.root } style={{ diplay: 'flex', width: '100%'}}>
                <BottomNavigationAction label="Home" value="home" icon={<Icon>home</Icon>} />
                <BottomNavigationAction label="Artists" value="artists" icon={<RestoreIcon />} />
                <BottomNavigationAction label="Songs" value="songs" icon={<LocationOnIcon />} />
                <BottomNavigationAction label="Albulms" value="albulms" icon={<Icon>folder</Icon>} />
            </BottomNavigation>
        ) : (
            <BottomNavigation value={ this.props.value } style={{ diplay: 'flex', width: '100%'}} onChange={this.handleChange} className={ this.props.classes.root } onChange={(event, value)=>{
                this.setState({ value });
            }} >
                <BottomNavigationAction label="Home" value="home" icon={<Icon>home</Icon>} />
                <BottomNavigationAction label="Login" value="login" icon={<LocationOnIcon />} />
                <BottomNavigationAction label="Register" value="register" icon={<FavoriteIcon />} />
            </BottomNavigation>
        ) ;
    }

    render() {
        return this.renderAuth();
    }
}

BottomNav.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BottomNav);