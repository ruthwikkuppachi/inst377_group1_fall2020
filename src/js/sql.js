let express = require('express')
let router = express.Router()
let db = require('../database');

let pn = sessionStorage.getItem('Payee Name');
let zc = sessionStorage.getItem('zip code');
let ag = sessionStorage.getItem('agency');
let am = sessionStorage.getItem('amount');

//input from user
let zip_code = document.getElementsByTagName('input')[0];
let name_payee = document.getElementsByTagName('input')[1];
let agent = document.getElementsByTagName('input')[2];


// POST localhost:<port>/
router.post('/results', (req, res) => {

    
  let group = {
    name: req.body.name


  }
    var sql ='INSERT INTO results (zip, name, agency, amount) VALUES (?,?,?,?)'


    var params =[zc, pn, ag, am]
    db.run(sql, params, function (err, result) {
        if (err){
            res.status(400).json({"error": err.message})
            return;
        }
    });
    
})

//GET
router.get('/results', (req, res) => {
    let sql = "select * from results WHERE zc = zip_code, pn = name_payee, ag = agent"
    let params = [req.query.taskId]//TODO
    db.get(sql, params, (err, row) => {
        if (err) {
          res.status(400).json({"error":err.message});
          return;
        }
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