import { Form, Formik } from 'formik'

import { useTypes } from '../context/TypeContext';

export default function TypePage() {

  const {crType} = useTypes();

  return (
    <div>
      <Formik
        initialValues={{
          tipo: "",
        }}
        onSubmit={async (values, actions) => {
          console.log(values);
          crType(values);
          actions.resetForm();
        }}
      >

        {({ handleChange, handleSubmit, values, isSubmitting }) => (

          <Form onSubmit={handleSubmit}>

            <label>Tipo de Correo</label>
            <input className='form-control-label px-3' type="text" name="tipo" placeholder='Tipo de Correo' onChange={handleChange} value={values.tipo}></input>

            <button className='btn btn-primary' type="submit" disabled={isSubmitting}>{isSubmitting ? "Guardando..." : "Guardar"}</button>

          </Form>
        )}

      </Formik>
    </div>
  )
}
