import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
import { LoggedMenu } from "../component/logged-menu";

import "../../styles/home.css";
import { UploadView } from "../component/upload";

export const Profile = () => {
  const navigate = useNavigate();
  const { store, actions } = useContext(Context);
  const [name, setName] = useState(store.userdata?.name);
  const [surname, setsurname] = useState(store.userdata?.surname);
  const [photo, setPhoto] = useState(store.userdata?.photo);
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [files, setFiles] = useState(null);

  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmnewPassword] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const [validatePassword, setValidatePassword] = useState(false);

  useEffect(() => {
    actions.getCurrentUser();
  }, [photo]);

  useEffect(() => {
    if (!store.userdata.id) {
      navigate("/");
    }
  }, []);

  const modifyProfile = async (e) => {
    e.preventDefault();

    const response = await fetch(process.env.BACKEND_URL + "/api/profile", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
      body: JSON.stringify({
        name: name,
        surname: surname,
        email: email,
        phone: phone,
      }),
    });
    const data = await response.json();
    if (response.ok) {
      setEmail("");
      setPhone("");
    } else {
      setEmail("");
      setPhone("");
    }
  };

  const updatePassword = async () => {
    if (newPassword == confirmNewPassword) {
      const response = await fetch(
        process.env.BACKEND_URL + "/api/update_password",
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
          body: JSON.stringify({
            newPassword: newPassword,
            password: password,
          }),
        }
      );
      const data = await response.json();
      if (response.ok) {
        setSuccess(true);
        setPassword("");
        setNewPassword("");
        setConfirmnewPassword("");
      } else {
        setError(true);
        setPassword("");
        setNewPassword("");
        setConfirmnewPassword("");
      }
    }
  };

  const checkPassword = (data) => {
    const passClass = document.getElementsByClassName("pass-check");
    const lowerCase = new RegExp("(?=.*[a-z])");
    const upperCase = new RegExp("(?=.*[A-Z])");
    const number = new RegExp("(?=.*[0-9])");
    const specialChar = new RegExp("(?=.*[!@#$%&*])");
    const eightChar = new RegExp("(?=.{8,})");

    if (eightChar.test(data)) {
      passClass[0].style.color = "green";
    } else {
      passClass[0].style.color = "grey";
    }
    if (lowerCase.test(data)) {
      passClass[1].style.color = "green";
    } else {
      passClass[1].style.color = "grey";
    }
    if (upperCase.test(data)) {
      passClass[2].style.color = "green";
    } else {
      passClass[2].style.color = "grey";
    }
    if (specialChar.test(data)) {
      passClass[3].style.color = "green";
    } else {
      passClass[3].style.color = "grey";
    }
    if (number.test(data)) {
      passClass[4].style.color = "green";
    } else {
      passClass[4].style.color = "grey";
    }
  };

  useEffect(() => {
    const passClass = document.getElementsByClassName("pass-check");
    if (
      newPassword == confirmNewPassword &&
      newPassword.length >= 8 &&
      newPassword.length <= 20 &&
      passClass[0].style.color == "green" &&
      passClass[1].style.color == "green" &&
      passClass[2].style.color == "green" &&
      passClass[3].style.color == "green" &&
      passClass[4].style.color == "green"
    ) {
      setValidatePassword(true);
    } else {
      setValidatePassword(false);
    }
  }, [newPassword, confirmNewPassword]);

  return (
    <div className="container-fluid ">
      <LoggedMenu />

      <div className="container col  border rounded p-2 bg-secondary bg-gradient bg-opacity-25 mt-2">
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
            <img
              src={photo}
              className="card-img-top"
              style={{ width: "12rem", borderRadius: "50%" }}
              alt="..."
            />
          </div>
        </div>

        <UploadView
          files={files}
          setFiles={setFiles}
          photo={photo}
          setPhoto={setPhoto}
        />
        <div className="row my-3">
          <label className=" col-form-label" htmlFor="email">
            Email:
          </label>
          <div className="col">
            <input
              value={email}
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
              value={phone}
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
              value={password}
              type="password"
              className="form-control"
              name="password"
              placeholder="Password"
              minLength="8"
              maxLength="20"
              onChange={(e) => {
                setPassword(e.target.value);
                setError(false);
              }}
            ></input>
          </div>
        </div>

        <div className="row my-3">
          <label className=" col-form-label" htmlFor="password">
            New Password:
          </label>
          <div className="col">
            <input
              value={newPassword}
              type="password"
              className="form-control"
              name="password"
              placeholder="New password"
              minLength="8"
              maxLength="20"
              onChange={(e) => {
                setNewPassword(e.target.value);
                checkPassword(e.target.value);
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
              value={confirmNewPassword}
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
            <p className="d-flex flex-column mt-2">
              <label className="pass-check fw-semibold">
                At least 8 characters
              </label>
              <label className="pass-check fw-semibold">
                At least 1 lower case characters
              </label>
              <label className="pass-check fw-semibold">
                At least 1 Upper case characters
              </label>
              <label className="pass-check fw-semibold">
                At least 1 especial characters ( !, @, #, $, %, & ,* )
              </label>
              <label className="pass-check fw-semibold">
                At least 1 numerical characters
              </label>
            </p>
          </div>
          <div className="my-2">
            <button
              disabled={!validatePassword}
              className="btn btn-success btn-lg my-2"
              onClick={updatePassword}
            >
              Update Password
            </button>
            {success ? (
              <p className="alert alert-warning">Contraseña modificada</p>
            ) : null}
            {error ? (
              <p className="alert alert-warning">
                Contraseña actual incorrecta
              </p>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};
