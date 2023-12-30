let express = require('express');
let path = require('path');
let con = require('./db.js');
let bodyParser = require('body-parser');
let app = express();
let port = 8000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "frontend")));

app.post('/', (req, res) => {
    let name = req.body.name;
    let email = req.body.email;
    let message = req.body.message;

    con.connect(err => {
        if (err) throw err;
        let insertdata = "INSERT INTO forms(name, email, message) VALUES ?";
        let value = [
            [name, email, message]
        ];
        con.query(insertdata, [value], (err, result) => {
            if (err) throw err;
            res.send('Data inserted successfully');
        });
    });
});

app.listen(port, (err) => {
    if (err) throw err;
    console.log(`This app running at localhost:${port}`);
});