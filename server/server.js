const express =  require('express');
const app = express();
const fs = require('fs');

app.get('/total', (_req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.json({"total_offers": {volume: '350,000.20', total: '158,000', percent: '59.11'}})
});

app.get('/sellers', (_req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.json({"sellers": JSON.parse(fs.readFileSync('db/sellers.json'))})
});

app.get('/categories', (_req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.json({"categories": JSON.parse(fs.readFileSync('db/categories.json'))})
});

app.get('/top', (_req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.json({'top': JSON.parse(fs.readFileSync('db/top.json'))})
});

app.listen(5000, () => {console.log("server started on port 5000")})