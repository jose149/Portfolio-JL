const express = require('express')
const bodyParser = require('body-parser')
const cors = require ('cors')
const morgan = require ('morgan')

const sequelize = require('./util/database')
const config = require('./config/config')
const errorController = require('./controllers/error');

const app = express()

app.set('view engine', 'pug');
app.set('views', 'src/views');

app.use(morgan('combine'))
app.use(bodyParser.json())
app.use(cors())

const adminRoutes= require('./routes/admin');
const customerRoutes = require('./routes/customer');

app.use('/admin', adminRoutes);
app.use(customerRoutes);
app.use(errorController.get404);

app.post('/register', (req, res)=>{
    console.log(`Hello your email is ${req.body.email}`)
})


sequelize.sync()
    .then(result => {
        app.listen(config.port)
        console.log(`Server started on port ${config.port}`)
    })
    .catch(err => {console.log(err)});
