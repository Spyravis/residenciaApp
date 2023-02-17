import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
import { LoggedMenu } from "../component/logged-menu";
import "../../styles/home.css";

export const MyHome = () => {
    const navigate = useNavigate();
    const { store, actions } = useContext(Context);

    /*useEffect(() => {
        if (!store.userdata.email) {
            alert("no logueado");
            navigate("/");
        }
    }, []);
*/
    return (

        <div className="container text-center mt-5">
            <div className="row">
                <h2>{store.userdata.role_user == 1 ? "Familiar" : "Trabajador"} {store.userdata.name}</h2>
            </div>
            <LoggedMenu></LoggedMenu>
            <div className="row">

                {Object.keys(store.userdata).map((x, index) => {
                    return (
                        <p key={index}>{x + " " + store.userdata[x]}</p>
                    );
                })}
            </div>

        </div>
    );
};
