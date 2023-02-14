import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";

import "../../styles/home.css";

export const Profile = () => {
    const navigate = useNavigate();
    const { store, actions } = useContext(Context);
    const [name, setName] = useState(store.userdata?.name)
    const [surname, setsurname] = useState(store.userdata?.surname)
    const [photo, setPhoto] = useState(store.userdata?.photo)
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")

    const [password, setPassword] = useState(store.userdata?.password)
    const [newPassword, setNewPassword] = useState("");
    const [confirmNewPassword, setConfirmnewPassword] = useState("");

  

    const modifyProfile = async (e) => {
        e.preventDefault();

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
  
    };

    const updatePassword = async () => {
//ACA TENGO QUE INSERTAR EL CONDICIONAL PARA QUE PRIMERO ME VALIDE EL PASSWORD
            if (newPassword == confirmNewPassword) {
            const response = await fetch(
                process.env.BACKEND_URL + "/api/update_password",
                {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " +localStorage.getItem("token"),
                },
                body: JSON.stringify({
                    newPassword: newPassword,
                }),
                }
            );
            const data = await response.json();
            // ACA AGREGAR CONDICIONAL PARA EL PASSWORD MODIFICADO O INCORRECTO
        };
    }

  return (

      <div className="container  mt-5">
        <div className="col  border rounded p-2 bg-secondary bg-gradient bg-opacity-25">
        <h2 className="text-center mt-5">Modificar Perfil</h2>
          <div className="row my-3 ">
              <label className=" col-form-label" htmlFor="name">
                  Name:
              </label>
              <div className="col">
                  <input
                      className="form-control"
                      name="name"
                      placeholder={store.userdata?.name}
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
                      placeholder={store.userdata?.surname}
                      disabled
                  ></input>
              </div>
          </div>
          <div className="row my-3">
              <label className=" col-form-label" htmlFor="photo">
                  Photo:
              </label>
              <div>              
                <img src={photo} className="card-img-top" style={{width: "12rem"}} alt="..."/>
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
          <div className="my-2">
              <button
                  className="btn btn-success btn-lg my-2"
                  onClick={modifyProfile}
              >
                  Modify Profile
              </button>
          </div>
        </div>      

              {/* ACA EMPIEZA EL CAMBIO DE CONTRASEÑA*/}

        <div className="col border rounded p-2 bg-secondary bg-gradient bg-opacity-25 mt-5">
          <h2 className="mt-5">Cambiar Contraseña</h2>
          <div className="row my-3">
            <label className=" col-form-label" htmlFor="password">
              Actual Password:
            </label>
            <div className="col">
              <input
                type="password"
                className="form-control"
                name="password"
                placeholder="Password"
                minLength="8"
                maxLength="20"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              ></input>
            </div>
          </div>

          <div className="row my-3">
            <label className=" col-form-label" htmlFor="password">
              Password:
            </label>
            <div className="col">
              <input
                type="password"
                className="form-control"
                name="password"
                placeholder="New password"
                minLength="8"
                maxLength="20"
                onChange={(e) => {
                  setNewPassword(e.target.value);
                }}
              ></input>
            </div>
          </div>
          <div className="row my-3">
            <label className=" col-form-label" htmlFor="Confirm new password">
              Confirm Password:{" "}
            </label>
            <div className="col">
              <input
                type="password"
                className="form-control"
                name="Confirm new password"
                placeholder="Confirm new password"
                minLength="8"
                maxLength="20"
                onChange={(e) => {
                  setConfirmnewPassword(e.target.value);
                  if (
                    newPassword.slice(0, e.target.value.length) != e.target.value
                  ) {
                    alert("Las contraseñas no coinciden");
                  }
                }}
              ></input>
            </div>
            <div className="my-2">
                <button
                    className="btn btn-success btn-lg my-2"
                    onClick={updatePassword}
                >
                    Update Password
                </button>
            </div>
          </div> 
        </div>
      </div>
      
  );
};