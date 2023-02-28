import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Calendar } from "../component/calendar";
import { LoggedMenu } from "../component/logged-menu";
import { Context } from "../store/appContext";

export const ShuddleVisit = () => {
  const { store, actions } = useContext(Context);
  const [resident, setResident] = useState("");
  const [url, setUrl] = useState("");
  const [online, setOnline] = useState(false);
  const [user, setUser] = useState(
    store.userdata?.name,
    store.userdata?.surname
  );
  const [selectDate, setSelectDate] = useState("");
  const [hourStart, setHourStart] = useState("");
  const [hourEnd, setHourEnd] = useState("");

  console.log(store.userdata.resident[0]);
  useEffect(() => {
    actions.getCurrentUser();
  }, []);

  const sendSchuddleVisit = async () => {
    const response = await fetch(process.env.BACKEND_URL + "/api/shchuddle", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
      body: JSON.stringify({
        online: online,
        url: url,
        user: user,
        hourStart:
          selectDate.toLocaleDateString() +
          " " +
          selectDate.toLocaleTimeString(),
        hourEnd: hourEnd,
      }),
    });
    if (response.ok) {
      const data = await response.json();
    } else {
      setError(true);
    }
  };

  return (
    <div className="container-fluid">
      <LoggedMenu />
      <div className="my-5 border rounded bg-warning bg-opacity-25 ">
        <div className="col">
          <Calendar selectDate={selectDate} setSelectDate={setSelectDate} />
        </div>
        <div className="container align-item-center justify-content-center my-5">
          <h2 className="my-2 text-center">Agendar visita</h2>
          <div className="">
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
          <div className="">
            <label className=" col-form-label" htmlFor="url">
              URL:
            </label>
            <input
              className="form-control"
              name="url"
              placeholder="www.example.com"
              onChange={(e) => {
                setError(false);
                setUrl(e.target.value);
              }}
            ></input>
          </div>
          <div className="">
            <label className=" col-form-label" htmlFor="resident">
              Resident:
            </label>
            <input
              className="form-control"
              name="resident"
              placeholder=""
              value={resident}
              onChange={(e) => {
                setResident(e.target.value);
              }}
            ></input>
          </div>
          <div className="">
            <label className=" col-form-label" htmlFor="user">
              User:
            </label>
            <input
              className="form-control"
              name="user"
              placeholder=""
              value={store.userdata?.surname}
              onChange={(e) => {
                setUser(e.target.value);
              }}
            ></input>
          </div>
          <div className="">
            <label className=" col-form-label" htmlFor="day">
              Day:
            </label>
            <input
              className="form-control"
              name="day"
              disabled="disabled"
              placeholder="Select day from calendar"
              value={selectDate}
            ></input>
          </div>
          <div className="">
            <label className=" col-form-label" htmlFor="hourStart">
              Hora Inicio:
            </label>
            <input
              type="time"
              className="form-control"
              name="hourStart"
              placeholder=""
              onChange={(e) => {
                setHourStart(e.target.value);
              }}
            ></input>
          </div>
          <div className=" my-2">
            <label className=" col-form-label" htmlFor="hourEnd">
              Hora Fin:
            </label>
            <input
              type="time"
              className="form-control"
              name="hourEnd"
              placeholder=""
              onChange={(e) => {
                setHourEnd(e.target.value);
              }}
            ></input>
          </div>
          <button className="btn btn-primary" onClick={sendSchuddleVisit}>
            Confirmar Cita
          </button>
        </div>
      </div>
    </div>
  );
};
