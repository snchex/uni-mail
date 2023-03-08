### `npm install`

### `Atencion `
La base de datos esta en modo root por default la configuracion se encuentra en config/database.js

### `mysql -u root -p`
### `CREATE DATABASE emailMonitoring;`

### `CREATE USER 'registerMail'@'localhost' IDENTIFIED BY 'Regis3022_';`
### `GRANT CREATE, DELETE, SELECT, INSERT, UPDATE ON dbRegistrationService.* TO 'registerMail'@'localhost';`
### `FLUSH PRIVILEGES;`

### ` Importar backup de base de datos para el usuario`
###   `sudo mysql -h localhost -u root -p emailMonitoring < backup.sql -f `

Ejecutar el servidor
 `npm run dev`
