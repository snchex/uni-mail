import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useRequests } from "../hooks/RequestProvider";
import { useNavigate } from "react-router-dom";

export default function RequestCard({ request }) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const { delRequest } = useRequests();
    const navigate = useNavigate();

    return (
      
        <>
            <tbody className='text-left mx-auto'>
                <tr>
                    <td className='ml-2'>{request.solicitud}</td>
                    <td className="text-center">
                        <button onClick={() => navigate(`/request/edit/${request.id}`)} className='btn btn-outline-warning'>
                            <img src="https://img.icons8.com/parakeet/24/000000/experimental-edit-parakeet.png" alt='' />
                        </button>
                    </td>
                    <td className="text-center">
                        <button onClick={handleShow} className='btn btn-outline-danger'>
                            <img src="https://img.icons8.com/plasticine/24/000000/filled-trash.png" alt='trash' />
                        </button>
                    </td>
                </tr>
            </tbody>

            <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
            >
            <Modal.Header closeButton>
            <Modal.Title>Eliminar</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            Realmente deseas eliminar? Este proceso no se puede deshacer.
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                Cancelar
            </Button>
            <Button onClick={() => delRequest(request.id)} variant="primary">Entendido</Button>
            </Modal.Footer>
            </Modal>
        </>
    )
}
