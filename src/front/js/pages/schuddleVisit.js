import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { LoggedMenu } from "../component/logged-menu";
import { Context } from "../store/appContext";

export const ShuddleVisit = () => {
  const { store, actions } = useContext(Context);
  const [resident, setResident] = useState("");
  const [url, setUrl] = useState("");
  const [online, setOnline] = useState(false);
  const [user, setUser] = useState("");
  const [day, setDay] = useState("");
  const [hourStart, setHourStart] = useState("");
  const [hourEnd, setHourEnd] = useState("");

  useEffect(() => {}, []);

  return (
    <div className="">
      <LoggedMenu />
      <div className="container col-6 mt-5 border rounded bg-warning bg-opacity-50">
        <h2 className="my-2 text-center">Agendar visita</h2>

        <div className="col">
          <label className=" col-form-label" htmlFor="online">
            Modalidad:
          </label>
          <div className="col px-5">
            <input
              type="radio"
              id="online"
              name="online"
              onChange={(e) => {
                e.preventDefault();
                setOnline(true);
                console.log(online);
              }}
            />
            <label htmlFor="online">Online</label>
            <input
              type="radio"
              id="presencial"
              name="online"
              onChange={(e) => {
                setOnline(false);
                console.log(online);
              }}
            />
            <label htmlFor="presencial">Presencial</label>
          </div>
        </div>
        <div className="col">
          <label className=" col-form-label" htmlFor="url">
            URL:
          </label>
          <input
            className="form-control"
            name="url"
            placeholder="www.example.com"
            value={url}
            onChange={(e) => {
              setError(false);
              setName(e.target.value);
            }}
          ></input>
        </div>
        <div className="col">
          <label className=" col-form-label" htmlFor="resident">
            Resident:
          </label>
          <input
            className="form-control"
            name="resident"
            placeholder=""
            value={resident}
            onChange={(e) => {
              setError(false);
              setName(e.target.value);
            }}
          ></input>
        </div>
        <div className="col">
          <label className=" col-form-label" htmlFor="user">
            User:
          </label>
          <input
            className="form-control"
            name="user"
            placeholder=""
            value={user}
            onChange={(e) => {
              setError(false);
              setName(e.target.value);
            }}
          ></input>
        </div>
        <div className="col">
          <label className=" col-form-label" htmlFor="day">
            Day:
          </label>
          <input
            className="form-control"
            name="day"
            placeholder=""
            value={day}
            onChange={(e) => {
              setError(false);
              setName(e.target.value);
            }}
          ></input>
        </div>
        <div className="col">
          <label className=" col-form-label" htmlFor="hourStart">
            Hora Inicio:
          </label>
          <input
            className="form-control"
            name="hourStart"
            placeholder=""
            value={hourStart}
            onChange={(e) => {
              setError(false);
              setName(e.target.value);
            }}
          ></input>
        </div>
        <div className="col my-2">
          <label className=" col-form-label" htmlFor="hourEnd">
            Hora Fin:
          </label>
          <input
            className="form-control"
            name="hourEnd"
            placeholder=""
            value={hourEnd}
            onChange={(e) => {
              setError(false);
              setName(e.target.value);
            }}
          ></input>
        </div>
      </div>
    </div>
  );
};
