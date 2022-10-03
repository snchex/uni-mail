import express from "express";
import cors from "cors";
import session from "express-session";
import dotenv from "dotenv";
import db from "./config/database.js";
import SequelizeStore from "connect-session-sequelize";
import userRoute from "./routes/userRoute.js";
import authRoute from "./routes/authRoute.js";
import requestRoutes from "./routes/requestRoutes.js";
dotenv.config();

const app = express();

const sessionStore = SequelizeStore(session.Store);

const store = new sessionStore({
    db: db
});

/*(async()=>{
     await db.sync();
 })();*/
 

app.set('port', process.env.PORT || 3030);
/*
app.use(session({
    secret: process.env.SESS_SECRET,
    resave: false,
    saveUninitialized: true,
    store: store,
    cookie: {
        secure: 'auto'
    }
}));

app.use(cors({
    credentials: true,
    origin: 'http://localhost:3000'
}));*/
app.use(express.json());
app.use(userRoute);
app.use(authRoute);
app.use(requestRoutes)

//store.sync();\
/*
 app.listen(process.env.APP_PORT, ()=> {
    console.log('Server up and running...');
});*/

app.listen(app.get('port'), ()=> {
    console.log('Server up and running...', app.get('port'));
});
