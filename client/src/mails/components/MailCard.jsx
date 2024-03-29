import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import { useMails } from "../context/MailProvider";
import { useNavigate } from "react-router-dom";

export default function MailCard({ mail }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  let date = new Date();
  let output =
    String(date.getDate()).padStart(2, "0") +
    "-" +
    String(date.getMonth() + 1).padStart(2, "0") +
    "-" +
    date.getFullYear();
  let dateF = mail.dateFinal;

  const { delMail } = useMails();
  const navigate = useNavigate();

 
  return (
    <>
      <tbody className="text-left">
        <tr key={mail.id}>
          <td className="ml-2">{mail.user}</td>
          <td className="m-4">{mail.solicitante}</td>
          <td className="ml-2">{mail.mailType.tipo}</td>
          <td className="text-center">{mail.request.solicitud}</td>
          <td className="m-4 text-center">{mail.departament.departamento}</td>
          {mail.group ? (
            <td className="ml-2 text-center">{mail.group.description}</td>
          ): (
            <td>Sin Grupo</td>
          )}
          <td className="text-center">{mail.dateSolicitud}</td>
          <td className="text-center">{mail.dateInicial}</td>
          {output >= dateF ? (
            <td className=" text-center fechared">{mail.dateFinal}</td>
          ) : (
            <td className="text-center ">{mail.dateFinal}</td>
          )}

          <td className="text-center">
              <button
                onClick={() => navigate(`/mail/edit/${mail.id}`)}
                className="m-2 btn btn-outline-warning"
              >
              <img alt="Editar" src="https://img.icons8.com/fluency/24/000000/edit.png"
              />
            </button>

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

/*  const handleStatu = async (mailStatu) => {
      await toggleStatu(mail.id, mailStatu)
 
      }
  };*/
/**  <button onClick={() => handleStatu(mail.statu)}></button> */
/***  <td>{type.done === 1 ? "✔" : "✖"}</td> */
