import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/index.css";

export const Admin = () => {
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");

    const sendEmail = async () => {
        const message = "Bienvenido a Residencia APP, utilitza el siguiente enlace para completar el registro: " + process.env.BACKEND_URL + "/register/8983ef5be7525d9ec2f9e74dd458bf8f";
        const response = await fetch(process.env.BACKEND_URL + "/api/send_email",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    subject: "Alta en Residencia",
                    message: message,
                }),
            }
        );
        const data = await response.json();
        if (response.ok) {
            setError(<p className="alert alert-success">Mensaje enviado correctamente</p>)
        } else {
            setError(<p className="alert alert-warning">Error al enviar el mensaje</p>);
        }
    };
    return (
        <div className=" row justify-content-md-center mt-3 p-3">
            <div className="col-md-5">
                <label className="col-sm-2 col-form-label" htmlFor="email">
                    Email:{" "}
                </label>
                <div className="col-sm-10">
                    <input
                        className="form-control"
                        name="email"
                        placeholder="email"
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value);
                        }}
                    ></input>
                </div>
                <button
                    className="btn btn-primary btn-lg"
                    onClick={() => sendEmail()}
                >
                    Enviar autorización
                </button>
            </div>
            <div className="col-sm-6 text-center">
                {error}
            </div>
        </div>
    );
};