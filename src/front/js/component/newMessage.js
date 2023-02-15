import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/index.css";
export const NewMessage = (showInput) => {
    const [subject, setsubject] = useState("");
    const [message, setmessage] = useState("");
    const [error, setError] = useState(false);
    if (showInput) {
        return (
            <div className="row newMessage">
                <div className="border rounded p-2 bg-secondary bg-gradient bg-opacity-75">
                    <h2 className="text-center m-3">Nuevo</h2>
                    <div className="row my-3">
                        <label className="col-sm-2 col-form-label" htmlFor="subject">
                            Asunto:{" "}
                        </label>
                        <div className="col-sm-10">
                            <input className="form-control" name="subject" placeholder="subject" value={subject} onChange={(e) => {
                                setError(false);
                                setsubject(e.target.value);
                            }}
                            ></input>
                        </div>
                    </div>
                    <div className="row my-3">
                        <label className="col-sm-2 col-form-label" htmlFor="message">
                            Asunto:{" "}
                        </label>
                        <div className="col-sm-10">
                            <input className="form-control" name="message" placeholder="message" value={message} onChange={(e) => {
                                setError(false);
                                setmessage(e.target.value);
                            }}
                            ></input>
                        </div>
                        <div className="text-center mt-3 p-3 ">
                            <button className="btn btn-primary btn-lg" onClick={() => sendLoginCredential()}>
                                Enviar
                            </button>
                            {error ? (
                                <p className="alert alert-warning">Error en crendenciales</p>
                            ) : null}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};