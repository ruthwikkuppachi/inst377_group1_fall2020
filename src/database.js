//https://developerhowto.com/2018/12/29/build-a-rest-api-with-node-js-and-express-js/

let sqlite3 = require('sqlite3').verbose()
//let md5 = require('md5')

const DBSOURCE = "db.users"

// If you use the TEXT storage class to store date and time value, you need to use the ISO8601 string format as follows:
let db = new sqlite3.Database(DBSOURCE, (err) => {
    if (err) {
      // Cannot open database
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
                //console.log("Error:" + err)
            }else{
                // Table just created, creating some rows
                
            }
        });  
    }
});
//db.run(insert, ["user","user@example.com",md5("user123456")]

module.exports = db
