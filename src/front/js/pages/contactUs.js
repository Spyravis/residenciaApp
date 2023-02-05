import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

export const ContactUs = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="container">
        Contact Us
    </div>
  );
};
