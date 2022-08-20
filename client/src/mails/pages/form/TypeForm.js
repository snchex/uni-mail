import { Form, Formik } from 'formik'
import { useParams, useNavigate } from "react-router-dom";
import { useTypes } from '../../context/TypeProvider';
import { useEffect, useState } from "react";

export function TypeForm() {

  const { crType, getType, upType } = useTypes();
  const [type, setType] = useState({
    tipo: "",
  });

  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const loadType = async () => {

      if (params.id) {
        console.log(params.id);
        const type = await getType(params.id);
        console.log(type);
        setType({
          tipo: type.tipo
        });
      }
    }
    loadType();
  });

  return (
    <>

      <h1> {params.id ? "Editar Tipo Correo" : "Nuevo Tipo de Correo"}</h1>

      <Formik
        initialValues={type}
        enableReinitialize={true}
        onSubmit={async (values, actions) => {
          console.log(values);

          if (params.id) {
            console.log("Update");
            await upType(params.id, values);
            navigate('/mailtypeslist');
          } else {
            await crType(values);
            navigate('/mailtypeslist');
          }
          setType({
            tipo: "",
          });
        }}
      >
        {({ handleChange, handleSubmit, values, isSubmitting }) => (

          <Form onSubmit={handleSubmit}>
            <div className="row justify-content-center text-left">
              <div className="form-group col-sm-6 flex-column d-flex">
                <label className="form-control-label px-2">Tipo de Correo</label>

                <input type="text" name='tipo' placeholder='Ingrese el tipo de Correo' onChange={handleChange} value={values.tipo}></input>
                <p></p>
                <button className='btn btn-primary' type="submit" disabled={isSubmitting}>{isSubmitting ? "Guardando..." : "Guardar"}</button>

              </div>
            </div>
          </Form>
        )}
      </Formik>
    </>
  )
}
export default TypeForm;