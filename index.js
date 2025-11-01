console.clear();
require('./public/settings/config')
console.log('starting...');
process.on("uncaughtException", console.error);

const {
default: makeWASocket, 
prepareWAMessageMedia, 
removeAuthState,
useMultiFileAuthState, 
DisconnectReason, 
fetchLatestBaileysVersion, 
makeInMemoryStore, 
generateWAMessageFromContent, 
generateWAMessageContent, 
generateWAMessage,
jidDecode, 
proto, 
delay,
relayWAMessage, 
getContentType, 
generateMessageTag,
getAggregateVotesInPollMessage, 
downloadContentFromMessage, 
fetchLatestWaWebVersion, 
InteractiveMessage, 
makeCacheableSignalKeyStore, 
Browsers, 
generateForwardMessageContent, 
MessageRetryMap 
} = require("@whiskeysockets/baileys");

const pino = require('pino');
const readline = require("readline");
const fs = require('fs');
const express = require("express");
const bodyParser = require('body-parser');
const cors = require("cors");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 5036

const { getRequest, sendTele } = require('./public/engine/telegram')

app.enable("trust proxy");
app.set("json spaces", 2);
app.use(cors());
app.use(express.urlencoded({ 
extended: true 
}));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.raw({ 
limit: '50mb', 
type: '*/*' 
}));

const { Boom } = require('@hapi/boom');
const usePairingCode = true;

const question = (text) => {
const rl = readline.createInterface({
input: process.stdin, 
output: process.stdout 
})
return new Promise((resolve) => {
rl.question(text, resolve) 
});
}

// ===== Pairing Endpoint =====

//~~~~~~~~~~~~~~~~~~~~~~~~~\\

 
//~~~~~~~~~~~~~~~~~~~~~~~~~\\


app.get('/', (req, res) => {
res.sendFile(path.join(__dirname, 'index.html'));
});

if (process.env.VERCEL) {
module.exports = app;
} else {
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
}

let file = require.resolve(__filename)
require('fs').watchFile(file, () => {
require('fs').unwatchFile(file)
console.log('\x1b[0;32m'+__filename+' \x1b[1;32mupdated!\x1b[0m')
delete require.cache[file]
require(file)
})
