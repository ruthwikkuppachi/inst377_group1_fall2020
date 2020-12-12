let sqlite3 = require('sqlite3').verbose()

const DBSOURCE = "db.tasks"


let db = new sqlite3.Database(DBSOURCE, (err) => {
    if (err) {
      // Cannot open database
      console.error(err.message)
      throw err
    }else{
        console.log('Connected to the SQLite database.')
        db.run(`CREATE TABLE results (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            payee text, 
            agency,
            zip datetime,
            amount INTEGER
            
            
            )`,
        (err) => {
            if (err) {
                // Table already created
                console.log("Task table already created")
                //console.log("Error:" + err)
            }else{
                // Table just created, creating some rows
                
            }
        });  
    }
});


module.exports = db
