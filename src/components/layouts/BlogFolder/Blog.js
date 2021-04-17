import React, { Component, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { apiPost } from "../../../redux/ActionCreators";
import AllPost from "./AllPost";
import CreatePost from "./CreatePost";

export default function Blog() {
  const dispatch = useDispatch()
  const [state, setState] = useState({
    showContent: true,
  });

  useEffect(() => {
    dispatch(apiPost({point: "GET", url: `posts?from=2021/06/08&to=2021/09/01&keyword=sensible
`}))
  },[dispatch])

  const changeContentHandlerUpdate = () => {
    setState({ showContent: true });
  };
  const changeContentHandlerHome = () => {
    setState({ showContent: false });
  };

  return (
    <div id="content">
      <div className="container blog-profile w-75 " id="profile">
        <div className="d-flex justify-content-center">
          <button
            id="proheads"
            className="col-md-4 w-100 bg-primary text-center blog-post  rounded-2 text-white py-1 "
            onClick={changeContentHandlerUpdate}
          >
            {" "}
            Create Post
          </button>
          <button
            id="proheads"
            className="col-md-4 bg-primary text-center w-100 blog-post rounded-2 text-white py-1  "
            onClick={changeContentHandlerHome}
          >
            {" "}
            All Post
          </button>
        </div>
      </div>
      <div id="cont" className=" rounded-4">
        {state.showContent ? <CreatePost /> : <AllPost />}
      </div>
    </div>
  );
}
