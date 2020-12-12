let express = require('express')
let router = express.Router()
let db = require('../database');

let pn = sessionStorage.getItem('Payee Name', name);
let zc = sessionStorage.getItem('zip code', zip);
let ag = sessionStorage.getItem('agency', agent);
let am = sessionStorage.getItem('amount', amount);

//input from user
let zip_code = document.getElementsByTagName('input')[0];
let name_payee = document.getElementsByTagName('input')[1];
let agent = document.getElementsByTagName('input')[2];

// Create a new task
// POST localhost:<port>/task
router.post('/results', (req, res) => {
    var sql ='INSERT INTO results (zip, name, agency, amount) VALUES (?,?,?,?)'


    var params =[zip_code, name_payee, agent]
    db.run(sql, params, function (err, result) {
        if (err){
            res.status(400).json({"error": err.message})
            return;
        }
        res.json({
            "message": "success",
            "data": task,
            "id" : this.lastID
        })
    });
    
})

//GET
router.get('/results', (req, res) => {
    let sql = "select * from results"
    let params = [req.query.taskId]//TODO
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


//Delete
//TODO add entire DELETE method
router.delete('/results', (req, res) => {

    db.run(
        'DELETE * FROM results',
        req.query.taskId,
        function (err, result) {
            if (err){
                res.status(400).json({"error": res.message})
                return;
            }
            res.json({"message":"deleted", changes: this.changes})
    });
})

module.exports = router