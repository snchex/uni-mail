import React, {useState} from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useNavigate } from "react-router-dom";
import { useUsers } from "../context/UserProvider";

export const UserCard = ({ usuario }) => {
  const { delUser } = useUsers();
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <> 
      <tbody>
        <tr key={usuario.uuid}>
          <td>{usuario.id}</td>
          <td>{usuario.name}</td>
          <td>{usuario.email}</td>
          <td>{usuario.role}</td>
          <td>
            <button
              onClick={() => navigate(`/users/edit/${usuario.uuid}`)}
              className="btn btn-outline-warning"
            >
              <img alt="Editar" src="https://img.icons8.com/fluency/24/000000/edit.png"
              />
            </button>
            <button
              onClick={handleShow}
              className="btn btn-outline-danger mx-2"
            >
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
          <Button onClick={() => delUser(usuario.uuid)} variant="primary">
            Entendido
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default UserCard;
