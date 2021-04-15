import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { CKEditor } from '@ckeditor/ckeditor5-react'
import Ckeditor from './Ckeditor'
import { AccessAlarm, ThreeDRotation } from '@material-ui/icons';
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';

export default class CreatePost extends Component {
  render() {
    return (
      <div>
        <div className="container p-5 create-blog-alignment">
          <div className="row d-flex justify-content-between">
            <div class="col-10 col-md-5 mx-1">

              <form className="w-100 d-flex justify-content-center flex-column m-auto" action="/">
                <div className="form-group blog-form">
                  <label htmlFor="fname">Post Title </label>
                  <input type="text" className="form-control" id="email" />

                </div>
                <div className="form-group mt-2 blog-form">
                  <label htmlFor="email">Post </label>

                  <Ckeditor />
                </div>

                <div className="form-group mt-2">
                  <label htmlFor="email">Tags:</label>
                  <input type="Text" className="form-control" id="email" placeholder="e.g builder, reality_conference_2019, ministers_only" />
                </div>


                <div className="form-group  mt-3">
                  <label htmlFor="email">Separate tags using comma, leaving no space in between,
                    Use same tags for different messages to group them</label>
                </div>

                <button type="submit" className="btn btn-primary mt-4 w-100">Submit</button>
              </form>
            </div>
            <div className="col-10 col-md-5 mx-1 createPost-icon">
            <Link to="/" className="btn text-dark d-block"><CloudDownloadIcon style={{ color: "secondary", fontSize: 170 }}></CloudDownloadIcon></Link>
            <Link to="/" className="btn text-white  btn-primary w-100  text-center rounded-0">Add feature image </Link>

            </div>
          </div>
        </div>
      </div>
    )
  }
}

