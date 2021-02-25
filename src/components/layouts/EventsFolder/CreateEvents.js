import { CKEditor } from '@ckeditor/ckeditor5-react'
import React, { Component } from 'react'
import Ckeditor from './Ckeditor'

export default class CreateEvents extends Component {
    render() {
        return (
            <div>
                  <div className="container p-5">
  
  <form action="/">
    <div className="form-group">
      <label htmlFor="fname">Event Title <sup> *</sup></label>
      <input type="text" className="form-control" id="email" />
    
    </div>

    <div className="form-group">
      <label htmlFor="fname">Event Description <sup> *</sup></label>
      <input type="text" className="form-control" id="email" />
    </div>

    <div className="form-group">
      <label htmlFor="fname">Start Date<sup> *</sup></label>
      <input type="Date" className="form-control" id="email" />
    
    </div>
    <div className="form-group">
      <label htmlFor="fname">Start Time<sup> *</sup></label>
      <input type="Time" className="form-control" id="email" />
    
    </div>

    <div className="form-group">
      <label htmlFor="edate">End Date<sup> *</sup></label>
      <input type="Date" className="form-control" id="edate" />
    </div>

    <div className="form-group">
      <label htmlFor="etime">End Time<sup> *</sup></label>
      <input type="Time" className="form-control" id="etime" />
    </div>


    
    <div className="form-group">
      <label htmlFor="fname"> Does Event Require Registration? <sup> *</sup></label>
      <select id='select'  className="form-control">
      <option value="Yes"> Yes</option>
      <option value="No"> No</option>

       </select>
    </div>

    <div className="form-group">
      <label htmlFor="fname">Event Venue<sup> *</sup></label>
      <input type="text" className="form-control" id="Evenue" />
    </div>
    <div className="form-group">
      <label htmlFor="fname">Venue Address<sup> *</sup></label>
      <input type="text" className="form-control" id="eVAddress" />
    </div>
    <div className="form-group">
      <label htmlFor="pcat">Participant Category<sup> *</sup></label>
      <input type="text" className="form-control" id="pcat" />
    </div>

    <div className="form-group">
      <label htmlFor="fname"> Is This Event For A Center?</label>
      <select id='select'  className="form-control">
      <option value="Yes"> Yes</option>
      <option value="No"> No</option>

       </select>
    </div>

    <div className="form-group">
      <label htmlFor="fname"> Is This Event For A Center?</label>
      <select id='select'  className="form-control">
      <option value="Yes"> Fetch center from database and pass to options with for loop when option yes is selected</option>
      <option value="No"> </option>

       </select>
    </div>

   
    <button type="submit" className="btn btn-primary mt-4 col-12">Submit</button>
  </form>
</div>
            </div>
        )
    }
}
