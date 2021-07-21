const http = require('http')
const path = require('path')
const fs = require('fs')

const server = http.createServer((req, res) => {
    if (req.method === 'GET') {
        res.writeHead(200, "", {
            'Content-type': 'text/html; charset=utf-8;'
        })
        if (req.url === '/') {
            fs.readFile(
                path.join(__dirname, 'views', 'home.html'),
                'utf-8',
                (err, content) => {
                    if (err) throw err

                    res.end(content)
                }
            )
        }
        else if (req.url === '/about') {
            fs.readFile(
                path.join(__dirname, 'views', 'about.html'),
                'utf-8',
                (err, content) => {
                    if (err) throw err

                    res.end(content)
                }
            )
        }
        else if (req.url === '/api/users') {            
            res.writeHead(200, "", {
                'Content-type': 'text/json'
            })

            const users = [
                {id: '1', name: 'Pavel', age: 25},
                {id: '2', name: 'Elena', age: 30}
            ]

            res.end(JSON.stringify(users))
        }
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