import { Formik, Form } from "formik";
import { useParams, useNavigate } from "react-router-dom";
import { useDeparts } from '../../context/DepartamentProvider';
import { useEffect, useState } from 'react';

export function DepartamentForm() {
    const { crDpt, getDpt, upDpt } = useDeparts();
    const [depart, setDepartament] = useState({
        departamento: "",
    });

    const params = useParams();
    const navigate = useNavigate();


    useEffect(() => {
        const loadDepartament = async () => {
            if (params.id) {
                const depart = await getDpt(params.id);
                setDepartament({
                    departamento: depart.departamento
                });
            }
        }
        loadDepartament();
    });
    return (
        <>
            <h1> {params.id ? "Editar Departamento" : "Nuevo Departamento"}</h1>
            <Formik
                initialValues={depart}
                enableReinitialize={true}
                onSubmit={async (values, actions) => {
                    console.log(values);

                    if (params.id) {
                        console.log('Update');
                        await upDpt(params.id, values);
                        navigate('/departament/list');
                    } else {
                        await crDpt(values);
                        navigate('/departament/list');
                    }
                    setDepartament({
                        departamento: "",
                    })
                }}
            >
                {({ handleChange, handleSubmit, values, isSubmitting }) => (

                    <Form onSubmit={handleSubmit}>
                        <div className="row justify-content-center text-left">
                            <div className="form-group col-sm-6 flex-column d-flex">
                                <label className="form-control-label px-2">Departamento</label>

                                <input type="text" name='departamento' placeholder='Ingrese el departamento' onChange={handleChange} value={values.departamento}></input>
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
export default  DepartamentForm;