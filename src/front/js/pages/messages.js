import React, { Fragment, useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
import { LoggedMenu } from "../component/logged-menu";
import { NewMessage } from "../component/newMessage";
import "../../styles/home.css";
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';

export const Messages = () => {
    const navigate = useNavigate();
    const { store, actions } = useContext(Context);

    const [showInput, setShowInput] = useState(false);
    useEffect(() => {
        getMessages();
    }, []);

    const getMessages = async () => {
        await actions.getCurrentUserMessages();
    }

    console.log(store.messages);
    return (

        <div className="container text-center mt-5">
            <div className="row">
                <h2>{store.userdata.role_user == 1 ? "Familiar" : "Trabajador"} {store.userdata.name}</h2>
            </div>
            <LoggedMenu></LoggedMenu>

            <div className="row">
                <h3>Mis Mensajes</h3>

                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Asunto</th>
                            <th scope="col">Mensaje</th>
                            <th scope="col">Residente</th>
                        </tr>
                    </thead>
                    <tbody className="table-group-divider">
                        {Object.keys(store.messages).map((message, index) => {
                            return (
                                <Fragment key={index}><tr>
                                    <th scope="row">{index + 1}</th>
                                    <td>{store.messages[message].subject}</td>
                                    <td>{store.messages[message].message}</td>
                                    <td>{store.messages[message].resident.name}</td>
                                </tr></Fragment>
                            );
                        })}
                    </tbody>
                </table>


            </div>

            <div className="col-12 m-2">
                <button className="btn btn-primary" onClick={() => setShowInput(!showInput)}>{showInput ? "Esconder formulario" : "Nuevo Mensaje"}</button>
            </div>
            {showInput ? <NewMessage /> : null}




        </div>
    );
};
