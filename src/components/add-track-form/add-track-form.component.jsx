import React from 'react';
import { Component } from 'react';
import FormInput from '../form-input/form-input.component';
import './add-track-form.css';

class AddTrackForm extends Component{ 
    constructor(props){
        super(props);
        this.state={
            name:'',
            artist: '',
            length: '',
            url:'' 
        }
    }

    handleChange = (event) => {
        const { value, name } = event.target;
    
        this.setState({ [name]: value });
      }
    
      onSubmit = (event)=>{
        const {name, artist, length, url} = this.state;
        const formData = {
          name,
          artist,
          length,
          url
        }
        event.preventDefault();
        this.props.clicked(formData);
      }
      
    
    render(){
    return(
    <div>
      <form className='add-track-form' onSubmit={this.onSubmit}>
        <FormInput
            name='name'
            type='text'
            handleChange={this.handleChange}
            value={this.state.name}
            label='Name'
            required
          />
          <FormInput
            name='length'
            type='text'
            handleChange={this.handleChange}
            value={this.state.length}
            label='Length'
            required
          />
          <FormInput
            name='artist'
            type='text'
            handleChange={this.handleChange}
            value={this.state.artist}
            label='Artist'
            required
          />
          <FormInput
            name='url'
            type='text'
            handleChange={this.handleChange}
            value={this.state.url}
            label='Url'
            required
          />
          <div className='form-buttons'>
          <button>Submit</button>
          <input type="submit" value="Cancel" onClick={this.props.cancel}/>
          </div>
        
        </form>
        
    </div>
    
        
  
);
}
}

export default AddTrackForm;