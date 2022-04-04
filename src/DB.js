//Configuración DB
const sql = require('mssql')
const config = require('./config')

const setting = {  
user: config.MsqlserverUSER,  
password: config.MsqlserverPASS,  
server: config.MsqlserverURL,  
database: config.MsqlserverDB,
synchronize: true,
encrypt: true,
trustServerCertificate: true  
}  

const poolPromise = new sql.ConnectionPool(setting)  
.connect()  
.then(pool => {  
console.log('Connected to Server')  
return pool  
})  
.catch(err => console.log('Database Connection Failed! Bad Config: ', err)) 
module.exports = {  
    sql, poolPromise  
}  
