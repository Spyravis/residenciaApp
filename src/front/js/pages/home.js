import React, { useContext } from "react";
import { Link } from "react-router-dom";


import { Context } from "../store/appContext";
import "../../styles/home.css";



export const Home = () => {
  const { store, actions } = useContext(Context);



return (
        <div className="text-center mt-5">
            
            <Link to="/profile">
              <button className="btn btn-warning">profile</button>
            </Link>

        </div>
    );
};
