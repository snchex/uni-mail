import { Formik, Form } from 'formik';
import { useParams, useNavigate } from 'react-router-dom';
import { useRequests } from '../../context/RequestProvider';
import { useEffect, useState } from 'react';


export function RequestForm() {
    const { crRequest, gtRequest, upRequest } = useRequests();
    const [request, setRequest] = useState({
        solicitud: "",
    });

    const params = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const loadRequest = async () => {
            if (params.id) {
                const request = await gtRequest(params.id);
                console.log(request);
                setRequest({
                    solicitud: request.solicitud,

                });
            }
        }
        loadRequest();
    });


    return (
        <>
            <h1>{params.id ? "Editar Tipo de Solicitud" : "Nuevo Tipo de Solicitud"}</h1>
            <Formik
                initialValues={request}
                enableReinitialize={true}
                onSubmit={async (values, actions) => {
                    if (params.id) {
                        console.log('Update');
                        await upRequest(params.id, values);
                        navigate('/request/list');
                    } else {
                        await crRequest(values);
                        navigate('/request/list');
                    }
                    setRequest({
                        solicitud: "",
                    })
                }}
            >
                {({ handleChange, handleSubmit, values, isSubmitting }) => (

                    <Form onSubmit={handleSubmit}>
                        <div className="row justify-content-center text-left">
                            <div className="form-group col-sm-6 flex-column d-flex">
                                <label className="form-control-label px-2">Departamento</label>

                                <input type="text" name='solicitud' placeholder='Ingrese el tipo de Solicitud' onChange={handleChange} value={values.solicitud}></input>
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

export default RequestForm;