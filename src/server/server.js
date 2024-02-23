const express = require('express');
const mysql = require('mysql2');

const app = express();
const port = 5001;

app.use(express.json());

//create a MySQL database Connention

const connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '123456',
    database: "users",
    port: '3306'
});

//Connect to the database 
connection.connect((err) => {
    if (err) {
        console.error('Database connection failed: ' + err.stack);
        return;
    }
    console.log('Connection to database as id ' + connection.threadId);
});


// Define API endpoints for CRUD operations on the "section" table here

app.listen(port, () => {
    console.log(`Server is running on port : ${port}`);
});

// create Routes
app.post("/", async (req, res) => {
    const { id, name, code, img } = req.body;

    try {
        connection.query("INSERT INTO starav (id , name  , code, img) VALUES (?,?,?,?)",
            [id, name, code, img],
            (err) => {
                if (err) {
                    console.log("Error while inserting a user into the database", err);
                    return res.status(400).send();
                }
                return res.status(201).json({ message: "New use successfully created!" })
            }
        )
    } catch (err) {
        console.log(err());
        return res.status(500).send();
    }

})

app.get('/starav', (req, res) => {
    connection.query("SELECT * FROM starav", (err, data) => {
        if (err) {
            return res.json(err);
        }
        return res.json(data)
    })
})
