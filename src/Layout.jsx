import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
//import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
//import InboxIcon from '@material-ui/icons/MoveToInbox';
//import MailIcon from '@material-ui/icons/Mail';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
//import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import Avatar from '@material-ui/core/Avatar';
import LinearProgress from '@material-ui/core/LinearProgress';

import Footer from './components/footer'

// for routing 
import { Switch, Route, Link } from 'react-router-dom'

//page imports
import Home from './pages/home'
import Login from './pages/login'
import Register from './pages/register'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

//import font awesome icons
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { faUsers } from '@fortawesome/free-solid-svg-icons'
import { faCogs } from '@fortawesome/free-solid-svg-icons'
import { faFolder } from '@fortawesome/free-solid-svg-icons'
import { faMusic } from '@fortawesome/free-solid-svg-icons'


library.add(faHome)
library.add(faUsers)
library.add(faCogs)
library.add(faFolder)
library.add(faMusic)


const drawerWidth = 240;

const styles = theme => ({
  root: {
    display: 'flex',
  },
  grow: {
      flexGrow: 1,
      flexShrink: 1
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 20,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: '0 8px',
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginTop: 60,
    marginLeft: -18
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  bigAvatar: {
    margin: 0,
    width: 30,
    height: 30,
  },
});

class Layout extends React.Component {
  state = {
    open: false,
    hasAuth: false
  };

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  componentDidMount(){
    const token = localStorage.getItem('token');
    if(token && token.length > 10){
      this.setState({ hasAuth: true });
    }
    this.setState();
  }

  render() {
    const { classes, theme } = this.props;
    const { open } = this.state;

    const guestBar = (
      <React.Fragment>
        <span>
            <Button color="inherit">
                <Link to="/login" style={{ textDecoration: 'none', color: 'white' }}>Login</Link>
            </Button>
        </span>
        <span>
            <Button color="inherit">
                <Link to="/register" style={{ textDecoration: 'none', color: 'white' }}>Register</Link>
            </Button>
        </span>
      </React.Fragment>
    );

    const userBar = (
        <span style={{ display: 'flex', flexDirection: 'row' }}>
            <div className={classes.grow} />
            <div className={classes.sectionDesktop}>
                <IconButton color="inherit">
                    <Badge badgeContent={17} color="secondary">
                        <NotificationsIcon />
                    </Badge>
                </IconButton>
                <IconButton color="inherit">
                    <Badge badgeContent={1} color="secondary">
                        <Avatar alt="User" src="" className={classes.bigAvatar} />
                    </Badge>
                </IconButton>
            </div>
            <div className={classes.sectionMobile}>
                <IconButton 
                    aria-haspopup="true" 
                    onClick={this.handleMobileMenuOpen} 
                    color="inherit">
                    <MoreIcon />
                </IconButton>
            </div>
        </span>
    );

    const AppBarComponent = (
        <AppBar
          position="fixed"
          className={classNames(classes.appBar, {
            [classes.appBarShift]: open,
          })}
        >
          <Toolbar disableGutters={!open}>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={this.handleDrawerOpen}
              className={classNames(classes.menuButton, open && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" style={{ float: 'left' }}>
                Reactor
            </Typography>
            <div className={classes.grow} style={{ flexShrink: 2 }} />
            <span>{ this.state.hasAuth ? userBar : guestBar }</span>
          </Toolbar>
        </AppBar>
        
    );

    const profileSection = (
      <center class="profileContainer">
        <br />
        <div class="profilePic" style={{ 
          background: 'gold', borderRadius: '50%', border: '7px solid black', padding: 0, width: 180 ,height: 180
         }}>
         <br/><br/><br/><br/>
         User<br/>Image
        </div>
        <br />
        <Divider />
        <h3 style={{ fontFamily: 'cursive', fontSize: 20 }}>
            { this.state.hasAuth ? 'Username' : 'Guest User' }
        </h3>
        { this.state.hasAuth ? <h4 style={{ fontFamily: 'serif' }}>Something</h4> : '' }
      </center>
    );

    const profile2Section = (
      <center class="profileContainer" style={{ display: 'flex', flexDirection: 'row' }}>
        <div style={{ padding: 10 }}>
          <div class="profilePic" style={{ 
            background: 'gold', borderRadius: '50%', border: '7px solid black', padding: 0, width: 120 ,height: 120
          }}>
            <br/><br/>
            User<br/>Image
          </div>
        </div>
        
        <h3 style={{ fontFamily: 'cursive', fontSize: 20, display: 'flex', flexDirection: 'column' }}>
          <center>
            { this.state.hasAuth ? 'Username' : 'Guest User' }
            { this.state.hasAuth ? <h4 style={{ fontFamily: 'serif' }}>Something</h4> : '' }
          </center>
        </h3>
      </center>
    );

    const DrawerComponent = (
        <SwipeableDrawer
            className={classes.drawer}
            variant="swipeable"
            anchor="left"
            open={open}
            classes={{
                paper: classes.drawerPaper,
            }}
            >
                <div className={classes.drawerHeader}>
                    <IconButton onClick={this.handleDrawerClose}>
                    {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}<h5>Close</h5>
                    </IconButton>
                </div>
                <Divider />
                <List>
                    { this.state.hasAuth ? profile2Section : profileSection }
                    <Divider/>
                    <ListItem>
                        <ListItemIcon>
                          <FontAwesomeIcon icon="home" />
                        </ListItemIcon>
                        <ListItemText>
                          <Link to="/home" style={{ textDecoration: 'none' }}>Home</Link>
                        </ListItemText>
                    </ListItem>
                    <ListItem>
                        <ListItemIcon>
                          <FontAwesomeIcon icon="music" />
                        </ListItemIcon>
                        <ListItemText>
                          <Link to="/songs" style={{ textDecoration: 'none' }}>Songs</Link>
                        </ListItemText>
                    </ListItem>
                    <ListItem>
                        <ListItemIcon>
                          <FontAwesomeIcon icon="users" />
                        </ListItemIcon>
                        <ListItemText>
                          <Link to="/artists" style={{ textDecoration: 'none' }}>Artists</Link>
                        </ListItemText>
                    </ListItem>
                    <ListItem>
                        <ListItemIcon>
                          <FontAwesomeIcon icon="folder" />
                        </ListItemIcon>
                        <ListItemText>
                          <Link to="/albulms" style={{ textDecoration: 'none' }}>Albulms</Link>
                        </ListItemText>
                    </ListItem>
                </List>
                
                {
                  this.state.hasAuth ? (
                    <React.Fragment>
                      <Divider />
                      <List>
                          <ListItem>
                              <ListItemIcon>
                                <FontAwesomeIcon icon="cogs" />
                              </ListItemIcon>
                              <ListItemText>
                                <Link to="/settings" style={{ textDecoration: 'none' }}>Settings</Link>
                              </ListItemText>
                          </ListItem>
                          <ListItem>
                              <ListItemText>
                                <center>
                                  <h5>
                                    &copy; { new Date().getFullYear() }<br />
                                    Sxrypt LLC.
                                  </h5>
                                </center>
                              </ListItemText>
                          </ListItem>
                      </List>
                    </React.Fragment>
                  ):(
                    <ListItem>
                        <ListItemText>
                          <h5>
                            &copy; { new Date().getFullYear() }
                            <br/>
                            Sxrypt LLC
                          </h5>
                        </ListItemText>
                    </ListItem>
                  )
                }
                
            </SwipeableDrawer>
    );

    return (
      <React.Fragment>
      <div className={classes.root}>
        <LinearProgress />
        <CssBaseline />
        { AppBarComponent }
        { DrawerComponent }
        <div className={classes.drawerHeader} />
        <main
          position="fixed"
          className={classNames(classes.content, {
            [classes.contentShift]: open,
          })}
        >
          <div style={{ margin: 0 }}>
            <Switch>
                <Route exact path={'/'} component={Home} />
                <Route path={'/home'} component={Home} />
                <Route path={'/login'} component={Login} />
                <Route path={'/register'} component={Register} />

                <Route path={'/artists'} component={Register} />
                <Route path={'/albulms'} component={Register} />
                <Route path={'/songs'} component={Register} />
                <Route path={'/songs'} component={Register} />
            </Switch>
          </div>
        </main>
      </div>
      <Footer hasAuth={this.state.hasAuth} style={{ bottom: 0 }} />
      </React.Fragment>
    );
  }
}

Layout.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(Layout);
