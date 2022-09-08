import React, { useState, useEffect } from "react";
import { useMails } from "../hooks";

export const Home = () => {
  const { mails, loadMails } = useMails();

  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);

    const newFilter = mails.filter((mail) => {
      return mail.user.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      loadMails();
    }, 1000);
    return () => clearTimeout(timer);
  });

  const showError = filteredData.length === 0;
  const showSearch = filteredData.length !== 0;

  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  };

  return (
    <div className="card">
      <div className="row">
        <div className="col-5">
          <h4>Busqueda</h4>
          <hr />
          <input
            className="form-control"
            type="text"
            placeholder="Digite el correo"
            value={wordEntered}
            onChange={handleFilter}
          />

          {filteredData.length === 0 ? (
            <span></span>
          ) : (
            <button className="btn btn-warning" onClick={clearInput}>
              Limpiar
            </button>
          )}
        </div>

        <div className="col-7">
          <h4>Resultado</h4>
          <hr />
          {filteredData.length !== 0 && (
            <div
              className="table table-borderles"
              style={{ display: showSearch ? "" : "none" }}
            >
              <tr className="border-bottom">
                <td className="px-2">
                  <b>Correo</b>
                </td>
                <td className="px-2">
                  <b>Departamento</b>
                </td>
                <td className="px-2">
                  <b>Tipo de Solicitud</b>
                </td>
                <td className="px-2">
                  <b>Fecha de Inicio</b>
                </td>
              </tr>
              {filteredData.slice(0, 15).map((mail) => {
                return (
                  <tr className="border-bottom" key={mail.id}>
                    <td>{mail.user} </td>
                    <td>{mail.departamento}</td>
                    <td>{mail.tipo}</td>
                  </tr>
                );
              })}
            </div>
          )}
          <div
            className="alert alert-danger animate__animated animate__fadeIn"
            style={{ display: showError ? "" : "none" }}
          >
            No existe usuario <b>{wordEntered}</b>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
