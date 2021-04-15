import { CKEditor } from '@ckeditor/ckeditor5-react'
import React, { Component } from 'react'
import Ckeditor from './Ckeditor'

export default class CreateProject extends Component {
  render() {
    return (
      <div>
        <div className="container p-5">

          <form action="/" className="create-form m-auto">
            <div className="form-group">
              <label htmlFor="fname">Project Title <sup> *</sup></label>
              <input type="text" className="form-control" id="email" />

            </div>

            <div className="form-group">
              <label htmlFor="fname">Project Description <sup> *</sup></label>
              <input type="text" className="form-control" id="email" />
            </div>

            <div className="form-group">
              <label htmlFor="fname">Start Date<sup> *</sup></label>
              <input type="Date" className="form-control" id="email" />

            </div>


            <div className="form-group">
              <label htmlFor="edate">Due Date<sup> *</sup></label>
              <input type="Date" className="form-control" id="edate" />
            </div>

            <div className="form-group">
              <label htmlFor="fname">Project Estimated Cost <sup> *</sup></label>
              <input type="text" className="form-control" id="email" />
            </div>




            <div className="form-group">
              <label htmlFor="fname"> Project Category <sup> *</sup></label>
              <select id='select' className="form-control">
                <option value="Building"> Building</option>
                <option value="Procurement"> Procurement</option>
                <option value="Outreach"> Outreach</option>
                <option value="Others"> Others</option>

              </select>
            </div>



            <button type="submit" className="btn btn-primary mt-4">Submit</button>
          </form>
        </div>
      </div>
    )
  }
}
