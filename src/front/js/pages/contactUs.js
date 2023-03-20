import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

export const ContactUs = () => {
  const { store, actions } = useContext(Context);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState(false);

  const sendEmail = async () => {
    if (name && message && email) {
      const response = await fetch(process.env.BACKEND_URL + "/api/send_email",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            subject: "Contacto desde la web",
            message: "Nombre: " + name + "\nEmail: " + email + "\n\nMensaje:\n" + message,

          }),
        }
      );
      const data = await response.json();
      if (response.ok) {
        setError(<p className="alert alert-success">Mensaje enviado correctamente</p>)
      }
    }
    else {
      setError(<p className="alert alert-warning">Error al enviar el mensaje</p>);
    }
  };

  return (
    <>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29624.86897624979!2d-4.864859740470317!3d36.549865584146694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd72d906ba7cc3fd%3A0x8af27ef138736d00!2sCharco%20las%20Vi%C3%B1as!5e0!3m2!1sen!2ses!4v1679248683330!5m2!1sen!2ses" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" width="100%" height={450} />
      <div className="container">

        <div className="row my-5">
          <div className="col-6 px-5">
            <div className="wpb_wrapper">
              <div className="wpb_text_column wpb_content_element ">
                <div className="wpb_wrapper">
                  <h1><span style={{ color: '#373737' }}>Dónde estamos<br />
                  </span></h1>
                </div>
              </div> 	<div className="vc_empty_space" style={{ height: '16px' }}><span className="vc_empty_space_inner">
                <span className="empty_space_image" />
              </span></div>
              <div className="wpb_text_column wpb_content_element ">
                <div className="wpb_wrapper">
                  <p style={{ textAlign: 'justify' }}>Residencia Azahar se encuentra en Marbella, concretamente en la urbanización La Cantera, detrás de la estación de autobuses, muy cerca de la salida de la autovía a la altura de la Avenida El Trapiche.</p>
                </div>
              </div> 	<div className="vc_empty_space" style={{ height: '50px' }}><span className="vc_empty_space_inner">
                <span className="empty_space_image" />
              </span></div>
              <div className="q_elements_holder two_columns responsive_mode_from_768"><div className="q_elements_item test-2" data-animation="no" data-item-class="q_elements_holder_custom_547831"><div className="q_elements_item_inner"><div className="q_elements_item_content q_elements_holder_custom_547831" style={{ padding: '0 0 0 0' }}><div className="q_icon_with_title medium normal_icon "><div className="icon_holder " style={{}}><span data-icon-type="normal" style={{}} className="qode_iwt_icon_holder q_font_awsome_icon fa-3x  "><i className="qodef-icon-linea-icon icon-basic-geolocalize-01 qode_iwt_icon_element" style={{ color: '#4d5a31' }} /></span></div><div className="icon_text_holder" style={{}}><div className="icon_text_inner" style={{}}><h6 className="icon_title" style={{ color: '#4d5a31', fontWeight: 600 }}>Dirección</h6><p style={{ color: '#1a1a1a' }}>Calle Austria 9-1029603 Marbella (Málaga)</p><a itemProp="url" className="icon_with_title_link" href="https://g.page/ResidenciaElCarmenMarbella?we" target="_self" style={{ color: '#4d5a31' }}>Cómo llegar</a></div></div></div></div></div></div></div>	<div className="vc_empty_space" style={{ height: '25px' }}><span className="vc_empty_space_inner">
                <span className="empty_space_image" />
              </span></div>
              <div className="q_elements_holder two_columns responsive_mode_from_768"><div className="q_elements_item test-2" data-animation="no" data-item-class="q_elements_holder_custom_348464"><div className="q_elements_item_inner"><div className="q_elements_item_content q_elements_holder_custom_348464" style={{ padding: '0 0 0 0' }}><div className="q_icon_with_title medium normal_icon "><div className="icon_holder " style={{}}><span data-icon-type="normal" style={{}} className="qode_iwt_icon_holder q_font_awsome_icon fa-3x  "><i className="qodef-icon-linea-icon icon-basic-mail qode_iwt_icon_element" style={{ color: '#4d5a31' }} /></span></div><div className="icon_text_holder" style={{}}><div className="icon_text_inner" style={{}}><h6 className="icon_title" style={{ color: '#4d5a31', fontWeight: 600 }}>Correo electrónico</h6><p style={{ color: '#1a1a1a' }}>recepcion@residenciaazahar.com</p></div></div></div></div></div></div></div>	<div className="vc_empty_space" style={{ height: '25px' }}><span className="vc_empty_space_inner">
                <span className="empty_space_image" />
              </span></div>
              <div className="q_elements_holder two_columns responsive_mode_from_768"><div className="q_elements_item test-2" data-animation="no" data-item-class="q_elements_holder_custom_339194"><div className="q_elements_item_inner"><div className="q_elements_item_content q_elements_holder_custom_339194" style={{ padding: '0 0 0 0' }}><div className="q_icon_with_title medium normal_icon "><div className="icon_holder " style={{}}><span data-icon-type="normal" style={{}} className="qode_iwt_icon_holder q_font_awsome_icon fa-3x  "><i className="qodef-icon-linea-icon icon-basic-tablet qode_iwt_icon_element" style={{ color: '#4d5a31' }} /></span></div><div className="icon_text_holder" style={{}}><div className="icon_text_inner" style={{}}><h6 className="icon_title" style={{ color: '#4d5a31', fontWeight: 600 }}>Teléfono</h6><p style={{ color: '#1a1a1a' }}>952 774 555</p></div></div></div></div></div></div></div>	<div className="vc_empty_space" style={{ height: '50px' }}><span className="vc_empty_space_inner">
                <span className="empty_space_image" />
              </span></div>
              <div className="q_elements_holder two_columns responsive_mode_from_768"><div className="q_elements_item test-2" data-animation="no" data-item-class="q_elements_holder_custom_910660"><div className="q_elements_item_inner"><div className="q_elements_item_content q_elements_holder_custom_910660" style={{ padding: '0 0 0 0' }}>
                {/*<div className="wpb_raw_code wpb_content_element wpb_raw_html">
                  <div className="wpb_wrapper">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29624.86897624979!2d-4.864859740470317!3d36.549865584146694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd72d906ba7cc3fd%3A0x8af27ef138736d00!2sCharco%20las%20Vi%C3%B1as!5e0!3m2!1sen!2ses!4v1679248683330!5m2!1sen!2ses" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" width={600} height={450} />
                  </div>
  </div>*/}
              </div></div></div></div>	<div className="vc_empty_space" style={{ height: '25px' }}><span className="vc_empty_space_inner">
                <span className="empty_space_image" />
              </span></div>
            </div>
          </div>
          <div className="col-6 px-5">
            <h4 className="p-5 text-center">Solícitanos mas información a través del formulario de contacto</h4>
            <div className=" form-floating ">
              <input type="name" className="form-control" name="name" placeholder="Nombre" onChange={(e) => {
                setError(false);
                setName(e.target.value);
              }}
              ></input>
              <label htmlFor="name"> <i className="fa-solid fa-user"></i> Nombre y Apellido</label>
            </div>
            <div className=" form-floating ">
              <input type="phone" className="form-control" name="phone" placeholder="teléfono" onChange={(e) => {
                setError(false);
                setPhone(e.target.value);
              }}
              ></input>
              <label htmlFor="phone"> <i className="fa-solid fa-phone"></i> Teléfono</label>
            </div>
            <div className=" form-floating ">
              <input type="email" className="form-control" name="email" placeholder="email" onChange={(e) => {
                setError(false);
                setEmail(e.target.value);
              }}
              ></input>
              <label htmlFor="email"> <i className="fa-solid fa-envelope"></i> Email</label>
            </div>
            <div className=" form">
              <textarea rows={6} type="text" className="form-control" name="message" placeholder="Mensaje" onChange={(e) => {
                setError(false);
                setMessage(e.target.value);
              }}
              ></textarea>
              { /*<label htmlFor="message"> <i className="fa-solid fa-text"></i> Mensaje </label>*/}
            </div>
            <div className="d-grid text-center mt-3">
              <button
                className="btn btn-primary btn-lg rounded-pill "
                onClick={() => sendEmail()}
              >
                Enviar
              </button>
              {error}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
