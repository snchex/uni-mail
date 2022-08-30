import { Formik, Form } from 'formik';
import { useParams, useNavigate } from 'react-router-dom';
import { useMails } from '../../context/MailProvider';
import { useEffect, useState } from 'react';


export function MailForm() {
    const { crMail, gtMail, upMail } = useMails();
    const [mail, setMail] = useState({
        user: "",
        password: "",
        member: "",
    });

    const params = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const loadMail = async () => {
            if (params.id) {
                const mail = await gtMail(params.id);
                setMail({
                    user: mail.name,
                    password: mail.password,
                    statu: mail.statu,
                    fk_idtypeMail: mail.fk_idtypeMail,
                    fk_idReques: mail.fk_idReques,
                    fk_iddepartament: mail.fk_iddepartament,
                    fk_idgroup: mail.fk_idgroup,


                });
            }
        }
        loadMail();
    });


    return (
        <>
            <h1>{params.id ? "Editar Correo" : "Nuevo Correo"}</h1>
            <Formik
                initialValues={mail}
                enableReinitialize={true}
                onSubmit={async (values, actions) => {
                    if (params.id) {
                        console.log('Update');
                        await upMail(params.id, values);
                        navigate('/mail/list');
                    } else {
                        await crMail(values);
                        navigate('/mail/list');
                    }
                    setMail({
                        name: "",
                        responsible: "",
                        member: "",
                    })
                }}
            >
                {({ handleChange, handleSubmit, values, isSubmitting }) => (

                    <Form onSubmit={handleSubmit}>
                        <div className="row justify-content-center text-left">
                            <div className="container-fluid mx-auto px-5">

                                <div className="form-group col-sm-6 flex-column d-flex">
                                    <label className="form-control-label px-3">Departamento</label>
                                    <input type="text" name='name' placeholder='Ingrese el nombre de grupo' onChange={handleChange} value={values.name}></input>
                                </div>

                                <div className='form-group col-sm-6 flex-column d-flex'>
                                <label className="form-control-label px-3">Responsable</label> 
                                    <input type="text" name='responsible' placeholder='Ingrese el responsable' onChange={handleChange} value={values.responsible}></input>
                                </div>

                                <div className='form-group col-sm-6 flex-column d-flex'>
                                    <label className="form-control-label px-3">Miembros</label> 
                                    <input type="text" name='member' placeholder='Ingrese los miembros' onChange={handleChange} value={values.member}></input>
                                </div>
                                <div className="form-group col-sm-6 flex-column d-flex">
                                    
                                    <button className='btn btn-primary' type="submit" disabled={isSubmitting}>{isSubmitting ? "Guardando..." : "Guardar"}</button>
                                  
                                </div>

                            </div>
                        </div>
                    </Form>
                )}

            </Formik>
        </>
    )
}

export default MailForm;