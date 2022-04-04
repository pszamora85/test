const express = require('express')
const AlumnoctaRoutes = require('./routes/alumnocta.routes')
const morgan = require('morgan')  

const app = express()

//Configuraciones
app.set('port', process.env.PORT || 3000)
app.set('json spaces', 2)
 
//Middleware
app.use(morgan('dev'))
app.use(express.urlencoded({extended:false}))
app.use(express.json())
 
//Routes
app.use('/api',AlumnoctaRoutes);

module.exports = app;