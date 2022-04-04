
const { Router } = require('express');
const { sql }  = require('../DB')   

const router = Router();
const { poolPromise } = require('../DB') 

//Raiz
router.get('/AlumnosCta', async (req, res) => {    
try {  
    const pool = await poolPromise  
    const result = await pool.request()  
    .input("Carnet", sql.VarChar(12), req.body.Carnet)  
    .input("Idciclox", sql.Int, req.body.idciclo)      
    .execute('Colegio.GetCtaCorrienteWS_Campus',function(err, profileset){  
    if (err)  
    {  
        console.log(err)  
    }  
    else {  
        var send_data = profileset.recordset  
        res.json(send_data)  
    }  
    })  
    } catch (err) {  
        res.status(500)  
        res.send(err.message)  
    }  
})
 
module.exports = router;