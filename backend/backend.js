const express = require('express')
var cors = require('cors')
const app = express()
const port = 3000

app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/butor', (req, res) => {
    var mysql = require('mysql')
    var connection = mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'butor_adatbazis'
    })
    
    connection.connect()
    
    connection.query('SELECT * from butor', function (err, rows, fields) {
      if (err) throw err
    
      console.log(rows);
      res.send(rows);
    })
    
    connection.end()
  
    
  })

  
  app.use(express.json());

  app.post('/felvitel', (req, res) => {
    console.log(req.body.bevitel1)
    var mysql = require('mysql')
    var connection = mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'butor_adatbazis'
    })
    
    connection.connect()
    
    connection.query('INSERT INTO butor VALUES (NULL, "'+req.body.bevitel1+'", '+req.body.bevitel2+', '+req.body.bevitel3+', "'+req.body.bevitel4+'", "'+req.body.bevitel5+'");', function (err, rows, fields) {
      if (err) throw err
    
      console.log("Sikerült");
      res.send("Sikerült");
    })
    
    connection.end()
    
  })



app.listen(port, () => {
console.log(`Example app listening at http://localhost:${port}`)
})