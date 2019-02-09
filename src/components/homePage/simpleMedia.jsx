import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Axios from 'axios';

//import font awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faPlay } from '@fortawesome/free-solid-svg-icons'
import { faShare } from '@fortawesome/free-solid-svg-icons'
import { faMusic } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { faCog } from '@fortawesome/free-solid-svg-icons'

library.add(faPlay)
library.add(faShare)
library.add(faMusic)
library.add(faHeart)
library.add(faCog)

const styles = {
  card: {
    maxWidth: '100%',
  },
  media: {
    height: 100,
  },
};

class MediaCard extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      data: '',
      liked: false,
      loading: false
    };
    this.onLike = this.onLike.bind(this);
    this.handleView = this.handleView.bind(this);
  }
  componentDidMount(){
    Axios
      .get('https://api.deezer.com/artist/'+this.props.artist, {
        params: {
          access_token: 'access_token'
        }
      })
      .then((res) => {
        this.setState({
          data: res
        });
      })
      .catch((error) => {
        console.log(error)
      });
  }

  onLike(){
    this.setState({
      liked: true
    });
  }

  handleView(){
    this.setState({
      loading: true
    });
  }

  render(){
    const { classes } = this.props;

    const actionButtons = (
      <React.Fragment>
        <Button size="small" color="primary" style={{ background: 'powderBlue', margin: 1 }} onClick={this.handleView}>
          { this.props.type === 'song' ? (
              <React.Fragment>
                { this.state.loading ? (
                  <React.Fragment>
                    <FontAwesomeIcon icon="cog" /> 
                    <span style={{ marginLeft: 5, fontSize: 10 }}> Loading..</span>
                  </React.Fragment>
                  ):(
                    <React.Fragment>
                      <FontAwesomeIcon icon="music" /> 
                      <span style={{ marginLeft: 5 }}> Listen</span>
                    </React.Fragment>
                  )
                }
              </React.Fragment>
            ) : (
              <React.Fragment>
                <FontAwesomeIcon icon="play" /> 
                <span style={{ marginLeft: 5, fontSize: 10 }}> Shuffle</span>
              </React.Fragment>) }
           
        </Button>
        
        <Button size="small" color="primary" style={{ background: 'powderBlue', margin: 1 }} onClick={this.onLike}>
          { this.props.action === 'like' ? (
            <React.Fragment>
              <FontAwesomeIcon icon="heart" style={{ color: 'red' }} />
              <span style={{ marginLeft: 5 }}> {this.state.liked ? 'Liked' : 'Like' }</span>
            </React.Fragment>
          ):(
            <React.Fragment>
              <FontAwesomeIcon icon="share" />
              <span style={{ marginLeft: 5, fontSize: 10 }}> Share</span>
            </React.Fragment>
          ) }
          
        </Button>
      </React.Fragment>
    );

    return (
      <Card className={classes.card} style={{ width: '100%' }}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={this.props.image}
            title={this.state.data.name}
          />
          <CardContent>
            {/*<Typography gutterBottom variant="h5" component="h2">
              {this.state.data.name}<h6>{this.props.artist}</h6>
              </Typography>*/}
            <h3>{this.props.artist}</h3>
            <Typography component="p">
              { this.props.type == 'artist' ? '': 'Artist Name'}
              {this.state.data.bio}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
        <center>
          { actionButtons }
        </center>
        </CardActions>
      </Card>
    );
  }
  

  
}


export default withStyles(styles)(MediaCard);