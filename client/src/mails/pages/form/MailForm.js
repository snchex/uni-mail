import { Formik, Form } from 'formik';

import { useParams, useNavigate } from 'react-router-dom';
import { useMails } from '../../context/MailProvider';
import { useEffect, useState } from 'react';
import { useGroups, useDeparts, useRequests, useTypes } from '../../context';
import Formm from 'react-bootstrap/Form';

export function MailForm() {

    const { crMail, gtMail, upMail } = useMails();
    const { groups, loadGroups } = useGroups();
    const { departs, loadDepartaments } = useDeparts();
    const { requests, loadRequests } = useRequests();
    const { types, loadTypes } = useTypes();


    const [mail, setMail] = useState({
        user: "",
        password: "",
        statu: 0,
        fk_idtypeMail: "",
        fk_idrequest: "",
        fk_iddepartament: "",
        fk_idgroup: "",
    });
    const params = useParams();
    const navigate = useNavigate();
    
    
    useEffect(() => {
        const timer = setTimeout(() => {
            const loadMail = async () => {
                if (params.id) {
                    const mail = await gtMail(params.id);
                    setMail({
                        user: mail.user,
                        password: mail.password,
                        statu: mail.statu,
                        fk_idtypeMail: mail.fk_idtypeMail,
                        fk_idrequest: mail.fk_idrequest,
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
        }, 1000);
        return () => clearTimeout(timer);
    });

    return (
        <>
            <h1>{params.id ? "Editar Correo" : "Nuevo Correo"}</h1>
            <Formik
                initialValues={mail}
                enableReinitialize={true}
                
                validate={(values) => {
                    let errores = {};
                    
                    if (!values.password) {
                        errores.password = 'Por favor ingrese la contraseña';
                    } else if (!/^.{4,12}$/.test(values.password)) {
                        errores.password = 'La contraseña tiene que ser de 4 a 12 digitos';
                    }
                    if (!values.user) {
                        errores.user = 'Por favor ingrese su usuario';
                    } else if (!/^[.a-za-z0-9]+@(?:[a-za-z0-9]+\.)+[a-za-z]+$/.test(values.user)) {
                        errores.user = 'Por favor ingrese un correo valido';
                    }
                    return errores;

                }}

                onSubmit={async (values, actions) => {
                    if (params.id) {
                        console.log('Update');
                        await upMail(params.id, values);
                        navigate('/mail/list');
                    } else {

                        await crMail(values);
                    }
                    navigate('/mail/list');
                    setMail({
                        user: "",
                        password: "",
                        statu: "",
                        fk_idtypeMail: "",
                        fk_idrequest: "",
                        fk_iddepartament: "",
                        fk_idgroup: "",
                    })
                }}
            >
                {({ handleChange, handleSubmit, values, errors, touched, isSubmitting, handleBlur }) => (

                    <Form onSubmit={handleSubmit}>
                        <div className="row justify-content-center text-left">


                            <div className="form-group col-sm-6 flex-column d-flex">
                                <label className="form-control-label px-3">Usuario</label>
                                <input type="text" name='user' placeholder='Ingrese el correo' onBlur={handleBlur} onChange={handleChange} value={values.user} />
                                {touched.user && errors.user && <div className="error">{errors.user}</div>}
                            </div>

                            <div className='form-group col-sm-6 flex-column d-flex'>
                                <label className="form-control-label px-3">Contrase&ntilde;a</label>
                                <input type="password" name='password' placeholder='Ingrese la Contrase&ntilde;a' onBlur={handleBlur} onChange={handleChange} value={values.password} />
                                {touched.password && errors.password && <div className="error">{errors.password}</div>}
                            </div>


                            <div className='form-group col-sm-6 flex-column d-flex'>
                                <label className="form-control-label px-3">
                                    Tipo de Correo
                                    <Formm.Select   onChange={handleChange} name='fk_idtypeMail'>
                                 
                                        <option></option>
                                        {
                                            types.map(type => (
                                                <option key={type.id} value={type.id}>{type.tipo}</option>
                                            ))
                                        }
                                  

                                    </Formm.Select>
                                </label>
                            </div>
                            <div className='form-group col-sm-6 flex-column d-flex'>
                                <label className="form-control-label px-3">
                                    Tipo de Solicitud
                                    <Formm.Select name='fk_idrequest' onBlur={handleBlur} onChange={handleChange} >
                                        <option></option>
                                        {
                                            requests.map(request => (
                                                <option key={request.id} value={request.id} >{request.solicitud}</option>
                                            ))
                                        }
                                    </Formm.Select>

                                </label>
                            </div>
                            <div className='form-group col-sm-6 flex-column d-flex'>
                                <label className="form-control-label px-3">
                                    Departamento
                                    <Formm.Select name='fk_iddepartament' onChange={handleChange} >
                                        <option></option>
                                        {
                                            departs.map(departament => (
                                                <option key={departament.id} value={departament.id} >{departament.departamento}</option>
                                            ))
                                        }
                                    </Formm.Select>

                                </label>
                            </div>
                            <div className='form-group col-sm-6 flex-column d-flex'>
                                <label className="form-control-label px-3">
                                    Grupo - Responsable
                                    <Formm.Select name='fk_idgroup' onChange={handleChange} >
                                        <option></option>
                                        {
                                            groups.map(group => (
                                                <option key={group.id} value={group.id} >{group.name} - {group.responsible}</option>
                                            ))
                                        }
                                    </Formm.Select>

                                </label>
                            </div>
                            <div className='form-group col-sm-6 flex-column d-flex'>
                                <label className="form-control-label px-3">
                                    Activo
                                    <Formm.Check label="S&iacute;" className="mb-2" name="statu" aria-label="option 1" onChange={handleChange} value={1} />

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