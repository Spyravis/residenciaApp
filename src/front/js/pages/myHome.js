import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
import { LoggedMenu } from "../component/logged-menu";
import "../../styles/home.css";
import { Schuddle } from "../component/schuddle";
import { Admin } from "../component/admin";
import { Worker } from "../component/worker";

export const MyHome = () => {
  const navigate = useNavigate();
  const { store, actions } = useContext(Context);

  useEffect(() => {
    if (!store.userdata.id) {
      navigate("/login");
    }
  }, []);

  return (
    <div className="container">
      <LoggedMenu></LoggedMenu>

      {store.userdata.role_user == 1 ? <Schuddle /> : store.userdata.role_user == 3 ? <Admin /> : <Worker />}
    </div>
  );
};
