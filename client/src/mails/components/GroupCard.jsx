import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useGroups } from "../context/GroupProvider";
import { useNavigate } from "react-router-dom";

export default function GroupCard({ group }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  let date = new Date();
  let output = String(date.getDate()).padStart(2, '0') + '-' + String(date.getMonth() + 1).padStart(2, '0') + '-' + date.getFullYear();

  const { delGroup } = useGroups();
  const navigate = useNavigate();

  return (
    <>
      <tbody className="text-left mx-auto">
        <tr key={group.id}>
          <td className="ml-2">{group.description}</td>
          <td className="ml-2 text-center">{group.dateInicialG}</td>
          { output >= group.dateFinalG ? (
            <td className=" text-center fechared">{group.dateFinalG}</td>
          ):(

            <td className="text-center ">{group.dateFinalG}</td>
          )}
         
          <td className=" text-center">
            <button
              onClick={() => navigate(`/group/edit/${group.id}`)}
              className="m-2 btn btn-outline-warning"
            >
              <img alt="Editar"  src="https://img.icons8.com/fluency/24/000000/edit.png"
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
          <Button onClick={() => delGroup(group.id)} variant="primary">
            S&iacute; Entendido
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
