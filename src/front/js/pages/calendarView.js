import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
import { LoggedMenu } from "../component/logged-menu";
import "../../styles/home.css";
import { Calendar } from "../component/calendar";

export const CalendarView = () => {
  const navigate = useNavigate();
  const { store, actions } = useContext(Context);

  return (
    <div className=" text-center">
      <Calendar></Calendar>
    </div>
  );
};
