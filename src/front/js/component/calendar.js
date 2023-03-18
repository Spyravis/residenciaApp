import React, { Component, Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/calendar.css";
import calendario from "../../img/calendario.jpg";

export const Calendar = ({ selectDate, setSelectDate, setAvailable }) => {
  let date = new Date();
  const [currentYear, setCurrentYear] = useState(date.getFullYear());
  const [actualMonth, setActualMonth] = useState(date.getMonth());
  const [actualMonthNumber, setActualMonthNumber] = useState(date.getMonth());
  const [daysNames, setDaysNames] = useState([]);
  const [monthDays, setMonthDays] = useState([]);

  const [day, setDay] = useState(new Date().toLocaleDateString());
  const locale = "en";
  const options = {
    year: "numeric",
    month: "2-digit",
    day: "numeric",
  };

  const [selectedDay, setSelectedDay] = useState(null);

  const [elijoDia, setElijoDia] = useState(null);

  const handleSelect = (i) => {
    setSelectedDay(i);
    setAvailable(null);
  };

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
    let lastDateofLastMonth = new Date(year, month, 0).getDate(); //getting last date of previous

    let liTag = [];

    for (let i = firstDayOfMonth; i > 0; i--) {
      let lastDayOfLastMonth = (
        <div
          //key={"inactive " + (lastDateofLastMonth - i + 1)}
          className="inactive"
        >
          {lastDateofLastMonth - i + 1}
        </div>
      );
      liTag.push(lastDayOfLastMonth);
    }

    for (let i = 1; i <= lastDateOfMonth; i++) {
      let classes = "active";
      if (
        year === date.getFullYear() &&
        month === date.getMonth() &&
        i === date.getDate()
      ) {
        classes += " today";
      }

      let days = (
        <div
          // key={"" + i}
          className={classes}
          onClick={() => {
            handleSelect(i);
            setSelectDate(
              new Date(year, month, i + 1).toISOString().split("T")[0]
            );
          }}
        >
          {i}
        </div>
      );
      liTag.push(days);
    }

    for (let i = lastDayOfMonth; i < 5; i++) {
      let lastDayOfActualMonth = (
        <div
          //key={"inactive " + (i - lastDayOfMonth + 1)}
          className="inactive"
        >
          {i - lastDayOfMonth + 1}{" "}
        </div>
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
    <div className="container d-flex justify-content-center align-item-center  mt-5">
      <div className="calendar-container ">
        <div className="div-header">
          <div className="icons d-flex ">
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
        </div>
        <div className="bg-white">
          <br />
        </div>
        <div className="calendar">
          <ul className="weeks mb-2">
            {daysNames.map((e, index) => {
              return <li key={index}>{e.slice(0, 3)}</li>;
            })}
          </ul>
          <ul className="days">
            {monthDays.map((x, y) => {
              return (
                <li
                  key={y}
                  className={
                    selectedDay === x.props.children &&
                      x.props.className != "inactive"
                      ? " selected"
                      : ""
                  }
                >
                  {x}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};
