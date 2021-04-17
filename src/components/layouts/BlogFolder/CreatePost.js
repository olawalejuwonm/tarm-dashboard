import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import CloudDownloadIcon from "@material-ui/icons/CloudDownload";
import { Affect, api, postfile } from "../../shared";

export default function CreatePost() {
  const [state, setState] = React.useState({load: false});
  const aref = React.useRef(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(state.body)
    const { title, text, tags, image } = state.body;

    const formData = new FormData();

    formData.append("title", title);
    formData.append("text", text);
    formData.append("tags", tags);

    for (var x = 0; x < image.length; x++) {
      formData.append("image", image[x]);
    }

    for (var key of formData.entries()) {
      console.log(key[0] + ", " + key[1]);
    }

    try {
      setState(s => ({...s, load: true}))
      const be = await postfile("posts", formData );
      console.log(be)
      setState(s => ({...s, load: false, effect: {message: be.message}}))
    } catch (error) {
      console.error(error)
      setState(s => ({...s, load: false, effect: {error: true, message: error.message}}))

    }
  };

  return (
    <div>
      <div className="container p-5 create-blog-alignment">
        <div className="row d-flex justify-content-between">
          <div className="col-10 col-md-5 mx-1">
            <form className="w-100 d-flex justify-content-center flex-column m-auto"
            onSubmit={handleSubmit}>
              <div ref={aref}></div>
              <Affect cref={aref.current} load={state.load} effect={state.effect} />
              <div className="form-group blog-form">
                <label htmlFor="fname">Post Title </label>
                <input
                  type="text"
                  className="form-control"
                  id="text"
                  onChange={(e) =>{
                    setState((s) => ({ ...s, body: { title: e.target.value } }))}
                  }
                />
              </div>
              <div className="form-group mt-2 blog-form">
                <label htmlFor="email">Post </label>
                <div className="container-fluid ckeditor ">
                  {/* <h3>Post <sup>*</sup></h3> */}
                  <textarea
                    onChange={(e) =>
                      setState((s) => ({
                        ...s,
                        body: {...state.body, text: e.target.value },
                      }))
                    }
                  ></textarea>
                </div>{" "}
              </div>

              <div className="form-group mt-2">
                <label htmlFor="email">Tags:</label>
                <input
                  type="Text"
                  className="form-control"
                  id="email"
                  onChange={(e) => {
                    // console.log(e.target.value.split(','))
                    setState((s) => ({
                      ...s,
                      body: {...state.body, tags: e.target.value.split(",") },
                    }));
                  }}
                  placeholder="e.g builder, reality_conference_2019, ministers_only"
                />
              </div>

              <div className="form-group  mt-3">
                <label htmlFor="email">
                  Separate tags using comma, leaving no space in between, Use
                  same tags for different messages to group them
                </label>
              </div>
              <div className="btn text-dark d-block">
              <CloudDownloadIcon
                style={{ color: "secondary", fontSize: 170 }}
              ></CloudDownloadIcon>
            </div>
              <input
              type="file"
              required
              onChange={(e) =>
                setState((s) => ({
                  ...s,
                  body: {...state.body, image: e.target.files },
                }))
              }
              className="btn text-white  btn-primary w-100  text-center rounded-0"
            ></input>

              <button
                type="submit"
                className="btn btn-primary mt-4 w-100"
              >
                Submit
              </button>
            </form>
          </div>
          <div className="col-10 col-md-5 mx-1 createPost-icon">
            
            
          </div>
        </div>
      </div>
    </div>
  );
}
