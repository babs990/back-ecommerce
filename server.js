const express =  require ( 'express' )
const mysql = require("mysql")
const app = express()
const port = process.env.port || 3000

app.get('/', (req, res) => {
  const connection = mysql.createConnection({
    host : "sql11.freesqldatabase.com",
    user : "sql11704300",
    password : "JfeIyQAKYx",
    database : "sql11704300",
    port : 3306
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
    res.json(rows)
  })  
})

app.listen(port, () => {
  console.log('serveur online')
})
