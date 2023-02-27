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
  const [user, setUser] = useState("");
  const [day, setDay] = useState("");
  const [hourStart, setHourStart] = useState("");
  const [hourEnd, setHourEnd] = useState("");
  const [selectDate, setSelectDate] = useState("");

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
              value={url}
              onChange={(e) => {
                setError(false);
                setName(e.target.value);
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
                setError(false);
                setName(e.target.value);
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
              value={user}
              onChange={(e) => {
                setError(false);
                setName(e.target.value);
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
              onClick={(e) => {
                setDay(selectDate);
                console.log(day);
              }}
            ></input>
          </div>
          <div className="">
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
          <div className=" my-2">
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
    </div>
  );
};
