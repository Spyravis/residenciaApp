import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";

import "../../styles/home.css";

export const Profile = () => {
    const navigate = useNavigate();
    const { store, actions } = useContext(Context);
    const [name, setName] = useState(store.userdata.name)
    const [surname, setsurname] = useState(store.userdata.surname)
    const [photo, setPhoto] = useState(store.userdata.photo)
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")



  useEffect(() => {
    actions.getCurrentUserEmail();
  }, [name, surname, photo, email, phone])
  

  const modifyProfile = async () => {
    const response = await fetch(
      process.env.BACKEND_URL + "/api/profile",
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer " +localStorage.getItem("token"),
        },
        body: JSON.stringify({
          name: name,
          surname: surname,
          photo: photo,
          email: email,
          phone: phone,
        }),
      }
    );
    const data = await response.json();
    if (response.ok) {
        navigate("/");
      } else {
        setError(data.response);
      }
};

  return (
      <div className="container text-center mt-5">
          <div className="row my-3">
              <label className=" col-form-label" htmlFor="name">
                  Name:
              </label>
              <div className="col">
                  <input
                      className="form-control"
                      name="name"
                      placeholder={store.userdata.name}
                      disabled
                  ></input>
              </div>
          </div>
          <div className="row my-3">
              <label className=" col-form-label" htmlFor="surname">
                  Surname:
              </label>
              <div className="col">
                  <input
                      className="form-control"
                      name="surname"
                      placeholder={store.userdata.surname}
                      disabled
                  ></input>
              </div>
          </div>
          <div className="row my-3">
              <label className=" col-form-label" htmlFor="photo">
                  Photo:
              </label>
                <div className="card" style={{width: "18rem"}}>
                    <img src={store.userdata.photo} className="card-img-top" alt="..."/>
                </div>
              <div className="col">
                  <input
                      className="form-control"
                      name="photo"
                      placeholder={"New Photo"}
                      onChange={(e) => {
                        setPhoto(e.target.value);
                    }}
                      
                  ></input>
              </div>
          </div>
          <div className="row my-3">
              <label className=" col-form-label" htmlFor="email">
                  Email:
              </label>
              <div className="col">
                  <input
                      className="form-control"
                      name="email"
                      placeholder={"New Email"}
                      onChange={(e) => {
                          setEmail(e.target.value);
                      }}
                  ></input>
              </div>
          </div>
          <div className="row my-3">
              <label className=" col-form-label" htmlFor="phone">
                  Phone:
              </label>
              <div className="col">
                  <input
                      className="form-control"
                      name="phone"
                      placeholder={"New Phone"}
                      onChange={(e) => {
                          setPhone(e.target.value);
                      }}
                  ></input>
              </div>
          </div>
          <div>
              <button
                  className="btn btn-success btn-lg"
                  onClick={modifyProfile}
              >
                  Modify Profile
              </button>
          </div> 
      </div>
  );
};