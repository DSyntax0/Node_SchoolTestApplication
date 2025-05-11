// Server without express in node js
const http = require('http');

//server create it
const server = http.createServer((req,res)=>{
    // res header set it
    // res.writeHead(200,{'Content-Type': 'text/plain'});
    // //send the res
    // res.end('Hello the res was ended!\n');
    
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end("<h1>Hello </h1><p>This is HTML Formate</p>");
});

//server working on this port
const PORT = 3001;
server.listen(PORT,()=>{
    console.log(`server running at http://localhost:${PORT}`);
});


