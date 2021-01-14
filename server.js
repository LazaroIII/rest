const express = require('express');
const handleBalance = require('./controllers/handleBalance');
const handleEvent = require('./controllers/handleEvent');
const handleReset = require('./controllers/handleReset');

let accountsId = [];
let accounts = {};

const rest = () => {
    accountsId = [];
    accounts = {};
}

const app = express();
app.use(express.json());

app.post('/reset', (req, res) => { handleReset(req, res, accountsId, accounts, rest) });
app.get('/balance?', (req, res) => { handleBalance(req, res, accountsId, accounts) });
app.post('/event', (req, res) => { handleEvent(req, res, accountsId, accounts) });


app.listen(3000, () => {
    console.log(`app is running on port 3000`);
})