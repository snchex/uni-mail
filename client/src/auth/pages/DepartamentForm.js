import { Formik, Form } from "formik";
import { useParams, useNavigate } from "react-router-dom";
import { useDepartaments } from '../context/DepartamentProvider';
import { useEffect, useState } from 'react';

export default function DepartamentForm() {
    const { crDpt, getDpt, upDpt } = useDepartaments();
    const [departament, setDepartament] = useState({
        departamento: "",
    });

    const params = useParams();
    const navigate = useNavigate();


    useEffect(() => {
        const loadDepartament = async () => {
            if (params.id) {
                console.log(params.id);
                const departament = await getDpt(params.id);
                console.log(departament);
                setDepartament({
                    departamento: departament.departamento
                });
            }
        }
        loadDepartament();
    });
    return (
        <>
            <h1> {params.id ? "Editar Departamento" : "Nuevo Departamento"}</h1>
            <Formik
                initialValues={departament}
                enableReinitialize={true}
                onSubmit={async (values, actions) => {
                    console.log(values);

                    if (params.id) {
                        console.log('Update');
                        await upDpt(params.id, values);
                        navigate('/departamentlist');
                    } else {
                        await crDpt(values);
                        navigate('/departamentlist');
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
