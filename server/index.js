import express  from "express";
import cors from "cors";
import morgan from "morgan";
import typeRoute from "./routes/typeRoutes.js";
import groupRoute from "./routes/groupRoutes.js";
import departamentRoute from "./routes/departamentRoutes.js";
import mailRoute from "./routes/mailRoutes.js";
import requestRoute from "./routes/requestRoutes.js";
import flash from 'connect-flash';
const app = express();  





app.use(flash());
app.use(express.json());
app.use(cors());
//app.use(morgan('dev'));




//routes
app.use(typeRoute);
app.use(groupRoute);
app.use(departamentRoute)
app.use(mailRoute);
app.use(requestRoute);

app.set('port', process.env.PORT || 3030);
//Starting the server
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});