const websocket = require("ws")
const token ="91e89bd6c7b1f611304ba0f6faf45fd3"
const ENTITY_WS_URL = `ws://webhook.entitysport.com:8087/connect?token=${token}`

const wss = new websocket.Server({port:8000})

const entityWs = new websocket(ENTITY_WS_URL);

let lastKnownScoreData = null;

// Listen for connections from frontend clients
wss.on('connection', (ws) => {
    console.log('Frontend client connected');

    if (lastKnownScoreData) {
        console.log(lastKnownScoreData,"new client data");
        ws.send(JSON.stringify(lastKnownScoreData));
    }

    ws.on('close', () => {
        console.log('Frontend client disconnected');
    });
    ws.on('error', (err) => {
        console.error('Error in WebSocket connection:', err);
    });
});

// Listen for messages from EntitySport WebSocket
entityWs.on('open', () => {
    console.log('Connected to EntitySport WebSocket API');
});

entityWs.on('message', (data) => {
    // Parse the incoming data
    const parsedData = JSON.parse(data);

    // console.log(parsedData);

    // Update the cached data
    lastKnownScoreData = parsedData;

    // Broadcast the new data to all connected frontend clients
    wss.clients.forEach((client) => {
        if (client.readyState === websocket.OPEN) {
            client.send(JSON.stringify(parsedData));
        }
    });
});

entityWs.on('close', () => {
    console.log('EntitySport WebSocket closed');
});

entityWs.on('error', (error) => {
    console.error('EntitySport WebSocket error:', error);
});



