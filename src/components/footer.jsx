import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Icon from '@material-ui/core/Icon';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';

//import font awesome icons
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { faMusic } from '@fortawesome/free-solid-svg-icons'
import { faFolder } from '@fortawesome/free-solid-svg-icons'
import { faUsers } from '@fortawesome/free-solid-svg-icons'

library.add(faHome)
library.add(faMusic)
library.add(faFolder)
library.add(faUsers)

const styles = {
  root: {
    width: '100%',
  },
};

class Footer extends React.Component {
  state = {
    value: 'home',
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    const guest = (
      <BottomNavigation value={value} onChange={this.handleChange} className={classes.root}>
        <BottomNavigationAction label="Home" value="home" icon={<FontAwesomeIcon icon="home" />} />
        <BottomNavigationAction label="Songs" value="songs" icon={<FontAwesomeIcon icon="music" />} />
        <BottomNavigationAction label="Albulms" value="albulms" icon={<FontAwesomeIcon icon="folder" />} />
      </BottomNavigation>
    );
    const auth = (
      <BottomNavigation value={value} onChange={this.handleChange} className={classes.root}>
        <BottomNavigationAction label="Home" value="home" icon={<FontAwesomeIcon icon="home" />} />
        <BottomNavigationAction label="Songs" value="songs" icon={<FontAwesomeIcon icon="music" />} />
        <BottomNavigationAction label="Albulms" value="albulms" icon={<FontAwesomeIcon icon="folder" />} />
        <BottomNavigationAction label="Artists" value="artists" icon={<FontAwesomeIcon icon="users" />} />
      </BottomNavigation>
    );

    return (
      this.props.hasAuth ? auth : guest 
    );
  }
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Footer);