const fs = require('fs');
const express = require('express');
const app = express();

const page = { 
    host: '127.0.0.1',
    port: 3000
}

// link index html file
app.get('/', (req, res) => {
    res.setHeader('Content-Type', 'text/html');
    res.end(fs.readFileSync('./example/index.html', 'utf8'));
});

// link other html files
// http://127.0.0.1:3000/html?file={name}
app.get('/html', (req, res) => {
    var html = req.query.file;
    res.end(fs.readFileSync(`./example/${html}`, 'utf8'));
});

// link css
// http://127.0.0.1:3000/css?file={name}
app.get('/css', (req, res) => {
    var css = req.query.file;
    res.end(fs.readFileSync(`./example/${css}`, 'utf8'))
});

// link js
// http://127.0.0.1:3000/js?file={name}
app.get('/js', (req, res) => {
    var js = req.query.file;
    res.end(fs.readFileSync(`./example/${js}`, 'utf8'));
});

app.listen(page["port"], () => {
    console.log(`Running on: http://${page["host"]}:${page["port"]}`)
})