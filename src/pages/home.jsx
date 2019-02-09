import React from 'react';
import PaperSheet from './../components/homePage/paper';
import Panels from './../components/homePage/panels';
import MediaCard from './../components/homePage/simpleMedia';
import Typography from '@material-ui/core/Typography';

export default class Home extends React.Component {
    constructor(){
        super();
        this.state={
            hasAuth: false,
            test: true
        }
    }

    componentDidMount(){
        let token = localStorage.getItem('token');
        return token && token.length === 10 ? this.setState({
            hasAuth: true
        }): '';
    }
    render(){
        return (
            <center>
                <PaperSheet>
                    <center className="image">
                        <div style={{ border: '7px solid black', borderRadius: '10%', background: 'blue', width: 80, height: 75 }}>
                            <br />
                            <span style={{ 
                                fontSize: 15,
                                fontWeight: 'bold',
                                fontFamily: 'cursive'
                             }}>Reactor</span>
                        </div>
                    </center>
                    <br/>
                    <Typography variant="h5" component="h3">
                        Welcome to Reactor Musiq
                    </Typography>
                    <Typography component="p">
                        Over here at Reactor Musiq, we bring the greatest collections of music from all around the world right to your door step. Stream music here, search for songs, albulms and artists with our Musiq search
                    </Typography>
                </PaperSheet>
                <Panels />
                <br />
                { this.state.test ? (
                    <React.Fragment>
                        <h3 style={{ fontFamily: 'cursive', fontSize: 22 }}>Top Artists</h3>
                        <center style={{ display: 'flex' }}>
                            <MediaCard artist="eminem" image="http://api.deezer.com/artist/13/image" type="artist" />
                            <MediaCard artist="NF" image="https://api.deezer.com/artist/1037707/image" type="artist" />
                        </center>
                    </React.Fragment>
                    
                ) : (
                    ''
                ) }
                <h3 style={{ fontFamily: 'cursive', fontSize: 22 }}>Top Tracks</h3>
                <center style={{ display: 'flex' }}>
                    <MediaCard artist="You Say" type="song" action="like" image="https://api.deezer.com/artist/5880172/image" />
                    <MediaCard artist="What Lovers Do" type="song" action="like" image="https://api.deezer.com/album/65500722/image" />
                </center>
                <h3 style={{ fontFamily: 'cursive', fontSize: 22 }}>Top Albulms</h3>
                <center style={{ display: 'flex' }}>
                    <MediaCard artist="Kamikaze" action="like" image="https://api.deezer.com/album/72000342/image" />
                    <MediaCard artist="Perception" action="like" image="https://api.deezer.com/album/49096702/image" />
                </center>
                <br />
                <PaperSheet>
                    <Typography variant="h5" component="h3">
                        Enjoying Reactor Musiq?
                    </Typography>
                    <Typography component="p">
                        Subscribe to get free bonuses
                    </Typography>
                </PaperSheet>
                <h3 style={{ fontFamily: 'cursive', fontSize: 22 }}>Reactor Music Library</h3>
                <center style={{ display: 'flex' }}>
                    <MediaCard artist="You Say" type="song" action="like" image="https://api.deezer.com/artist/5880172/image" />

                    <MediaCard artist="Skeletons" type="song" action="like" image="https://api.deezer.com/album/69804312/image" />
                </center>
                <center style={{ display: 'flex' }}>
                    <MediaCard artist="Psycho" type="song" action="like" image="https://api.deezer.com/album/74122072/image" />

                    <MediaCard artist="Sauce It Up" type="song" action="like" image="https://api.deezer.com/album/97745/image" />
                </center>
                <center style={{ display: 'flex' }}>
                    <MediaCard artist="Silence" type="song" action="like" image="https://api.deezer.com/album/68566141/image" />

                    <MediaCard artist="Undefeated" type="song" action="like" image="https://api.deezer.com/album/51491152/image" />
                </center>
                <center style={{ display: 'flex' }}>
                    <MediaCard artist="Rockstar" type="song" action="like" image="https://api.deezer.com/album/62183462/image" />

                    <MediaCard artist="I like It" type="song" action="like" image="https://api.deezer.com/album/80929902/image" />
                </center>
                <center style={{ display: 'flex' }}>
                    <MediaCard artist="Plain Jane" type="song" action="like" image="https://api.deezer.com/album/46196432/image" />

                    <MediaCard artist="Worth It" type="song" action="like" image="https://api.deezer.com/album/80585132/image" />
                </center>
                <center style={{ display: 'flex' }}>
                    <MediaCard artist="Can't Say" type="song" action="like" image="https://api.deezer.com/album/69804312/image" />

                    <MediaCard artist="Beast Mode" type="song" action="like" image="https://api.deezer.com/album/82966082/image" />
                </center>
                <center style={{ display: 'flex' }}>
                    <MediaCard artist="Go Flex" type="song" action="like" image="https://api.deezer.com/album/14781033/image" />

                    <MediaCard artist="I Fall Apart" type="song" action="like" image="https://api.deezer.com/album/14781033/image" />
                </center>
                <center style={{ display: 'flex' }}>
                    <MediaCard artist="Gucci Gang" type="song" action="like" image="https://api.deezer.com/album/49305962/image" />

                    <MediaCard artist="Consequences" type="song" action="like" image="https://api.deezer.com/album/54496412/image" />
                </center>
            </center>
        );
    }
}