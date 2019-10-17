const app = require('express')();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const cors = require('cors');

// only use this for dev purposes
app.use(cors());

const NEW_MESSAGE = 'NEW_MESSAGE';
const UPDATE_MESSAGES = 'UPDATE_MESSAGES';


io.on('connection', client=> {
    console.log('user Connected')
    client.on('REGISTER',state=>{
        console.log(state)
    })

    client.on(NEW_MESSAGE, state => {
        console.log(state);
        io.emit(UPDATE_MESSAGES,state)
    });

    // this is to make sure that when a client disconnects
    // the client's name will be removed from our server's list of names
    // then broadcast that to everybody connected so their list will be updated
    client.on('disconnect', () => {
        console.log('disconnect')
    });
});

server.listen(8000, function (err) {
    if (err) throw err
    console.log('listening on port 3000')
})
