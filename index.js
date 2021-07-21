const http = require('http')

const server = http.createServer((req, res) => {
    if (req.method === 'GET') {
        res.writeHead(200, "", {
            'Content-type': 'text/html; charset=utf-8;'
        })
        res.end(`
            <h1>FORM:</h1>
            <form method="post" action="/">
                <input type="text" name="title" />
                <button type="submit">Send</button>
            </form>
        `)
    }
    else if (req.method === 'POST') {
        res.writeHead(200, {
            'Content-type': 'text/html; charset=utf-8'
        })

        const body = []

        req.on('data', data =>{
            body.push(Buffer.from(data))
        })

        req.on('end', () => {
            const result = body.toString().split('=')[1]
            

            res.end(`
                <h1>FORM result: ${result.replace('+', ' ')}</h1>
            `)
        })
    }
})

server.listen(3000, () => {
    console.log('server is listening ...');
})