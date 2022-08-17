import { createType } from '../api/type.js'
import { Form, Formik } from 'formik'
import {useType} from '../context/TypeContext';


export default function TypePage() {
;
  return (
    <div>
      <Formik
        initialValues={{
          tipo: "",
        }}
        onSubmit={async (values, actions) => {
          console.log(values);
          try {
            const response = await createType(values);
            console.log(response);
            actions.resetForm();
          } catch (error) {
            console.error(error);
          }
        }}
      >

        {({ handleChange, handleSubmit, values, isSubmitting }) => (

          <Form onSubmit={handleSubmit}>

            <label>Tipo de Correo</label>
            <input type="text" name="tipo" placeholder='Tipo de Correo' onChange={handleChange} value={values.tipo}></input>

            <button type="submit" disabled={isSubmitting}>{isSubmitting ? "Guardando..." : "Guardar"}</button>

          </Form>
        )}

      </Formik>
    </div>
  )
}
