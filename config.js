const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false"  
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md-3";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website =process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "Made With LOVE!" 


global.devs = "" // Developer Contacts
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "94772136479";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" //"https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";

global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_19_49_04_26_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICA4MixcbiAgICAgICAgMjksXG4gICAgICAgIDE4MyxcbiAgICAgICAgNTcsXG4gICAgICAgIDc0LFxuICAgICAgICA0OSxcbiAgICAgICAgMjI3LFxuICAgICAgICAxODUsXG4gICAgICAgIDgwLFxuICAgICAgICAxNDYsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTI2LFxuICAgICAgICAxNTIsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTAsXG4gICAgICAgIDE0LFxuICAgICAgICAxODIsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTg5LFxuICAgICAgICAyMDcsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjM1LFxuICAgICAgICA0NSxcbiAgICAgICAgMTY0LFxuICAgICAgICA1LFxuICAgICAgICA1NCxcbiAgICAgICAgMTg2LFxuICAgICAgICAxMTMsXG4gICAgICAgIDksXG4gICAgICAgIDcwLFxuICAgICAgICA2NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTQsXG4gICAgICAgIDk0LFxuICAgICAgICAxMTMsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMyxcbiAgICAgICAgMjI4LFxuICAgICAgICAyNDMsXG4gICAgICAgIDgyLFxuICAgICAgICAxMDgsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjIsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjA5LFxuICAgICAgICAxODQsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjI2LFxuICAgICAgICAxOCxcbiAgICAgICAgMjUwLFxuICAgICAgICAxNjUsXG4gICAgICAgIDE4LFxuICAgICAgICA2LFxuICAgICAgICAxNTIsXG4gICAgICAgIDM0LFxuICAgICAgICAxMjcsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMjksXG4gICAgICAgIDEyLFxuICAgICAgICA1NyxcbiAgICAgICAgNyxcbiAgICAgICAgNTAsXG4gICAgICAgIDQ0LFxuICAgICAgICA2NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgMTcxLFxuICAgICAgICAyMDIsXG4gICAgICAgIDEyLFxuICAgICAgICAyMzAsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTUyLFxuICAgICAgICA5LFxuICAgICAgICAxNzAsXG4gICAgICAgIDcxLFxuICAgICAgICA0NyxcbiAgICAgICAgMTE2LFxuICAgICAgICAxNTQsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNzAsXG4gICAgICAgIDI1LFxuICAgICAgICAxNzQsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNjIsXG4gICAgICAgIDI1MixcbiAgICAgICAgMzcsXG4gICAgICAgIDk1LFxuICAgICAgICAxOTUsXG4gICAgICAgIDgwLFxuICAgICAgICAxMixcbiAgICAgICAgMjIxLFxuICAgICAgICAxMjMsXG4gICAgICAgIDk0LFxuICAgICAgICA1NyxcbiAgICAgICAgMTYzLFxuICAgICAgICA3NixcbiAgICAgICAgNjVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjM5LFxuICAgICAgICA1NyxcbiAgICAgICAgMTg2LFxuICAgICAgICA0NixcbiAgICAgICAgMTYzLFxuICAgICAgICAxNDIsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTA2LFxuICAgICAgICA0LFxuICAgICAgICA3MSxcbiAgICAgICAgMTQxLFxuICAgICAgICAxMzUsXG4gICAgICAgIDMxLFxuICAgICAgICAyMzQsXG4gICAgICAgIDk1LFxuICAgICAgICAxNzcsXG4gICAgICAgIDIyNixcbiAgICAgICAgOTUsXG4gICAgICAgIDI1LFxuICAgICAgICAyMzIsXG4gICAgICAgIDU0LFxuICAgICAgICA0MyxcbiAgICAgICAgOTIsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTU2LFxuICAgICAgICA2NixcbiAgICAgICAgMTExLFxuICAgICAgICA1MSxcbiAgICAgICAgMjUwLFxuICAgICAgICA2NCxcbiAgICAgICAgMTE2LFxuICAgICAgICA5MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICAxMyxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMjcsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTg5LFxuICAgICAgICAzMixcbiAgICAgICAgMjAwLFxuICAgICAgICAxODksXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTAwLFxuICAgICAgICAxNDcsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTk1LFxuICAgICAgICAyMzIsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTYwLFxuICAgICAgICAxMTEsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjAyLFxuICAgICAgICA1NyxcbiAgICAgICAgMTY4LFxuICAgICAgICAxMTcsXG4gICAgICAgIDY4LFxuICAgICAgICA3MyxcbiAgICAgICAgMTU2LFxuICAgICAgICA1MyxcbiAgICAgICAgMTgwLFxuICAgICAgICAyMjEsXG4gICAgICAgIDEyLFxuICAgICAgICAxNzcsXG4gICAgICAgIDgyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0LFxuICAgICAgICAxNDEsXG4gICAgICAgIDc2LFxuICAgICAgICAxNzYsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMzMsXG4gICAgICAgIDExNSxcbiAgICAgICAgMzQsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTEwLFxuICAgICAgICAyMTgsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTMsXG4gICAgICAgIDU0LFxuICAgICAgICA4NSxcbiAgICAgICAgMTczLFxuICAgICAgICAyNSxcbiAgICAgICAgODUsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTg3LFxuICAgICAgICA1MyxcbiAgICAgICAgMTE0LFxuICAgICAgICAxMDYsXG4gICAgICAgIDg2LFxuICAgICAgICAxNzIsXG4gICAgICAgIDksXG4gICAgICAgIDY1LFxuICAgICAgICAxNzcsXG4gICAgICAgIDgwLFxuICAgICAgICA3NSxcbiAgICAgICAgNjUsXG4gICAgICAgIDExMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDc5XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAzN1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjIzLFxuICAgICAgICAyMjYsXG4gICAgICAgIDcsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTc3LFxuICAgICAgICA5OSxcbiAgICAgICAgMjIwLFxuICAgICAgICA0NCxcbiAgICAgICAgMTIsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTM3LFxuICAgICAgICAxMDgsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMixcbiAgICAgICAgODgsXG4gICAgICAgIDIzMixcbiAgICAgICAgNzEsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTgxLFxuICAgICAgICAxMTEsXG4gICAgICAgIDg4LFxuICAgICAgICAzMyxcbiAgICAgICAgMTc2LFxuICAgICAgICAxMTUsXG4gICAgICAgIDU2LFxuICAgICAgICA5OCxcbiAgICAgICAgMjA4LFxuICAgICAgICAxMDgsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjQyLFxuICAgICAgICAyMTUsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTg4LFxuICAgICAgICA3NyxcbiAgICAgICAgNjksXG4gICAgICAgIDY5LFxuICAgICAgICAxNDUsXG4gICAgICAgIDI3LFxuICAgICAgICAyMDQsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTk4LFxuICAgICAgICAxODYsXG4gICAgICAgIDUzLFxuICAgICAgICAxMjEsXG4gICAgICAgIDEwMCxcbiAgICAgICAgNTYsXG4gICAgICAgIDIxMixcbiAgICAgICAgNTYsXG4gICAgICAgIDU4LFxuICAgICAgICAyMDYsXG4gICAgICAgIDcsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTg2LFxuICAgICAgICAyMDAsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNjYsXG4gICAgICAgIDE2LFxuICAgICAgICAxMzMsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTYxLFxuICAgICAgICAyMDEsXG4gICAgICAgIDEwXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMzAsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiS2NJdlN6eC9qNFFpeDliUHErUENCRmMyRlZMNTVyK0JzNnRvMTRrSFl6MD1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiTGkzczg0MVNUalcwRjNibnR1d00td1wiLFxuICBcInBob25lSWRcIjogXCI2YmI0OTU2ZC1iZGQxLTRlNzYtYmQzMy1mYTUyMjBmMzAyMzRcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNjYsXG4gICAgICAxMixcbiAgICAgIDgwLFxuICAgICAgMTI0LFxuICAgICAgMTgxLFxuICAgICAgOTEsXG4gICAgICAyMixcbiAgICAgIDIyMCxcbiAgICAgIDE1NSxcbiAgICAgIDIwNSxcbiAgICAgIDIzNCxcbiAgICAgIDE4NSxcbiAgICAgIDI0OSxcbiAgICAgIDIxOSxcbiAgICAgIDI1NSxcbiAgICAgIDgwLFxuICAgICAgMTIwLFxuICAgICAgOTgsXG4gICAgICAxMTUsXG4gICAgICAyMjlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgOTksXG4gICAgICAxNjgsXG4gICAgICAyMTYsXG4gICAgICAyMjgsXG4gICAgICAxNzAsXG4gICAgICA3NCxcbiAgICAgIDIzMyxcbiAgICAgIDEzLFxuICAgICAgMTkxLFxuICAgICAgMTY0LFxuICAgICAgMTQ5LFxuICAgICAgNTgsXG4gICAgICAyMjAsXG4gICAgICAxODUsXG4gICAgICAxMDEsXG4gICAgICAxNDEsXG4gICAgICAzOSxcbiAgICAgIDg2LFxuICAgICAgMTAyLFxuICAgICAgMjI2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjk0OUpEMkFUXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5NDc3MjEzNjQ3OToyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyMTM2NzkzMjEyMTIzNDoyQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ01LMzFLQURFTkh4dE1BR0dBSWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiejFySStULzZvdkpVUjJCRFJsZWJNM0NUMGRRdmJJZDZYY0piTWgza01pbz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJwdjNSQ1REREFHRU9RRGpjSFBldWs3ZDA1K2NLUUdKZ09CTFB1ZUdnKzFGNzlFSXFqMFFQZ0QyL0xZN1VyYVBuSFVpSXF0R1JXN3hmYi9hdTROZHdCQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJRVEt1NWowVmw1Z05EQndpRGNpUHBnTk1zRXdWcTk2ejIvRzVKTVZzUWpadk51ZnFjNC9zMzlxY0RQcVVZU29vRkhsOHBaSjNCWFBhNGZIR3JodHNCZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5NDc3MjEzNjQ3OToyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDQyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3NDU2OTY5ODEsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFQTDhcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQVBMOC5qc29uIjogIntcImtleURhdGFcIjpcIldJZkhkQ3ZtNTI4d1JBcWgrTDk2cnBJeFlSc0hhdElYdXRDZmUvUWR4UTg9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6ODczNzk4NTk0LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3NDU2MDI1MTAzMzhcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "3.0.1-developement",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-MD",
  ownername:process.env.OWNER_NAME|| "Suhail:Shy<3",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
