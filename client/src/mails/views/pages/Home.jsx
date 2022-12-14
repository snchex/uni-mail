import React, { useState, useEffect } from "react";
import { useMails } from "../../context";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMe } from "../../auth/authSlice";

export const Home = () => {
  const { mails, loadMails } = useMails();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isError } = useSelector((state) => state.auth);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (isError) {
        navigate("/");
      }
      dispatch(getMe());

      loadMails();
    }, 100);
    return () => clearTimeout(timer);
  }, [dispatch, isError, navigate]);

  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");

  let date = new Date();
  let output =
    String(date.getDate()).padStart(2, "0") +
    "-" +
    String(date.getMonth() + 1).padStart(2, "0") +
    "-" +
    date.getFullYear();

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

  const showError = filteredData.length === 0;
  const showSearch = filteredData.length !== 0;

  return (
    <div className="card">
      <div className="row">
        <div className="col-4">
          <h4>Busqueda</h4>
          <hr />
          <input
            className="form-control"
            type="text"
            placeholder="Digite el correo"
            autoFocus={true}
            value={wordEntered}
            onChange={handleFilter}
          />

          {filteredData.length === 0 ? <span></span> : <span></span>}
        </div>

        <div className="mx-auto col-7">
          <h4>Resultado</h4>
          <hr />
          {filteredData.length !== 0 && (
            <table
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
                  <b>Formato de Solicitud</b>
                </td>
                <td className="px-2">
                  <b>Grupo</b>
                </td>
                <td className="px-2">
                  <b>Fecha de Solicitud</b>
                </td>
                <td className="px-2">
                  <b>Fecha de Desvinculacion</b>
                </td>
              </tr>
              {filteredData.slice(0, 15).map((mail) => {
                return (
                  <tr className="border-bottom" key={mail.id}>
                    <td>{mail.user} </td>
                    <td>{mail.departament.departamento}</td>
                    <td className="text-center">{mail.request.solicitud}</td>
                    {mail.group ? (
                      <td className="ml-2 text-center">
                        {mail.group.description}
                      </td>
                    ) : (
                      <td></td>
                    )}
                    <td className="text-center">{mail.dateSolicitud}</td>
                    {output >= mail.dateFinal ? (
                      <td className=" text-center fechared">
                        {mail.dateFinal}
                      </td>
                    ) : (
                      <td className="text-center">{mail.dateFinal}</td>
                    )}
                  </tr>
                );
              })}
            </table>
          )}
          {wordEntered === "" ? (
            <div className="alert alert-success animate_animated">
              Escriba el Usuario
            </div>
          ) : (
            <div
              className="alert alert-danger animate__animated animate__fadeIn"
              style={{ display: showError ? "" : "none" }}
            >
              No Existe el Usuario: <b>{wordEntered}</b>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
