import express from "express";
import cors from "cors";
import morgan from "morgan";
import db from "../database/db.js";

import routes from "./routes/route.js";


const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));
app.use('/mailTypes', routes);

try {
    await db.authenticate()
    console.log('Conexion exitosa de la DB');
    
} catch (error) {
    console.log(`El error de conexion es: ${error}`);
}
/*
app.get('/', (req, res) => {
    res.send('Prueba conexion');
});
*/


app.set('port', process.env.PORT || 4030);
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});