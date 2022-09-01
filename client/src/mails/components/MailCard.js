import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import { useMails }  from "../context/MailProvider";
import { useNavigate } from "react-router-dom";



export default function MailCard({ mail }) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const { delMail } = useMails();
    const navigate = useNavigate();

    return (
        <>
            <thead className="text-center">
                <tr className="border-bottom">
                    <th> <span class="mx-2">Usuario</span> </th>
                    <th> <span class="ml-2">Contrase&ntilde;a</span> </th>
                    <th> <span class="ml-2">Estado</span> </th>
                    <th> <span class="ml-2">Tipo</span> </th>
                    <th> <span class="ml-2">Solicitud</span> </th>
                    <th> <span class="ml-2">Departamento</span> </th>
                    <th> <span class="ml-2">Grupo</span> </th>
                    <th> <span class="ml-2">Accion</span> </th>
                    <th> <span class="ml-2">Accion</span> </th>
                  
                </tr>
            </thead>
      
        <tbody className='text-center mx-auto'>
            <tr>
                <td className='ml-2'>{mail.user}</td>
                <td className="ml-2">{mail.password}</td>
                <td className="ml-2">{mail.statu}</td>
                <td className="ml-2">{mail.fk_idtypeMail}</td>
                <td className="ml-2">{mail.fk_idrequest}</td>
                <td className="ml-2">{mail.fk_iddepartament}</td>
                <td className="ml-2">{mail.fk_idgroup}</td>
                <td><button onClick={() => navigate(`/mail/edit/${mail.id}`)} className='btn btn-outline-warning'><img src="https://img.icons8.com/parakeet/24/000000/experimental-edit-parakeet.png" alt=''/></button></td>
                <td><button onClick={handleShow} className='btn btn-outline-danger'><img src="https://img.icons8.com/plasticine/24/000000/filled-trash.png" alt='trash'/></button></td>
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
        <Button onClick={() => delMail(mail.id)} variant="primary">Entendido</Button>
        </Modal.Footer>
    </Modal>
        
        </>
       
    )
}

    /*  const handleStatu = async (mailStatu) => {
          await toggleStatu(mail.id, mailStatu)
  
          }
      };*/
    /**  <button onClick={() => handleStatu(mail.statu)}></button> */
    /***  <td>{type.done === 1 ? "✔" : "✖"}</td> */