//Modal ->> npm install react-bootstrap bootstrap
import React from 'react'
import { Modal, Button } from 'react-bootstrap'

export const CustomModal = (props) => {
    return props.message ? (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    {props.message.subject}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h4>Residente {props.message.resident.name}</h4>
                <p>
                    {props.message.message}
                </p>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    ) : ""
}