import { Formik, Form } from 'formik';
import { useParams, useNavigate } from 'react-router-dom';
import Formm from 'react-bootstrap/Form';
import { useMails } from '../../context/MailProvider';
import { useEffect, useState } from 'react';
import { useGroups, useDeparts, useRequests, useTypes } from '../../context';

export function MailForm() {

    const { crMail, gtMail, upMail } = useMails();
    const { groups, loadGroups } = useGroups();
    const { departs, loadDepartaments } = useDeparts();
    const { requests, loadRequests } = useRequests();
    const { types, loadTypes } = useTypes();

    const [mail, setMail] = useState({
        user: "",
        password: "",
        statu: "",
        fk_idtypeMail: "",
        fk_idReques: "",
        fk_iddepartament: "",
        fk_idgroup: "",
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
        loadTypes();
        loadRequests();
        loadDepartaments();
        loadGroups();

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
                        users: "",
                        password: "",
                        statu: "",
                        fk_idtypeMail: "",
                        fk_idReques: "",
                        fk_iddepartament: "",
                        fk_idgroup: "",
                    })
                }}
            >
                {({ handleChange, handleSubmit, values, isSubmitting }) => (

                    <Form onSubmit={handleSubmit}>
                        <div className="row justify-content-center text-left">


                            <div className="form-group col-sm-6 flex-column d-flex">
                                <label className="form-control-label px-3">Usuario</label>
                                <input type="text" name='name' placeholder='Ingrese el correo' onChange={handleChange} value={values.user}></input>
                            </div>

                            <div className='form-group col-sm-6 flex-column d-flex'>
                                <label className="form-control-label px-3">Contrase&ntilde;a</label>
                                <input type="password" name='responsible' placeholder='Ingrese la Contrase&ntilde;a' onChange={handleChange} value={values.password}></input>
                            </div>


                            <div className='form-group col-sm-6 flex-column d-flex'>
                                <label className="form-control-label px-3">
                                    Tipo de Correo
                                    <Formm.Select>
                                        {
                                            types.map(type => (
                                                <option key={type.id} onChange={handleChange} value={values.fk_idtypeMail}>{type.tipo}</option>
                                            ))
                                        }
                                    </Formm.Select>

                                </label>
                            </div>
                            <div className='form-group col-sm-6 flex-column d-flex'>
                                <label className="form-control-label px-3">
                                    Tipo de Solicitud
                                    <Formm.Select>
                                        {
                                            requests.map(request => (
                                                <option key={request.id} onChange={handleChange} value={values.fk_idrequest}>{request.solicitud}</option>
                                            ))
                                        }
                                    </Formm.Select>

                                </label>
                            </div>
                            <div className='form-group col-sm-6 flex-column d-flex'>
                                <label className="form-control-label px-3">
                                    Departamento
                                    <Formm.Select>
                                        {
                                            departs.map(departament => (
                                                <option key={departament.id} onChange={handleChange} value={values.fk_iddepartament}>{departament.departamento}</option>
                                            ))
                                        }
                                    </Formm.Select>

                                </label>
                            </div>
                            <div className='form-group col-sm-6 flex-column d-flex'>
                                <label className="form-control-label px-3">
                                    Grupo - Responsable 
                                    <Formm.Select>
                                        {
                                            groups.map(group => (
                                                <option key={group.id} onChange={handleChange} value={values.fk_idgroup}>{group.name} - {group.responsible}</option>
                                            ))
                                        }
                                    </Formm.Select>

                                </label>
                            </div>
                            <div className='form-group col-sm-6 flex-column d-flex'>
                                <label className="form-control-label px-3">
                                    Activo
                                    <Formm.Check label="S&iacute;" className="mb-2" aria-label="option 1" onChange={handleChange} value={values.statu} />
                                    <Formm.Check label="No" className="mb-2" aria-label="option 2" onChange={handleChange} value={values.statu} />
                                </label>

                            </div>

                            <div className="form-group col-sm-6 flex-column d-flex">

                                <button className='btn btn-primary' type="submit" disabled={isSubmitting}>{isSubmitting ? "Guardando..." : "Guardar"}</button>

                            </div>


                        </div>
                    </Form>
                )}

            </Formik>
        </>
    )
}

export default MailForm;