const express = require('express');
const app = express();


app.use(express.json());
const db = require('./models');


//Routers
const typeRouter = require('./routes/MailTypes');
app.use('/type', typeRouter);

db.sequelize.sync().then(() => {
    app.listen(3001, () => {
        console.log("Server running on port 3001");
    
    
    });

});