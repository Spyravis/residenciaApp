import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { Context } from "../store/appContext";

export const Register = () => {
  const navigate = useNavigate();
  const { store, actions } = useContext(Context);
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [photo, setPhoto] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState(false);

  const [validateInfo, setValidateInfo] = useState(false);
  const [validatePassword, setValidatePassword] = useState(false);

  const { hash } = useParams();

  useEffect(() => {
    if (hash != "8983ef5be7525d9ec2f9e74dd458bf8f") {
      navigate("/");
    }
  }, []);

  const sendRegisterCredentials = async () => {
    if (password == confirmPassword) {
      const response = await fetch(process.env.BACKEND_URL + "/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          surname: surname,
          photo: photo,
          email: email,
          password: password,
          phone: phone,
        }),
      });
      const data = await response.json();
      if (response.ok) {
        navigate("/login");
      } else {
        setError(data.response);
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
      password == confirmPassword &&
      password.length >= 8 &&
      password.length <= 20 &&
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
  }, [password, confirmPassword]);

  useEffect(() => {
    if (
      password == confirmPassword &&
      email.includes("@") &&
      photo != "" &&
      name != "" &&
      surname != "" &&
      phone != "" &&
      phone.length > 8 &&
      phone.length < 12
    ) {
      setValidateInfo(true);
    } else {
      setValidateInfo(false);
    }
  }, [name, surname, password, confirmPassword, email, phone]);

  return (
    <div className="container-md d-flex  justify-content-center  mt-5">
      <div className=" col-sm-6 border rounded p-2 ">
        <h2 className="text-center m-3">Register </h2>
        <div className="row my-3">
          <label className=" col-form-label" htmlFor="name">
            Name:
          </label>
          <div className="col">
            <input
              className="form-control"
              name="name"
              placeholder="name"
              value={name}
              onChange={(e) => {
                setError(false);
                setName(e.target.value);
              }}
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
              placeholder="surname"
              value={surname}
              onChange={(e) => {
                setError(false);
                setSurname(e.target.value);
              }}
            ></input>
          </div>
        </div>
        <div className="row my-3">
          <label className=" col-form-label" htmlFor="photo">
            Photo:
          </label>
          <div className="col">
            <input
              className="form-control"
              name="photo"
              placeholder="Photo URL"
              onChange={(e) => {
                setError(false);
                setPhoto(e.target.value);
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
              placeholder="phone"
              maxLength="12"
              value={phone}
              onChange={(e) => {
                setError(false);
                setPhone(e.target.value);
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
              type="email"
              className="form-control"
              name="email"
              placeholder="email"
              minLength="12"
              value={email}
              onChange={(e) => {
                setError(false);
                setEmail(e.target.value);
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
              placeholder="password"
              minLength="8"
              maxLength="20"
              value={password}
              onChange={(e) => {
                setError(false);
                setPassword(e.target.value);
                checkPassword(e.target.value);
              }}
            ></input>
          </div>
        </div>
        <div className="row my-3">
          <label className=" col-form-label" htmlFor="password">
            Confirm Password:
          </label>
          <div className="col">
            <input
              type="password"
              className="form-control"
              name="confirm password"
              placeholder="confirm password"
              minLength="8"
              maxLength="20"
              value={confirmPassword}
              onChange={(e) => {
                setError(false);
                setConfirmPassword(e.target.value);
                if (
                  password.slice(0, e.target.value.length) != e.target.value
                ) {
                  alert("x");
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
        </div>
        <div>
          <button
            className="btn btn-success btn-lg"
            disabled={!validateInfo}
            onClick={sendRegisterCredentials}
          >
            Register
          </button>
          {error ? <p className="alert alert-warning mt-2">{error}</p> : null}
        </div>
      </div>
    </div>
  );
};
