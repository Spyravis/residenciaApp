import React, { useContext, useState, useEffect, Fragment } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/index.css";

export const Worker = () => {
    const { store, actions } = useContext(Context);
    const [residentdata, setResindentdata] = useState([]);

    const getCurrentUserResidentsInfo = async () => {
        const response = await fetch(process.env.BACKEND_URL + "/api/userresidentsInfo", {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token"),
            },
        });
        const data = await response.json();
        if (response.ok) {
            setResindentdata(data.response);
        }
    }
    useEffect(() => {
        getCurrentUserResidentsInfo();
    }, []);

    return (
        <div className="row mt-5">
            <h3 className="p-3 bg-info bg-opacity-10 border border-info border-start-0 border-end-0">Mis Residentes</h3>
            {Object.keys(residentdata).map((resident, index) => {
                return (
                    <div className="row my-2" key={index}>
                        <div className="col-2">
                            <div className="h4 pb-2 mb-4 border-bottom border-success">{residentdata[resident].name} {residentdata[resident].surname}</div>
                        </div>
                        <div className="col-10 d-flex">
                            {residentdata[resident].users.map((user, index) => {
                                if (user.role_user == 1) {
                                    return (
                                        <Fragment key={index}>
                                            <div className="card m-2" style={{ width: "18rem" }}>
                                                <img src={user.photo} className="card-img-top" alt={user.name} />
                                                <div className="card-body fw-light">
                                                    <p className="card-text"><i className="fa-solid fa-user" /> {user.name} {user.surname}</p>
                                                    <p className="card-text"><i className="fa-solid fa-phone" /> {user.phone}</p>
                                                    <p className="card-text"><i className="fa-solid fa-envelope" /> {user.email}</p>
                                                </div>
                                            </div>
                                        </Fragment>
                                    );
                                };
                            })}
                        </div>
                    </div>
                )
            })}
        </div>
    );
}