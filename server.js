const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config(); // Load environment variables from .env file
const Ansi = require('./static/dependencies/ansi_text.js');
const bodyParser = require('body-parser');

////ansi text colors
ansi = new Ansi();
 //  ansi.test(); //uncomment this line to test ansi

//test message
ansi.yellow().bgBlack().bold().italic().underline().text(`  Hello World!  `).print();



const app = express();
app.use(cors()); // Enable CORS for all routes
app.use(bodyParser.json()); // Parse JSON bodies

// Serve static files from the 'static' directory
app.use('/static', express.static(__dirname + '/static'));

const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: '*', // Allow all origins
        methods: ['GET', 'POST']
    }
});

const NODEJS_SERVER_URL = process.env.USE_NGROK === 'true' ? process.env.NODEJS_SERVER_URL : process.env.LOCAL_NODEJS_SERVER_URL;
const FLASK_SERVER_URL = process.env.USE_NGROK === 'true' ? process.env.FLASK_SERVER_URL : process.env.LOCAL_FLASK_SERVER_URL;
const LOCAL_NODEJS_SERVER_URL = process.env.LOCAL_NODEJS_SERVER_URL;
const FLASK_PORT = process.env.FLASK_PORT;
const NODEJS_PORT = process.env.NODEJS_PORT;
const LOCAL_IP_ADDRESS = process.env.LOCAL_IP_ADDRESS;

ansi.green().bgBlack().bold().italic().underline().text('*******NODEJS_SERVER_URL: ' + NODEJS_SERVER_URL + ' , FLASK_SERVER_URL: ' + FLASK_SERVER_URL + ' , FLASK_PORT: ' + FLASK_PORT + ' , NODEJS_PORT: ' + NODEJS_PORT + ' , LOCAL_NODEJS_SERVER_URL: ' + LOCAL_NODEJS_SERVER_URL).print();

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/get-env', (req, res) => {
    ansi.green().bgBlack().bold().italic().underline().text('*******at route: /get-env , nodejsServerUrl: ' + NODEJS_SERVER_URL).print();
    res.json({ NODEJS_SERVER_URL: NODEJS_SERVER_URL });
});


app.get('/receive-from-flask', (req, res) => {
     const data = req.query;
     ansi.green().bgBlack().bold().italic().underline().text('*******at route: /receive-from-flask').print();
    ansi.green().bgBlack().bold().italic().underline().text('Received from Flask: ' + JSON.stringify(data)).print();
    console.log('Received from Flask:', data);
    //send to all clients
//    io.emit('receive-from-flask', { message, datetime, random_string, bgColor, textColor });
    io.emit('receive-from-flask', data);
//    res.json({ status: 'success', data: { message, datetime, random_string, bgColor, textColor } });
    res.json({ status: 'success', data });
});

app.post('/receive-from-flask-post', (req, res) => {
    const data = req.body;
    ansi.pink().bgBlack().bold().italic().underline().text('*******at route: /receive-from-flask-post').print();
    ansi.pink().bgBlack().bold().italic().underline().text('Received from Flask (POST): ' + JSON.stringify(data)).print();
    console.log('Received from Flask (POST):', data);
    // Send to all clients
    io.emit('receive-from-flask', data);
    res.json({ status: 'success', data });
});

function communicateWithFlask() {
    const data = {
        message: 'Hello from Node.js ___ (GET) ___ ' + randomString(10),
        datetime: new Date().toISOString(),
        random_string: 'randomString123 ___ (GET) ___ ' + randomString(10),
        bgColor: '#ffffff',
        textColor: '#000000'
    };

    data.message = data.message + '__from Node.js';
    data.random_string = data.random_string + '__from Node.js';

    const url = new URL(FLASK_SERVER_URL);
    const queryParams = new URLSearchParams(data).toString();
    ansi.orange().bgBlack().bold().italic().underline().text('*******at function: communicateWithFlask, url: ' + url + ' , queryParams: ' + queryParams).print();
/*    const options = {
        hostname: url.hostname,
        port: url.port || FLASK_PORT, // Use the port from the URL or fallback to FLASK_PORT
        path: `/receive-from-node?${queryParams}`,
        method: 'GET',
        timeout: 10000 // Increase timeout to 10 seconds
    };*/

    const options = {
        hostname: LOCAL_IP_ADDRESS,  //'localhost',
        port: FLASK_PORT, // The port on which the Flask server is running
        path: `/receive-from-node?${queryParams}`,
        method: 'GET'
    };

    const req = http.request(options, (res) => {
        let responseData = '';
        res.on('data', (chunk) => {
            responseData += chunk;
        });
        res.on('end', () => {
            console.log('Response from Flask:', responseData);
            ansi.green().bgBlack().bold().italic().underline().text('Response from Flask: ' + responseData).print();
        });
    });

    req.on('error', (error) => {
        console.error('Error communicating with Flask:', error);
        ansi.red().bgBlack().bold().italic().underline().text('Error communicating with Flask: ' + error).print();
    });

    console.log('Sending to Flask:', data);
    req.end();
}


function postCommunicateWithFlask(data) {
    // Append to existing values
    data.message = data.message + '__from Node.js';
    data.random_string = data.random_string + '__from Node.js';

    return new Promise((resolve, reject) => {
        const options = {
            hostname: LOCAL_IP_ADDRESS,
            port: FLASK_PORT,
            path: '/receive-post-from-node',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        };

        const req = http.request(options, (res) => {
            let responseData = '';
            res.on('data', (chunk) => {
                responseData += chunk;
            });
            res.on('end', () => {
                if (res.statusCode === 200) {
                    resolve(JSON.parse(responseData));
                } else {
                    reject(new Error('Failed to communicate with Flask'));
                }
            });
        });

        req.on('error', (error) => {
            reject(error);
        });

        req.write(JSON.stringify(data));
        req.end();
    });
}

io.on('connection', (socket) => {
    console.log('A user connected to Node.js server');

    socket.on('message', (data) => {
        const random_str = randomString(5);
        ansi.brown().bgPeachPuff().bold().italic().underline().text('Received message:' + JSON.stringify(data) + '___' + random_str + '  ').print();
        io.emit('response', 'Hello from Node.js!___' + random_str);

//        // Broadcast the message to all connected clients
//        io.emit('slider-update', { data: data.data });
        // Broadcast the message to all connected clients except the sender
        socket.broadcast.emit('slider-update', { data: data.data });
    });

    socket.on('disconnect', () => {
        console.log('A user disconnected');
    });
});

 app.get('/test-communicate-with-flask', (req, res) => {
    communicateWithFlask();
    ansi.cyan().bgBlack().bold().italic().underline().text('communicateWithFlask function called').print();
    res.json({ status: 'success', message: 'communicateWithFlask function called' });
});

app.post('/test-post-communicate-with-flask', (req, res) => {
    const data = req.body;
    postCommunicateWithFlask(data)
        .then(responseData => {
            res.json({ status: 'success', data: responseData });
        })
        .catch(error => {
            res.json({ status: 'error', message: error.message });
        });
});


server.listen(NODEJS_PORT, () => {
    console.log(`Node.js server running on ${LOCAL_NODEJS_SERVER_URL}`);
    ansi.cyan().bgBlack().bold().italic().underline().text(`Node.js server running on ${LOCAL_NODEJS_SERVER_URL}`).print();
   // setTimeout(communicateWithFlask, 5000); // Call communicateWithFlask after 5 seconds
});

// Method to return random string
function randomString(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}