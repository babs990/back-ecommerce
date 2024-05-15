const express =  require ( 'express' )
const mysql = require("mysql2")
const app = express()
const port = process.env.port || 3000
const fs = require('fs')

app.get('/', (req, res) => {
  const connection = mysql.createConnection({
    host : "sql.freedb.tech",
    port : 3306,
    database : "freedb_maie_commerce",
    user : "freedb_babs990",
    password : "r5ZQ#swQ7Y$RbW4"
  })
  
  connection.connect((err)=>{
    if(err){
      console.log('erreur de connexion : ' +err)
    }else{
      console.log('connexion reussi')
    }
  })
  
  connection.query("SELECT * FROM produits" , (err,rows,fieds)=>{
    if(err) throw err;
    fs.writeFile('produits.json',JSON.stringify(rows),(err)=>{
      console.log(err)
    })
  })  
  
  res.send('bonjour')
})

app.listen(port, () => {
  console.log('serveur online')
})