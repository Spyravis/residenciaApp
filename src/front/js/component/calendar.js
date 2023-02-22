import React, { Component, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/calendar.css";
import calendario from "../../img/calendario.jpg";

export const Calendar = () => {
  const [currentDate, setCurrenDate] = useState();

  useEffect(() => {
    let date = new Date(),
      currYear = date.getFullYear(),
      currMonth = date.getMonth();

    console.log(currentDate);

    const renderCalendar = () => {
      setCurrenDate(`${currMonth} ${currYear}`);
    };

    renderCalendar();
  }, []);

  return (
    <div className="wrapper">
      <header>
        <p className="current-date">{currentDate}</p>
        <div className="icons">
          <span>
            <i className="fa-solid fa-chevron-left"></i>
          </span>
          <span>
            <i className="fa-solid fa-chevron-right"></i>
          </span>
        </div>
      </header>
      <div className="calendar">
        <ul className="weeks">
          <li>Sun</li>
          <li>Mon</li>
          <li>Tue</li>
          <li>Wed</li>
          <li>Thu</li>
          <li>Fri</li>
          <li>Sat</li>
        </ul>
        <ul className="days">
          <li className="inactive">28</li>
          <li className="inactive">29</li>
          <li className="inactive">30</li>
          <li className="inactive">31</li>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
          <li>6</li>
          <li>7</li>
          <li>8</li>
          <li>9</li>
          <li>10</li>
          <li>11</li>
          <li>12</li>
          <li>13</li>
          <li>14</li>
          <li>15</li>
          <li>16</li>
          <li>17</li>
          <li>18</li>
          <li>19</li>
          <li>20</li>
          <li>21</li>
          <li className="active">22</li>
          <li>23</li>
          <li>24</li>
          <li>25</li>
          <li>26</li>
          <li>27</li>
          <li>28</li>
          <li>29</li>
          <li>30</li>
          <li className="inactive">1</li>
        </ul>
      </div>
    </div>
  );
};
