const http = require('http');
const fileOperations = require('./fileOperations');

const server = http.createServer(async (req, res) => {
    if (req.url === '/students' && req.method === 'GET') {
        const students = await fileOperations.getAllStudents();
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(students));
    }
    else if (req.url === '/stats' && req.method === 'GET')  {
        const students = await fileOperations.getAllStudents();
        const totalStudents = students.length;
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ totalStudents }));
    }
    else if(req.url === '/courses' && req.method === 'GET') {
        const students = await fileOperations.getAllStudents();
        const courses = [...new Set(students.map(s => s.course))];
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ courses }));
    }
    else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Not Found');
    }
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});