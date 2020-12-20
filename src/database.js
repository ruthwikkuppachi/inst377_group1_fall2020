
let sqlite3 = require('sqlite3').verbose()


const DBSOURCE = "db.users"


let db = new sqlite3.Database(DBSOURCE, (err) => {
    if (err) {
      console.error(err.message)
      throw err
    }else{
        console.log('Connected to the SQLite database.')
        db.run(`CREATE TABLE users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            userName text, 
            password text 
            
            )`,
        (err) => {
            if (err) {
                // Table already created
                console.log("User table already created")
              
            }else{
                
                
            }
        });  
    }
});


module.exports = db
