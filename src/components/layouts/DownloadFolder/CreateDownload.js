import { CKEditor } from '@ckeditor/ckeditor5-react'
import React, { Component } from 'react'
import Ckeditor from './Ckeditor'

export default class CreateDownloads extends Component {
    render() {
        return (
            <div>
                  <div className="container p-5 col-8">
  
  <form action="/">
    <div className="form-group mb-2">
      <label htmlFor="fname">Message Title <sup> *</sup></label>
      <input type="text" className="form-control" id="email" />
    
    </div>

    <div className="form-group mb-2">
      <label htmlFor="fname">Description <sup> *</sup></label>
      <input type="text" className="form-control" id="email" />
    </div>

    <div className="form-group mb-2">
      <label htmlFor="fname">Preached By <sup> *</sup></label>
      <input type="text" className="form-control" id="email" />
    </div>

    <div className="form-group mb-2">
      <label htmlFor="fname">Date Preached<sup> *</sup></label>
      <input type="Date" className="form-control" id="email" />
    </div>
    
      <div className="form-group mb-2">
      <label htmlFor="fname">Preached At <sup> *</sup></label>
      <input type="text" className="form-control" id="email" />
    </div>

    <div className="form-group mb-2">
      <label htmlFor="fname"> Resource Type</label>
      <select id='select'  className="form-control">
      <option value="Audio"> Audio</option>
      <option value="Video"> Video</option>

       </select>
    </div>

    <div className="form-group mt-2">
                  <label htmlFor="email">Tags:</label>
                  <input type="Text" className="form-control" id="email" placeholder="e.g builder, reality_conference_2019, ministers_only" />
                </div>


                <div className="form-group  mt-3">
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
