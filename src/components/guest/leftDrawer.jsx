import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Icon from '@material-ui/core/Icon';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
//import CogIcon from '@material-ui/icons/Cog';
import MailIcon from '@material-ui/icons/Mail';

const styles = {
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
};

class LeftDrawer extends React.Component {

  

  render() {
    const { classes } = this.props;

    const profileSection = (
      <div class="profileContainer">
        <div class="profilePic" style={{ 
          background: 'gold', borderRadius: '50%', border: '7px solid black', padding: 0, width: 230 ,height: 230
         }}></div>
        <h3>Username</h3>
        <h5>Something</h5>
      </div>
    );

    const sideList = (
      <div className={classes.list}>
        { profileSection }
        <List>
            <ListItem>
              <ListItemIcon><i class="fa fa-home"></i> </ListItemIcon>
              <ListItemText>Home</ListItemText>
            </ListItem>
        </List>
        <Divider />
        <List>
            <ListItem>
              <ListItemIcon><i class="fa fa-music"></i> </ListItemIcon>
              <ListItemText>Songs</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemIcon><i class="fa fa-users"></i> </ListItemIcon>
              <ListItemText>Artists</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemIcon><i class="fa fa-box"></i> </ListItemIcon>
              <ListItemText>Albulms</ListItemText>
            </ListItem>
        </List>
        <List>
            <ListItem>
              <ListItemIcon><i class="fa fa-cogs"></i></ListItemIcon>
              <ListItemText>Settings</ListItemText>
            </ListItem>
        </List>
      </div>
    );

    return (
      <div>
        <SwipeableDrawer
          open={this.props.left}
          onClose={this.props.onClose} 
          onOpen={this.props.onOpen}
        >
          <div
            tabIndex={0}
            role="button"
            onClick={this.props.onDrawerClick}
            onKeyDown={this.props.onDrawerKeyDown}
          >
            {sideList}
          </div>
        </SwipeableDrawer>
      </div>
    );
  }
}

LeftDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LeftDrawer);
