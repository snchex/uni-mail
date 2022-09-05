SELECT mail.user, mail.password, mail.statu, mailType.tipo, request.solicitud, departament.departamento, cluster.name
FROM mail, mailType, cluster, departament, request
 WHERE mailType.id = mail.fk_idtypeMail 
 and cluster.id = mail.fk_idgroup
 and departament.id = mail.fk_iddepartament
 and request.id = mail.fk_idrequest
 ORDER BY mail.createdAt ASC;