import express  from "express";
import typeRouter from "./routes/typeRoutes.js";
import indexRouter from "./routes/index.js";
import { PORT } from "./config.js";
import flash from 'connect-flash';
const app = express();  





app.use(flash());
app.use(express.json());





//routes
app.use(typeRouter);
app.use(indexRouter);


app.listen(PORT);
console.log(`Serving on port ${PORT}`);