import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/index.css";
export const NewMessage = (showInput) => {
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");
    const { store, actions } = useContext(Context);

    //const firstResident = store.userdata.residents[0].id;
    const [resident, setResident] = useState(store.userdata?.residents[0].id);

    const sendMessage = async () => {
        if (subject.length > 3 && message.length > 10) {
            const response = await fetch(process.env.BACKEND_URL + "/api/messages/send",
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
                setError(<p className="alert alert-success">Mensaje enviado correctamente</p>)
            }
        }
        else {
            setError(<p className="alert alert-warning">Error al enviar el mensaje</p>);
        }
    };
    useEffect(() => {
        actions.getCurrentUserResidentMessages();
    }, [error]);
    if (showInput) {
        return (
            <div className="row newMessage">
                <div className="border rounded bg-light bg-gradient bg-opacity-75">
                    <h2 className="text-center m-3">Nuevo</h2>
                    <div className="row my-3">
                        <label className="col-sm-2 col-form-label" htmlFor="resident">
                            Residente:{" "}
                        </label>
                        <div className="col-sm-10">
                            <select className="form-select" name="resident" onChange={(e) => {
                                setError(false);
                                setResident(e.target.value);
                            }}>
                                {store.userdata.residents.map((resident, index) => {
                                    return (
                                        <option key={index} value={resident.id} >{resident.name} {resident.surname}</option>
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
                                setSubject(e.target.value);
                            }}
                            ></input>
                        </div>
                    </div>
                    <div className="row my-3">
                        <label className="col-sm-2 col-form-label" htmlFor="message">
                            Mensaje:{" "}
                        </label>
                        <div className="col-sm-10">
                            <textarea className="form-control" name="message" placeholder="message" type="text" value={message} onChange={(e) => {
                                setError(false);
                                setMessage(e.target.value);
                            }}
                            ></textarea>
                        </div>
                        <div className="row my-3">
                            <div className="col-sm-2">

                            </div>
                            <div className="col-sm-2">
                                <button className="btn btn-success my-3" onClick={() => sendMessage()}>
                                    Enviar
                                </button>
                            </div>
                            <div className="col-sm-6 text-center">
                                {error}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};