import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";

export const UploadView = ({ files, setFiles, photo, setPhoto }) => {
  const { store, actions } = useContext(Context);
  const params = useParams();

  const uploadImage = async (evt) => {
    evt.preventDefault();
    // we are about to send this to the backend.
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
    const response = await fetch(
      process.env.BACKEND_URL + "/api/upload",
      options
    );
    const data = await response.json();
    if (response.ok) {
      setPhoto(data.photo);
    } else {
      console.error("ERRORRRRRR!!!", error);
    }
  };

  return (
    <>
      <div className="row my-3">
        <form className="col-auto" onSubmit={uploadImage}>
          <input
            className="form-control"
            type="file"
            placeholder="Select file to upload"
            onChange={(e) => {
              setFiles(e.target.files);
            }}
          />
          <button className="btn-outline-primary btn-sm mt-1">
            Change Photo
          </button>
        </form>
      </div>
    </>
  );
};
