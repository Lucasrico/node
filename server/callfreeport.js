const http = require("node:http")
const { findAvailablePort } = require("./freeport.js")

const host = '127.0.0.1';

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('callfreeport Node.js');
});

findAvailablePort(3000).then(port => {
    server.listen(port, host, () => {
        console.log(`Servidor corriendo en http://${host}:${port}`)
    })
})