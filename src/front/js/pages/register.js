import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { Context } from "../store/appContext";

export const Register = () => {
    const navigate = useNavigate();
    const { store, actions } = useContext(Context);
    const [name, setName] = useState("");  
    const [surname, setSurname] = useState(""); 
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [role_user_id, setRole_user_id] = useState("1");
    const [error, setError] = useState(false);

    const sendRegisterCredentials = async () => {
        const response = await fetch("https://3001-spyravis-residenciaapp-a54c0x6wdii.ws-eu85.gitpod.io/api/register",{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: name,
                surname: surname,
                email: email,
                password: password,
                phone: phone,
                role_user_id: role_user_id
            }),
        
        });
        const data = await response.json();
        if (response.ok) {
            navigate("/login");
        } else {
            setError(data.response);
        }
    };

    return (
        <div className="container-md d-flex  justify-content-center  mt-5">
            <div className=" col-sm-6 border rounded p-2 ">
                <h2 className="text-center m-3">Register </h2>
                <div className="row my-3">
                    <label className=" col-form-label" htmlFor="name">
                        Name:{" "}
                    </label>
                    <div className="col">
                        <input className="form-control" name="name" placeholder="name" value={name} onChange={(e) => {
                            setError(false);
                            setName(e.target.value);
                        }}
                        ></input>
                    </div>
                </div>
                <div className="row my-3">
                    <label className=" col-form-label" htmlFor="surname">
                        Surname:{" "}
                    </label>
                    <div className="col">
                        <input className="form-control" name="surname" placeholder="surname" value={surname} onChange={(e) => {
                            setError(false);
                            setSurname(e.target.value);
                        }}
                        ></input>
                    </div>
                </div>
                <div className="row my-3">
                    <label className=" col-form-label" htmlFor="email">
                        Email:{" "}
                    </label>
                    <div className="col">
                        <input className="form-control" name="email" placeholder="email" value={email} onChange={(e) => {
                            setError(false);
                            setEmail(e.target.value);
                        }}
                        ></input>
                    </div>
                </div>
                <div className="row my-3">
                    <label className=" col-form-label" htmlFor="password">
                        Password:{" "}
                    </label>
                    <div className="col">
                        <input className="form-control" name="password" placeholder="password" value={password} onChange={(e) => {
                            setError(false);
                            setPassword(e.target.value);
                        }}
                        ></input>
                    </div>
                </div>
                <div className="row my-3">
                    <label className=" col-form-label" htmlFor="phone">
                        Phone:{" "}
                    </label>
                    <div className="col">
                        <input className="form-control" name="phone" placeholder="phone" value={phone} onChange={(e) => {
                            setError(false);
                            setPhone(e.target.value);
                        }}
                        ></input>
                    </div>
                </div>
                <div>
                    <button className="btn btn-success btn-lg" onClick={sendRegisterCredentials}>
                        Register
                    </button>
                </div>
            </div>
        </div>
    );
};