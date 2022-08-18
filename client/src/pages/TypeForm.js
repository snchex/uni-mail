import { Form, Formik } from 'formik'
import { useParams } from "react-router-dom";
import { useTypes } from '../context/TypeContext';
import { useEffect, useState } from "react";

export default function TypePage() {

  const { crType, getType } = useTypes();
  const [type, setType] = useState({
    tipo: "",
  });

  const params = useParams();

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
    <div>

      <h1> {params.id ? "Editar Tipo Correo" : "Nuevo Tipo de Correo"}</h1>

      <Formik
        initialValues={type}
        enableReinitialize={true}
        onSubmit={async (values, actions) => {
          console.log(values);
          crType(values);
          actions.resetForm();
        }}
      >

        {({ handleChange, handleSubmit, values, isSubmitting }) => (

          <Form onSubmit={handleSubmit}>
            <div className="row justify-content-center text-left">
              <div className="form-group col-sm-6 flex-column d-flex">
                <label className="form-control-label px-2">Tipo de Correo</label>

                <input type="text" name='tipo' placeholder='Tipo de Correo' onChange={handleChange} value={values.tipo}></input>
                <p></p>
                <button className='btn btn-primary' type="submit" disabled={isSubmitting}>{isSubmitting ? "Guardando..." : "Guardar"}</button>
              </div>
            </div>
          </Form>
        )}

      </Formik>
    </div>
  )
}
