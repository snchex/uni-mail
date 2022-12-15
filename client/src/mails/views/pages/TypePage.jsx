import React from "react";
import { useEffect, lazy, Suspense} from "react";
//import TypeCard from "../../components/TypeCard";
import { useTypes } from "../../context/TypeProvider";
import { useNavigate } from "react-router-dom"
import Loader from "../layouts/loader/Loader";
const TypeCard = lazy(() => import('../../components/TypeCard'));


export function TypePage() {
  const { types, loadTypes } = useTypes();
  const navigate = useNavigate(); 
  useEffect(() => {
    const timer = setTimeout(() => {
      loadTypes();
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  function renderMain() {
    if (types.length === 0)
      return (
        <div className="container">
          <h1>No existen Tipos</h1>
        </div>
      );

    return types.map((type) => <TypeCard type={type} key={type.id} />);
  }
  return (
    <Suspense fallback={Loader}>

      <div className="card mx-auto col-md-4">
        <h1 className="row justify-content-center py-3">
          Lista de tipos de Correo
        </h1>
        <button
          className="btn btn-primary mb-2 mx-3"
          onClick={() => navigate(`/mailtype/create`)}
        >
          Crear Tipo de Correo
        </button>
        <div className="container mx-auto ">
          <table className="table table-borderles ">
            <thead className="text-center">
              <tr className="border-bottom">
                <th>Tipo de Correo</th>
                <th>Acciones</th>
              </tr>
            </thead>

            {renderMain()}
          </table>
        </div>
      </div>
    </Suspense>
  );
}

export default TypePage;
