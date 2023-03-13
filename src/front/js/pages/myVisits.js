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
                <h3 className="text-center">Mis Visitas</h3>

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
                            /* var utcDate = new Date(Date.UTC(2022, 03, 19, 17, 39, 49));
                             const date = store.bookings[booking].booking;
                             const year = date.getUTCFullYear();*/
                            return (
                                <Fragment key={index}>
                                    <tr>
                                        <th scope="row">{index + 1}</th>
                                        <td>{store.bookings[booking].booking}</td>
                                        <td>
                                            {store.bookings[booking].url ? <Link to={store.bookings[booking].url}>Online<br></br>Iniciar ahora </Link> : "Presencial"}</td>
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