const express = require('express');
const app = express();
const path = require('path');
// socket.io uses the http server created by express
const http = require('http');

const socketIO = require('socket.io');
const server = http.createServer(app);
const io = socketIO(server);

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));


io.on('connection', (socket) => {
  console.log('A user connected');
});

app.get('/', (req, res) => {
  res.render('index');
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log(`Server is running on :- http://localhost:${PORT}`);
});