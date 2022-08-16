import { createType } from '../api/type.js'
import { Form, Formik } from 'formik'
export default function TypePage() {
  return (
    <div>
      <Formik
        initialValues={{
          tipo: "",
        }}
        onSubmit={async (values) => {
          console.log(values);
          try {
            const response = await createType(values);
            console.log(response);

          } catch (error) {
            console.error(error);
          }
        }}
      >

        {({ handleChange, handleSubmit }) => (

          <Form onSubmit={handleSubmit}>

            <label>Tipo de Correo</label>
            <input type="text" name="tipo" placeholder='Tipo de Correo' onChange={handleChange}></input>

            <button type="submit">Guardar</button>

          </Form>
        )}

      </Formik>
    </div>
  )
}
