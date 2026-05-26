const express = require('express');
const app = express();
// socket.io uses the http server created by express
const http = require('http');

const socketIO = require('socket.io');
const server = http.createServer(app);
const io = socketIO(server);

app.set('view engine', 'ejs');
app.set('static', path.join(__dirname, 'public'));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log(`Server is running on :- http://localhost:${PORT}`);
});