import React, { Fragment, useContext, useState, useEffect } from "react";

import { useNavigate, Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { LoggedMenu } from "../component/logged-menu";

export const MyVisits = () => {
    const navigate = useNavigate();
    const { store, actions } = useContext(Context);

    useEffect(() => {
        if (!store.userdata.id) {
            navigate("/login");
        }
        actions.getCurrentUser();
        if (store.userdata.role_user == 2) {
            actions.getResidentBookings();
        } else {
            actions.getUserSchuddle();
        }
    }, []);
    return (
        <div className="container">
            <LoggedMenu></LoggedMenu>

            <div className="row mt-5">
                <h3 className="p-3 bg-info bg-opacity-10 border border-info border-start-0 border-end-0">Mis Visitass</h3>

                <table className="table table-striped table-hover">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Fecha</th>
                            <th scope="col">Dónde</th>
                            <th scope="col">Residente</th>
                        </tr>
                    </thead>
                    <tbody className="table-group-divider">
                        {Object.keys(store.bookings).map((booking, index) => {
                            var utc = (new Date(store.bookings[booking].booking)).toUTCString()
                            const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
                            return (
                                <Fragment key={index}>
                                    <tr>
                                        <th scope="row">{index + 1}</th>
                                        <td>{new Date(utc) > new Date() ? <span><i className="fa-solid fa-hourglass" /></span> : <span><i className="fa-solid fa-check" /></span>} {new Date(utc).toLocaleDateString('es-ES', options)} a las {new Date(utc).toLocaleTimeString('es-ES', { hour: "2-digit", minute: "2-digit" })}</td>
                                        <td>
                                            {store.bookings[booking].url ? new Date(utc).toDateString() == new Date().toDateString() ? <Link to={store.bookings[booking].url}>Online<br></br>Iniciar ahora </Link> : <span><i className='fa-solid fa-mobile' /> Online</span> : <span><i className="fa-solid fa-home" /> Presencial </span>}</td>
                                        <td>{store.bookings[booking].resident.name}</td>
                                    </tr>
                                </Fragment>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
};