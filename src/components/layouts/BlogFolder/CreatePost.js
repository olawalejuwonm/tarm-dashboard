import { CKEditor } from '@ckeditor/ckeditor5-react'
import React, { Component } from 'react'

export default class CreatePost extends Component {
    render() {
        return (
            <div>
                  <div className="container p-5">
  
  <form action="/">
    <div className="form-group">
      <label htmlFor="fname">Post Title:</label>
      <input type="text" className="form-control" id="email" />
    </div>
    <CKEditor/>
    <div className="form-group">
      <label htmlFor="email">Email address:</label>
      <input type="email" className="form-control" id="email" />
    </div>
    <div className="form-group">
      <label htmlFor="phone">Phone Number:</label>
      <input type="text" className="form-control" id="email" />
    </div>
    <div className="form-group">
      <label htmlFor="email">Upload Avatar:</label>
      <input type="file" className="form-control" id="email" />
    </div>
   
    <button type="submit" className="btn btn-default">Submit</button>
  </form>
</div>
            </div>
        )
    }
}
