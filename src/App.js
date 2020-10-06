import React, { Component } from 'react';
import SearchBox from './components/search-box/search-box.component';
import TrackCollection from './components/track-collection/track-collection.component';
import AddTrackBtn from './components/add-track-btn/add-track.component';
import './App.css';


class App extends Component {
  constructor(){
    super();
    this.state={
      tracks: [],
      searchfield:'',
      selected: {}
    }
  }

 

  componentDidMount(){
    let tracksWithId = [];
    //Api request to get default tracks
    fetch('https://api.jsonbin.io/b/5f69e387302a837e956b59b5')
      .then(response=>response.json())
      .then(defaultTracks=>
        {
           defaultTracks.tracks.map(track=>{
            track.id = (track.name+track.artist).replace(/ /g,'').toLowerCase();
            tracksWithId.push(track);
          })
          
          this.setState({tracks: tracksWithId});
        }
      )
      .catch(err=> console.error(err))
    
      
  }

  onSearchChange = (event) =>{
    this.setState({ searchfield: event.target.value })
  }

  onAddTrack = (formData) =>{
    let updatedTracks = this.state.tracks;
    formData.id = (formData.name+formData.artist).replace(/ /g,'').toLowerCase();
    updatedTracks.push(formData);
    this.setState({tracks:updatedTracks})
  }

  onDeleteTrack = (trackToDelete) =>{
    let oldTracks = this.state.tracks;
    let updatedTracks = oldTracks.filter(track=>{return track.id !== trackToDelete.id});
    this.setState({tracks: updatedTracks}); 
    
    
    
  }

  onSelectTrack = (track) =>{
    this.setState({selected: track})
  }

  render(){
    const {tracks, searchfield, selected} = this.state;

    const filteredTracks = tracks.filter(track =>{
      return track.name.toLowerCase().includes(searchfield.toLowerCase());
    });

    return(
    <div className="App">
      <p className='search'>Search:</p>
      <SearchBox searchChange={this.onSearchChange}/>
      
      <audio controls
      className='audio'
       src={selected.url} type="video/mp4"
      />
      
      <TrackCollection tracks={filteredTracks} onDeleteTrack={this.onDeleteTrack} onSelectTrack={this.onSelectTrack} selected={selected.name}/>
      <AddTrackBtn onAddTrack={this.onAddTrack} />
    </div>
  );
  }
}

export default App;
