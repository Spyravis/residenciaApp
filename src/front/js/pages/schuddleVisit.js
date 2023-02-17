import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { LoggedMenu } from "../component/logged-menu";
import { Context } from "../store/appContext";

export const ShuddleVisit = () => {
  const { store, actions } = useContext(Context);

  const [visitDay, setVisitDay] = useState("");
  const [visitHour, setVisitHour] = useState("");

  useEffect(() => {
    actions.getUserSchuddle();
  }, []);

  return (
    <div className="">
      <LoggedMenu />
      <div className="container col-6 mt-5 border rounded bg-warning bg-opacity-50">
        <h2 className="my-2 text-center">Agendar visita</h2>
        <div className="row my-3">
          {Object.keys(store.schuddle).map((x, i) => {
            return <p key={i}>{x}</p>;
          })}
        </div>
        <div className="row my-3">
          <label className=" col-form-label" htmlFor="day">
            Día de visita
          </label>
          <div className="col">
            <input className="form-control" name="day" type="date"></input>
          </div>
        </div>
        <div className="row my-3">
          <label className=" col-form-label" htmlFor="hourStart">
            Hora de visita
          </label>
          <div className="col">
            <input
              className="form-control"
              name="hourStart"
              type="time"
            ></input>
          </div>
        </div>
        <div className="my-2">
          <button className="btn btn-primary">Agendar Visita</button>
        </div>
      </div>
    </div>
  );
};
