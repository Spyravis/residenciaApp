import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";

export const UploadView = (props) => {
  const { store, actions } = useContext(Context);
  const params = useParams();
  const [files, setFiles] = useState(null);

  const uploadImage = (evt) => {
    evt.preventDefault();
    // we are about to send this to the backend.
    console.log("This are the files", files);
    let body = new FormData();
    body.append("profile_image", files[0]);
    const options = {
      body,
      method: "POST",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    };
    // you need to have the user_id in the localStorage
    const currentUserId = localStorage.getItem("user_id");
    fetch(process.env.BACKEND_URL + "/api/upload", options)
      .then((resp) => resp.json())
      .then((data) => console.log("Success!!!!", data))
      .catch((error) => console.error("ERRORRRRRR!!!", error));
  };

  return (
    <div className="jumbotron">
      <form onSubmit={uploadImage}>
        <input type="file" onChange={(e) => setFiles(e.target.files)} />
        <button>Upload</button>
      </form>
    </div>
  );
};
