import React from 'react';
import TrackCard from '../track-card/track-card.component';
import './track-collection.css';

const TrackCollection = ({tracks, onDeleteTrack, onSelectTrack, selected})=>{


    return(<div>
         <div className='track-collection'>
            {
                tracks.length?

                tracks.map(track => 
                (
                <TrackCard 
                key= {track.id}
                onDeleteTrack={onDeleteTrack} 
                onSelectTrack={onSelectTrack}
                track={track}
                selected = {selected} 
                />
                )
                )
                :
                <span className='empty-message'>No tracks to show</span>
                }
        </div>
    </div>
        
    )
}

export default TrackCollection;