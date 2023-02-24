import React, { Component, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/calendar.css";
import calendario from "../../img/calendario.jpg";

export const Calendar = () => {
  let date = new Date();
  const [currentYear, setCurrentYear] = useState(date.getFullYear());
  const [actualMonth, setActualMonth] = useState(date.getMonth());
  const [actualMonthNumber, setActualMonthNumber] = useState(date.getMonth());
  const [daysNames, setDaysNames] = useState([]);
  const [monthDays, setMonthDays] = useState([]);
  const locale = "en";

  const getMonths = () => {
    const monthsIndex = [...Array(12).keys()];
    const intl = new Intl.DateTimeFormat(locale, { month: "long" });

    const calendar = monthsIndex.map((monthKey) => {
      const monthName = intl.format(new Date(currentYear, monthKey));

      return monthName;
    });

    return calendar;
  };

  const getDaysFromCurrentMonth = (month, year) => {
    let firstDayOfMonth = new Date(year, month, 1).getDay(); //getting first day of month
    let lastDateOfMonth = new Date(year, month + 1, 0).getDate(); //getting last date of month
    let lastDayOfMonth = new Date(year, month + lastDateOfMonth).getDate(); //getting last day of month
    let lastDateofLastMonth = new Date(year, month, 0).getDate(); //getting last date of previos

    let liTag = [];

    for (let i = firstDayOfMonth; i > 0; i--) {
      let lastDayOfLastMonth = (
        <li className="inactive">{lastDateofLastMonth - i + 1} </li>
      );
      liTag.push(lastDayOfLastMonth);
    }

    for (let i = 1; i <= lastDateOfMonth; i++) {
      let days = (
        <li
          onClick={() => {
            //  console.log(i + " " + month  + " " + year);
            console.log(new Date(year, month, i, 10));
          }}
        >
          {i}
        </li>
      );
      liTag.push(days);
    }

    for (let i = lastDayOfMonth; i < 5; i++) {
      let lastDayOfActualMonth = (
        <li className="inactive">{i - lastDayOfMonth + 1} </li>
      );
      liTag.push(lastDayOfActualMonth);
    }
    setMonthDays(liTag);
  };

  useEffect(() => {
    let date = new Date();
    setCurrentYear(date.getFullYear());
    setActualMonth(date.getMonth());

    //Obtengo los nombres de los 7 días de la semana empezando por Domingo y los cargo en su state "daysNames"

    const weekdays = [...Array(7).keys()];
    const intlWeekDays = new Intl.DateTimeFormat(locale, { weekday: "long" });

    const weekDaysNames = weekdays.map((weekDayIndex) => {
      const date = new Date(2023, 0, weekDayIndex + 1);
      const weekDayName = intlWeekDays.format(date);
      return weekDayName;
    });
    setDaysNames([...weekDaysNames]);

    //Obtengo los nombres de los 12 meses del año y los cargo en su state "months"

    setActualMonthNumber(actualMonth);
    setActualMonth(getMonths()[actualMonth]);
    getDaysFromCurrentMonth(actualMonth, currentYear);
  }, []);

  return (
    <div className="container d-flex align-item-center justify-content-center mt-5">
      <div className="wrapper">
        <header>
          <div className="icons d-flex p-2">
            <span
              onClick={() => {
                if (actualMonthNumber == 0) {
                  setActualMonthNumber(11);
                  setActualMonth(getMonths()[11]);
                  setCurrentYear(currentYear - 1);
                  getDaysFromCurrentMonth(11, currentYear - 1);
                } else {
                  setActualMonthNumber(actualMonthNumber - 1);
                  setActualMonth(getMonths()[actualMonthNumber - 1]);
                  getDaysFromCurrentMonth(actualMonthNumber - 1, currentYear);
                }
              }}
            >
              <i className="fa-solid fa-chevron-left"></i>
            </span>
            <h2 className="current-date">
              {actualMonth} {currentYear}
            </h2>
            <span
              onClick={() => {
                if (actualMonthNumber == 11) {
                  getDaysFromCurrentMonth(0, currentYear + 1);
                  setActualMonthNumber(0);
                  setActualMonth(getMonths()[0]);
                  setCurrentYear(currentYear + 1);
                } else {
                  setActualMonthNumber(actualMonthNumber + 1);
                  setActualMonth(getMonths()[actualMonthNumber + 1]);
                  getDaysFromCurrentMonth(actualMonthNumber + 1, currentYear);
                }
              }}
            >
              <i className="fa-solid fa-chevron-right"></i>
            </span>
          </div>
        </header>
        <div className="calendar">
          <ul className="weeks">
            {daysNames.map((e, index) => {
              return <li key={index}>{e}</li>;
            })}
          </ul>
          <ul className="days">{monthDays}</ul>
        </div>
      </div>
    </div>
  );
};
