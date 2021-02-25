import { CKEditor } from '@ckeditor/ckeditor5-react'
import React, { Component } from 'react'
import Ckeditor from './Ckeditor'

export default class CreatePost extends Component {
    render() {
        return (
            <div>
                  <div className="container p-5">
  
  <form action="/">
    <div className="form-group">
      <label htmlFor="fname">Post Title <sup> *</sup></label>
      <input type="text" className="form-control" id="email" />
    
    </div>
    <div className="form-group">
      <label htmlFor="email">Post <sup> *</sup> </label>
      <Ckeditor/>
    </div>
  
    <div className="form-group">
      <label htmlFor="email">Tags:</label>
      <input type="Text" className="form-control" id="email" placeholder="e.g builder, reality_conference_2019, ministers_only" />
    </div>
    
    
    <div className="form-group">
      <label htmlFor="email">Separate tags using comma,leaving no space in between,
Use same tags for different messages to group them</label>
    </div>
   
    <button type="submit" className="btn btn-primary mt-4 col-12">Submit</button>
  </form>
</div>
            </div>
        )
    }
}
