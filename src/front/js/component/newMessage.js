import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/index.css";
export const NewMessage = (showInput) => {
    const [subject, setsubject] = useState("");
    const [message, setmessage] = useState("");
    const [error, setError] = useState(false);
    const { store, actions } = useContext(Context);

    const sendMessage = async () => {
        if (subject.length < 3 && message.length < 10) {
            const response = await fetch(process.env.BACKEND_URL + "/api/register",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        subject: subject,
                        message: message,
                        resident_id: resident,
                        url_attached: "",
                        user_id: store.userdata.id
                    }),
                }
            );
            const data = await response.json();
            if (response.ok) {
                alert("mensaje enviado correctamente");
            } else {
                setError(data.response);
            }
        }
    };
    if (showInput) {
        return (
            <div className="row newMessage">
                <div className="border rounded p-2 bg-secondary bg-gradient bg-opacity-75">
                    <h2 className="text-center m-3">Nuevo</h2>
                    <div className="row my-3">
                        <label className="col-sm-2 col-form-label" htmlFor="resident">
                            Residente:{" "}
                        </label>
                        <div className="col-sm-10">
                            <select className="form-select" name="resident">
                                {store.userdata.residents.map((resident, index) => {
                                    return (
                                        <option key={index} value={resident.id}>{resident.name} {resident.surname}</option>
                                    )
                                })}
                            </select>
                        </div>
                    </div>
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
                            Mensaje:{" "}
                        </label>
                        <div className="col-sm-10">
                            <input className="form-control" name="message" placeholder="message" type="text" value={message} onChange={(e) => {
                                setError(false);
                                setmessage(e.target.value);
                            }}
                            ></input>
                        </div>
                        <div className="text-center mt-3 p-3 ">
                            <button className="btn btn-primary btn-lg" onClick={() => sendMessage()}>
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