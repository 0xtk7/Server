# server
A simple express.js server that links html, javascript &amp; css

## Links
> + http://127.0.0.1:3000/ - Index page
> + http://127.0.0.1:3000/html?file={name} - Other html files
> + http://127.0.0.1:3000/css?file={name} - Css files
> + http://127.0.0.1:3000/js?file={name} - Js files


> ### Link to files using links above
## How to link files: 
+ CSS - `<link rel="stylesheet" href="http://127.0.0.1:3000/css?file=style.css>"`
+ JS - `<script src="http://127.0.0.1:3000/js?file=script.js"></script>`
+ HTML - `document.loaction.href = 'http://127.0.0.1:3000/html?file=page2.html'`
