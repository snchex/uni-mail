const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express();
const db = require('./models');

app.use(express.json());
app.use(cors());
app.use(morgan('dev'));


//Routers
const typeRouter = require('./routes/MailTypes');
app.use('/type', typeRouter);


app.set('port', process.env.PORT || 3030);
db.sequelize.sync().then(() => {
    app.listen(app.get('port'), () => {
        console.log('Server on port', app.get('port'));
    });

});