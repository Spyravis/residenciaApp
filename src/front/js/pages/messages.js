import React, { Fragment, useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
import { LoggedMenu } from "../component/logged-menu";
import { NewMessage } from "../component/newMessage";
import { CustomModal } from "../component/modal";
import "../../styles/home.css";

export const Messages = () => {
  const navigate = useNavigate();
  const { store, actions } = useContext(Context);

  const [showInput, setShowInput] = useState(false);
  const [modalShow, setModalShow] = useState(false);
  const [currentMessageforModal, setcurrentMessageforModal] = useState("");

  useEffect(() => {
    actions.getCurrentUser();
    actions.getCurrentUserResidentMessages();
    if (!store.userdata.id) {
      navigate("/login");
    }
  }, []);

  useEffect(() => {
    store.userdata.id != currentMessageforModal.user_id &&
      currentMessageforModal != ""
      ? actions.readedMessage(currentMessageforModal.id)
      : null;
  }, [currentMessageforModal]);

  return (
    <div className="container">
      <LoggedMenu></LoggedMenu>

      <div className="row mt-5">
        <h3 className="p-3 bg-info bg-opacity-10 border border-info border-start-0 border-end-0">Mis Mensajes</h3>
        <div className="col-12 m-2">
          <button
            className="btn btn-primary"
            onClick={() => setShowInput(!showInput)}
          >
            {showInput ? "Esconder formulario" : "Nuevo Mensaje"}
          </button>
        </div>
        {showInput ? <NewMessage /> : null}

        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Asunto</th>
              <th scope="col">Mensaje</th>
              <th scope="col">Residente</th>
              <th scope="col">X</th>
            </tr>
          </thead>
          <tbody className="table-group-divider">
            {Object.keys(store.messages).map((message, index) => {
              return (
                <Fragment key={index}>
                  <tr
                    className={
                      !store.messages[message].readed &&
                        store.messages[message].user_id != store.userdata.id
                        ? "fw-bold"
                        : null
                    }
                    role="button"
                    onClick={() => {
                      setModalShow(true);
                      setcurrentMessageforModal(store.messages[message]);
                    }}
                  >
                    <th scope="row">{index + 1}</th>
                    <td>{store.messages[message].subject}</td>
                    <td>
                      {store.messages[message].message.substring(0, 10)}...
                    </td>
                    <td>{store.messages[message].resident.name}</td>
                    <td>
                      <span>
                        <i
                          className="fa fa-trash"
                          onClick={(e) => {
                            actions.delteMessage(store.messages[message].id);
                          }}
                        ></i>
                      </span>
                    </td>
                  </tr>
                </Fragment>
              );
            })}
          </tbody>
        </table>
      </div>

      <CustomModal
        message={currentMessageforModal}
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </div>
  );
};
