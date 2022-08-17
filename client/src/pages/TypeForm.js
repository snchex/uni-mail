import { createType } from '../api/type.js'
import { Form, Formik } from 'formik'



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
            <input className='form-control-label px-3' type="text" name="tipo" placeholder='Tipo de Correo' onChange={handleChange} value={values.tipo}></input>

            <button className='btn btn-primary' type="submit" disabled={isSubmitting}>{isSubmitting ? "Guardando..." : "Guardar"}</button>

          </Form>
        )}

      </Formik>
    </div>
  )
}
