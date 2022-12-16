const express = require('express');
const app = express();

app.get('/total', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.json({"total_offers": {volume: '350,000.20', total: '158,000', percent: '59.11'}})
});

app.get('/sellers', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.json({"sellers": [
        {id: 1, name: 'Sam Lee', tag: '@samlee'}, 
        {id: 2, name: 'Jane Donald', tag: '@janedoe'}, 
        {id: 3, name: 'Lois Lane', tag: '@supermanchic'}, 
        {id: 4, name: 'Barry Allen', tag: '@flash'}, 
        {id: 5, name: 'Jenner Foster', tag: '@jennnerfos'}, 
        {id: 6, name: 'Sam Lee', tag: '@samlee'}, 
        {id: 7, name: 'Jane Donald', tag: '@janedoe'}, 
        {id: 8, name: 'Lois Lane', tag: '@supermanchic'}, 
        {id: 9, name: 'Barry Allen', tag: '@flash'}, 
        {id: 10, name: 'Jenner Foster', tag: '@jennnerfos'}, 
        {id: 11, name: 'Jane Donald', tag: '@janedoe'}, 
        {id: 12, name: 'Lois Lane', tag: '@supermanchic'}, 
        {id: 13, name: 'Barry Allen', tag: '@flash'}, 
    ]})
});

app.get('/categories', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.json({"categories": [
        {id: 1, name: 'Popular'}, 
        {id: 2, name: 'Arts'}, 
        {id: 3, name: 'Games'}, 
        {id: 4, name: 'Music'}, 
        {id: 5, name: 'Sports'}, 
        {id: 6, name: 'Photography'}, 
    ]})
});

app.get('/top', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.json({"top": [
        {id: 1, name: 'Cool Cyber Apes', tag:'@coolcyberapes', volume:'0.24', per_day:'+25', owners:'5.5', items:'12.5'}, 
        {id: 2, name: 'Shadow Cube', tag:'@shadowcube', volume:'0.13', per_day:'-15', owners:'5.5', items:'12.3'}, 
        {id: 3, name: 'Satoshi Mori', tag:'@satoshimori', volume:'0.22', per_day:'+27', owners:'987', items:'2.1'}, 
        {id: 4, name: 'The Scars', tag:'@thescars', volume:'0.18', per_day:'-11', owners:'2.7', items:'4.5'}, 
        {id: 5, name: 'Gachi muchenik', tag:'@gachimuchenik', volume:'0.16', per_day:'-44', owners:'3.9', items:'10.2'},
        {id: 6, name: 'Cool Cyber Apes', tag:'@coolcyberapes', volume:'0.24', per_day:'+25', owners:'5.5', items:'12.5'}, 
        {id: 7, name: 'Shadow Cube', tag:'@shadowcube', volume:'0.13', per_day:'-15', owners:'5.5', items:'12.3'}, 
        {id: 8, name: 'Satoshi Mori', tag:'@satoshimori', volume:'0.22', per_day:'+27', owners:'987', items:'2.1'}, 
        {id: 9, name: 'The Scars', tag:'@thescars', volume:'0.18', per_day:'-11', owners:'2.7', items:'4.5'}, 
        {id: 10, name: 'Gachi muchenik', tag:'@gachimuchenik', volume:'0.16', per_day:'-44', owners:'3.9', items:'10.2'},  
    ]})
});

app.listen(5000, () => {console.log("server started on port 5000")})