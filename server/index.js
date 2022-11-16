import express from "express";
import cors from "cors";
import session from "express-session";
import dotenv from "dotenv";
import SequelizeStore from "connect-session-sequelize";
import userRoute from "./routes/userRoute.js";
import authRoute from "./routes/authRoute.js";
import requestRoutes from "./routes/requestRoutes.js";
import departamentRoutes from "./routes/departamentRoutes.js";
import typeRoutes from "./routes/typeRoutes.js";
import groupRoutes from "./routes/groupRoutes.js";
import mailRoutes from "./routes/mailRoutes.js";
import db from "./config/database.js";

dotenv.config();

const app = express();

const sessionStore = SequelizeStore(session.Store);
const store = new sessionStore({
    db: db
});

(async () => {
    await db.sync();
})();


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
}));

app.use(express.json());
app.use(userRoute);
app.use(authRoute);
app.use(requestRoutes)
app.use(departamentRoutes);
app.use(typeRoutes);
app.use(groupRoutes);
app.use(mailRoutes);

store.sync();

const nDate = new Date().toLocaleString('es-ES', {
    timeZone: 'America/Asuncion'
});


app.listen(process.env.APP_PORT, () => {
    console.log('Server up and running...', `${nDate}`);
});

