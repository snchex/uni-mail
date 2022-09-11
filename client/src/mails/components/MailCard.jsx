import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import { useMails } from "../hooks/MailProvider";
import { useNavigate } from "react-router-dom";

export function MailCard({ mail }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { delMail } = useMails();
  const navigate = useNavigate();
  

  return (
    <>
      <tbody  className="text-left mx-auto">
        <tr>
          <td key={mail.id} className="ml-2">{mail.user}</td>
          <td key={mail.id} className="ml-2">{mail.solicitante}</td>
          <td key={mail.id} className="ml-2 text-center">{mail.statu === 1 ? "🟢" : "🔴"}</td>
          <td key={mail.id} className="ml-2">{mail.tipo}</td>
          <td key={mail.id} className="ml-2">{mail.solicitud}</td>
          <td key={mail.id} className="ml-2">{mail.departamento}</td>
          <td key={mail.id} className="ml-2 text-center">{mail.dateSolicitud}</td>
          <td key={mail.id} className="ml-2 text-center">{mail.dateInicial}</td>
          <td key={mail.id} className="ml-2 text-center">{mail.dateFinal}</td>
          <td className="text-center">
            <button
              key={mail.id}
              onClick={() => navigate(`/mail/edit/${mail.id}`)}
              className="btn btn-outline-warning"
            >
              <img
                src="https://img.icons8.com/parakeet/24/000000/experimental-edit-parakeet.png"
                alt=""
              />
            </button>
          </td>
          <td className="text-center">
            <button onClick={handleShow} className="btn btn-outline-danger">
              <img
                src="https://img.icons8.com/plasticine/24/000000/filled-trash.png"
                alt="trash"
              />
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
          <Button onClick={() => delMail(mail.id)} variant="primary">
            Entendido
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default MailCard;

/*  const handleStatu = async (mailStatu) => {
      await toggleStatu(mail.id, mailStatu)
 
      }
  };*/
/**  <button onClick={() => handleStatu(mail.statu)}></button> */
/***  <td>{type.done === 1 ? "✔" : "✖"}</td> */
