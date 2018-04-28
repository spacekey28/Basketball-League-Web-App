var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));

app.set('view engine', 'ejs');

var players = [
    {
        fullname: "Peter Son",
        firstname: "Peter",
        lastname: "Son",
        email: "email@gmail.com",
        mobile: "0213892833",
        note: "This is a note"
    },
    {
        fullname: "Richard Wang",
        firstname: "Richard",
        lastname: "Wang",
        email: "email2@gmail.com",
        mobile: "021123492833",
        note: "This is a note2"
    },
    {
        fullname: "Tony Ju",
        firstname: "Tony",
        lastname: "Ju",
        email: "email3@gmail.com",
        mobile: "021389232",
        note: "This is a note3"
    }
]

app.get('/', (req, res) => {
    res.render("landing");
});

app.get('/api', (req, res) => {
   
    res.render("apihome", {players: players});
})

app.get('/api/rosters/new', (req, res) => {
    res.render("form");
})

app.post('/api/rosters/new', (req, res) => {
    let fullname = req.body.fullname;
    let firstname = req.body.firstname;
    let lastname = req.body.lastname;
    let email = req.body.email;
    let mobile = req.body.mobile;
    let note = req.body.note;
    let newPlayer = { 
        fullname: fullname,
        firstname: firstname,
        lastname: lastname,
        email: email,
        mobile: mobile,
        note: note
    }
    players.push(newPlayer);
    res.redirect('/api');
})

app.listen(port, process.env.IP, () => {
    console.log("Server has started...");
})