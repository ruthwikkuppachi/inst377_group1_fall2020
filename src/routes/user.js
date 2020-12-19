let express = require('express')
let router = express.Router()
let db = require('../database');

// Create a new task
// POST localhost:<port>/task
router.post('/user', async(req, res) => {
    // now we have access to req.body due to body-parser (see index.js)
    if (!req.body) {
        return resizeBy.status(400).send('Request body is missing')
    }

    let user = {
        name: req.body.userName,
        password: req.body.password // Example 2020-11-24
    }
    // First make sure that a record doesn't already exist
  let checkIfExistSql = "select * from users where userName = ?"
  console.log("req.body.userName: " + req.body.userName)
  let params1 = [req.body.userName]
  let nameExists = false;
  const rows = await new Promise((resolve, reject) => {
      db.all(checkIfExistSql, params1, (err, rows) => {
        if (err) {
          res.status(400).json({ "error": err.message}).send();
          return;
        }
        console.log("ROWS:" + rows.length);
        if(rows.length > 0){
          nameExists = true;
          res.json({
            "message": "Username already exists" 
          }).send()
          resolve(rows);
        }
        else{
          resolve(rows);
        }
      });
    });

  console.log("Nameexists:"+ nameExists);
  if(nameExists)
    return;
    
    var sql ='INSERT INTO users (userName, password) VALUES (?,?)'
    var params =[user.name, user.password]
    db.run(sql, params, function (err, result) {
        if (err){
            res.status(400).json({"error": err.message})
            return;
        }
        res.json({
            "message": "success",
            "data": user,
            "id" : this.lastID
        })
    });
    
})

//GET
router.get('/user', (req, res) => {
    if (!req.query.userId) {
        return res.status(400).send('Missing URL parameter id')
    }
    let sql = "select * from users where id = ?"
    console.log("req.query.userId: " + req.query.userId)
    let params = [req.query.userId]
    db.get(sql, params, (err, row) => {
        if (err) {
          res.status(400).json({"error":err.message});
          return;
        }
        res.json({
            "message":"success",
            "data":row
        })
      });
})

//Update
router.put('/user', (req, res) => {
  console.log("PUT called")
  var data = {
      userName : req.query.userName,
      password : req.body.password
      
  }
  console.log("data.userName:" + data.userName + "password:" + data.password)
  if (!data.userName) {
      return res.status(400).send('Missing URL parameter id')
  }
  db.run(
      `UPDATE users set 
         password = ? 
         WHERE userName = ?`,
      [data.password, data.userName],
      function (err, result) {
          if (err){
              res.status(400).json({"error": res.message})
              return;
          }
          res.json({
              message: "success",
              data: data,
              changes: this.changes
          })
  });
})
module.exports = router