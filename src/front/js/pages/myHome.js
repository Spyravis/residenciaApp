import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
import { LoggedMenu } from "../component/logged-menu";
import "../../styles/home.css";
import { Schuddle } from "../component/schuddle";

export const MyHome = () => {
  const navigate = useNavigate();
  const { store, actions } = useContext(Context);

  useEffect(() => {
    if (!store.userdata.id) {
      navigate("/");
    }
  }, []);

  return (
    <div className=" text-center">
      <LoggedMenu />
      <div className="container row">
        <h2 className="mt-3">
          {store.userdata.role_user == 1 ? "Familiar" : "Trabajador"}
          {store.userdata.name + " " + store.userdata.surname}
        </h2>
      </div>

      <Schuddle />
    </div>
  );
};
