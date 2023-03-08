import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Calendar } from "../component/calendar";
import { LoggedMenu } from "../component/logged-menu";
import { Context } from "../store/appContext";
import "../../styles/schuddleVisit.css";

export const ShuddleVisit = () => {
  const { store, actions } = useContext(Context);
  const [resident, setResident] = useState("");
  const [url, setUrl] = useState("");
  const [online, setOnline] = useState(false);
  const [selectDate, setSelectDate] = useState("");
  const [hourStart, setHourStart] = useState("");
  const [availability, setAvailability] = useState(null);
  const [notAvailable, setNotAvailable] = useState(false);
  const [available, setAvailable] = useState(null);

  useEffect(() => {
    getResident();
  }, []);

  const getResident = async () => {
    await actions.getCurrentUser();
    setResident(store.userdata?.residents[0].id);
  };

  const sendSchuddleVisit = async () => {
    const response = await fetch(process.env.BACKEND_URL + "/api/schuddle", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
      body: JSON.stringify({
        is_online: online,
        url: url,
        resident: resident,
        booking: selectDate + " " + hourStart,
      }),
    });
    if (response.ok) {
      const data = await response.json();
    } else {
      setError(true);
    }
  };

  const checkAvalability = async () => {
    const response = await fetch(
      process.env.BACKEND_URL + "/api/bookings_availability",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
        body: JSON.stringify({
          booking: selectDate + " " + hourStart,
        }),
      }
    );
    if (response.ok) {
      const data = await response.json();
      setAvailability(data.response);
      setAvailable(true);
      return true;
    } else {
      const data = await response.json();
      setAvailability(data.response);
      setAvailable(false);
      return false;
    }
  };

  return (
    <div className="container-fluid">
      <LoggedMenu />
      <div className="body-schuddle row justify-content-md-center ">
        <div className="calendar col-md-5  ">
          <Calendar
            selectDate={selectDate}
            setSelectDate={setSelectDate}
            setAvailable={setAvailable}
          />
        </div>
        <div className="col-md-5 align-item-center justify-content-center  p-3">
          <h2 className="my-2 text-center">Agendar visita</h2>
          <div className="col-auto">
            <label className=" col-form-label" htmlFor="online">
              Modalidad:
            </label>
            <div className="col-auto px-3">
              <input
                type="radio"
                id="online"
                name="online"
                onChange={(e) => {
                  e.preventDefault();
                  setOnline(true);
                }}
              />
              <label htmlFor="online"> Online </label>
              <input
                type="radio"
                id="presencial"
                name="online"
                onChange={(e) => {
                  setOnline(false);
                }}
              />
              <label htmlFor="presencial">Presencial</label>
            </div>
          </div>
          <div className="col-auto">
            <label className=" col-form-label" htmlFor="url">
              URL:
            </label>
            <input
              className="form-control"
              name="url"
              placeholder="www.example.com"
              onChange={(e) => {
                setUrl(e.target.value);
              }}
            ></input>
          </div>
          <div className="col-auto">
            <label className=" col-form-label" htmlFor="resident">
              Resident:
            </label>
            <select
              className="form-select"
              name="resident"
              onChange={(e) => {
                setResident(e.target.value);
              }}
            >
              {store.userdata.residents
                ? store.userdata.residents.map((resident, index) => {
                    return (
                      <option key={index} value={resident.id}>
                        {resident.name} {resident.surname}
                      </option>
                    );
                  })
                : null}
            </select>
          </div>
          <div className="col-auto">
            <label className=" col-form-label" htmlFor="user">
              User:
            </label>
            <input
              disabled
              className="form-control"
              name="user"
              placeholder=""
              value={` ${store.userdata?.name} ${store.userdata?.surname}`}
            ></input>
          </div>
          <div className="col-auto">
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
          <div className="col-auto">
            <label className=" col-form-label" htmlFor="hourStart">
              Seleccione Horario
            </label>
            <select
              defaultValue="select"
              className="form-select"
              onChange={(e) => {
                setHourStart(e.target.value);
                setAvailable(null);
              }}
            >
              <option value="select">Select Hour</option>
              <option value="09:00:00">09:00 - 10:00</option>
              <option value="10:00:00">10:00 - 11:00</option>
              <option value="11:00:00">11:00 - 12:00</option>
              <option value="12:00:00">12:00 - 13:00</option>
              <option value="16:00:00">16:00 - 17:00</option>
              <option value="17:00:00">17:00 - 18:00</option>
              <option value="18:00:00">18:00 - 19:00</option>
            </select>
          </div>
          <div className="d-grid gap-2">
            <button
              className="btn btn-primary mt-2 "
              onClick={async () => {
                if (await checkAvalability()) {
                  sendSchuddleVisit();
                }
              }}
            >
              Confirmar Cita
            </button>
            {available == null ? null : available ? (
              <p className="alert alert-success mt-2 text-center">
                {availability}
              </p>
            ) : (
              <p className="alert alert-warning mt-2 text-center">
                {availability}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
