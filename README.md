# Server
A simple server using express.js that links html, javascript &amp; css

## Links
> + http://127.0.0.1:3000/ - Index page
> + http://127.0.0.1:3000/html?file={name} - Other html files
> + http://127.0.0.1:3000/css?file={name} - CSS files
> + http://127.0.0.1:3000/js?file={name} - JS files
### Link to files using links above

## How to link files: 
+ CSS - `<link rel="stylesheet" href="http://127.0.0.1:3000/css?file=style.css>"`
+ JS - `<script src="http://127.0.0.1:3000/js?file=script.js"></script>`
+ HTML - `document.loaction.href = 'http://127.0.0.1:3000/html?file=page2.html'`
