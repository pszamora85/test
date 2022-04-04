const {config} = require('dotenv')
config();

module.exports = {  
    MsqlserverURL: process.env.MSSQLSERVER_URI,
    MsqlserverUSER: process.env.MSSQLSERVER_USER,
    MsqlserverPASS: process.env.MSSQLSERVER_PASS,
    MsqlserverDB: process.env.MSSQLSERVER_DB
}