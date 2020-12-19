let express = require('express')
let router = express.Router()
let db = require('../database');

// Create a new task
// POST localhost:<port>/task
router.post('/user', (req, res) => {
    // now we have access to req.body due to body-parser (see index.js)
    if (!req.body) {
        return resizeBy.status(400).send('Request body is missing')
    }

    let user = {
        name: req.body.userName,
        password: req.body.password // Example 2020-11-24
    }
    
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
        id : req.query.userId,
        taskName: req.body.userName
        
    }
    console.log("data.id:" + data.id + " name:" + data.userName)
    if (!data.id) {
        return res.status(400).send('Missing URL parameter id')
    }
    db.run(
        `UPDATE users set 
           userName = ? 
           WHERE id = ?`,
        [data.userName, data.id],
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