import express from "express";
import cors from "cors";
//import session from 'express-session';
//import MysqlStore from 'express-mysql-session';
import morgan from "morgan";
import typeRoute from "./routes/typeRoutes.js";
import groupRoute from "./routes/groupRoutes.js";
import departamentRoute from "./routes/departamentRoutes.js";
import mailRoute from "./routes/mailRoutes.js";
import requestRoute from "./routes/requestRoutes.js";
import auth from "./routes/auth.js";
//import { pool } from "./database/db"
const app = express();


app.use(express.json());
app.use(cors());
//app.use(morgan('dev'));
/*

app.use(session({
    secret: 'rg2386',
    resave: false,
    saveUninitialized: false,
    store: new MysqlStore(pool), //para almacenar la session en la base de datos
}));
*/
//routes
app.use(typeRoute);
app.use(groupRoute);
app.use(departamentRoute)
app.use(mailRoute);
app.use(requestRoute);
app.use(auth);

app.set('port', process.env.PORT || 3030);
//Starting the server
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});