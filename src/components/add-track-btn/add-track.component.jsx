import React from 'react';
import { Component } from 'react';
import AddTrackForm from '../add-track-form/add-track-form.component';
import './add-track-btn.scss'



class AddTrackBtn extends Component{
    constructor(props){
        super(props);
        this.state={
          clicked: false
        }
    }

    AddTrack = (clicked)=>{
        this.setState({clicked: true})
    }
    cancelAddition = ()=>{
        this.setState({clicked: false});
    }
    
    submitTrack = (formData)=>{
        this.setState({clicked: !this.state.clicked })
        this.props.onAddTrack(formData);
          
    }

    render(){ 
        const {clicked} = this.state;
        return(
   
    <div className='add-track'>
        <button className='add-track-btn' onClick={this.AddTrack} >ADD NEW TRACK</button>
        {
            clicked?
            <AddTrackForm clicked={this.submitTrack} onAddtrack={this.props.onAddtrack} cancel={this.cancelAddition}/>
            :
            null
        }
        
        
    </div>
    )  

    }

}
export default AddTrackBtn;