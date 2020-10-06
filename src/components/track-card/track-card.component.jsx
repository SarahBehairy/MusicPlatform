import React from 'react';
import './track-card.scss';

const TrackCard = ({onDeleteTrack, onSelectTrack, track, selected})=>{
    return(
        <div className={`${selected? selected === track.name? 'selected-track':'' : '' } track-card`} onClick={()=>onSelectTrack(track)}>
            <div className='track-info' >
                <span className='track-name'>{track.name} - {track.artist}</span>
                <span className='track-length'>{track.length}</span>
            </div>
            <span id='x-button' onClick={()=>onDeleteTrack(track)}>&#10006;</span>
        </div>
    )
}

export default TrackCard;