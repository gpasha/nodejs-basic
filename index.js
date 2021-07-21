const http = require('http')

const server = http.createServer((req, res) => {
    console.log('server created, req.url: ', req.url);

    res.write('<h1>Hi from NodeJS!</h1>')
    res.write('<h2>Hi from NodeJS!</h2>')
    res.write('<h3>Hi from NodeJS!</h3>')
    res.end(
        `<div style="background:red; width:200px; height:200px;">
            <h1>Test text</h1>
        </div>`
    )
})

server.listen(3000, () => {
    console.log('server is listening ...');
})