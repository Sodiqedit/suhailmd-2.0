const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349121326810";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_05_57_12_24_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICAxOSxcbiAgICAgICAgNzUsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNSxcbiAgICAgICAgMjUwLFxuICAgICAgICA1MyxcbiAgICAgICAgMTUzLFxuICAgICAgICA2MSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyNDksXG4gICAgICAgIDE2MyxcbiAgICAgICAgMixcbiAgICAgICAgNTUsXG4gICAgICAgIDgwLFxuICAgICAgICA4MixcbiAgICAgICAgOTksXG4gICAgICAgIDEwMCxcbiAgICAgICAgNixcbiAgICAgICAgOTcsXG4gICAgICAgIDcwLFxuICAgICAgICA5NixcbiAgICAgICAgMTQ4LFxuICAgICAgICA0LFxuICAgICAgICAxMTcsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjEyLFxuICAgICAgICAxMixcbiAgICAgICAgMTkwLFxuICAgICAgICAyMzQsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTIzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTE1LFxuICAgICAgICAxODUsXG4gICAgICAgIDIyLFxuICAgICAgICAxNDEsXG4gICAgICAgIDczLFxuICAgICAgICAxMjcsXG4gICAgICAgIDEyMSxcbiAgICAgICAgNzcsXG4gICAgICAgIDIsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTYyLFxuICAgICAgICAzLFxuICAgICAgICAyMTgsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTk2LFxuICAgICAgICA1NixcbiAgICAgICAgMTU0LFxuICAgICAgICAxNDEsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTEwLFxuICAgICAgICAyMTYsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNjksXG4gICAgICAgIDk2LFxuICAgICAgICA0MCxcbiAgICAgICAgMTgsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTg2LFxuICAgICAgICAxMzMsXG4gICAgICAgIDMxLFxuICAgICAgICAxMDBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjM0LFxuICAgICAgICAxNzQsXG4gICAgICAgIDQsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNzAsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTMzLFxuICAgICAgICAxOTksXG4gICAgICAgIDMyLFxuICAgICAgICAxNjQsXG4gICAgICAgIDM3LFxuICAgICAgICAxMTAsXG4gICAgICAgIDExLFxuICAgICAgICAxNDMsXG4gICAgICAgIDE5LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTY2LFxuICAgICAgICA5MSxcbiAgICAgICAgMTMyLFxuICAgICAgICAyNSxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMjYsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNTcsXG4gICAgICAgIDAsXG4gICAgICAgIDY3LFxuICAgICAgICAyMDUsXG4gICAgICAgIDkzLFxuICAgICAgICA0NCxcbiAgICAgICAgNzhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjMsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjA0LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMSxcbiAgICAgICAgMzgsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTk4LFxuICAgICAgICAxMzMsXG4gICAgICAgIDc3LFxuICAgICAgICA2NCxcbiAgICAgICAgMTc1LFxuICAgICAgICAxNTYsXG4gICAgICAgIDEwNixcbiAgICAgICAgNTksXG4gICAgICAgIDY1LFxuICAgICAgICAxNzMsXG4gICAgICAgIDc5LFxuICAgICAgICAxNjQsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjQwLFxuICAgICAgICAyMzcsXG4gICAgICAgIDE1NixcbiAgICAgICAgNjcsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTg4LFxuICAgICAgICAxNzgsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjExLFxuICAgICAgICA2OSxcbiAgICAgICAgNTdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDMyLFxuICAgICAgICAxMTIsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTIsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTgzLFxuICAgICAgICAxMDQsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjMxLFxuICAgICAgICAwLFxuICAgICAgICA5MCxcbiAgICAgICAgMjI3LFxuICAgICAgICAyMDAsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjE0LFxuICAgICAgICAyNTAsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTc3LFxuICAgICAgICAxNTQsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTM0LFxuICAgICAgICAxOTQsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjU1LFxuICAgICAgICAxNjIsXG4gICAgICAgIDY1LFxuICAgICAgICA2NSxcbiAgICAgICAgMjA5LFxuICAgICAgICA2NyxcbiAgICAgICAgMTcxLFxuICAgICAgICAyOSxcbiAgICAgICAgOTVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTU2LFxuICAgICAgICAzNCxcbiAgICAgICAgMTE1LFxuICAgICAgICAyNSxcbiAgICAgICAgOTEsXG4gICAgICAgIDYxLFxuICAgICAgICAxNjYsXG4gICAgICAgIDU3LFxuICAgICAgICAyNCxcbiAgICAgICAgNTcsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTgwLFxuICAgICAgICA3MCxcbiAgICAgICAgNzUsXG4gICAgICAgIDc1LFxuICAgICAgICAyNTQsXG4gICAgICAgIDQxLFxuICAgICAgICA0LFxuICAgICAgICAyMjgsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTgwLFxuICAgICAgICAxNjMsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjUwLFxuICAgICAgICAxMzIsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTYzLFxuICAgICAgICAxNTEsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjM3LFxuICAgICAgICAxNzYsXG4gICAgICAgIDE5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDg4XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDMsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICA5NixcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxMTJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNyxcbiAgICAgICAgODgsXG4gICAgICAgIDYzLFxuICAgICAgICAyMjMsXG4gICAgICAgIDU1LFxuICAgICAgICAyNyxcbiAgICAgICAgMTgxLFxuICAgICAgICAxMCxcbiAgICAgICAgNDEsXG4gICAgICAgIDc3LFxuICAgICAgICAxMTMsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTMwLFxuICAgICAgICA1NCxcbiAgICAgICAgMjMwLFxuICAgICAgICAyMzMsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjM3LFxuICAgICAgICAxMixcbiAgICAgICAgMTk4LFxuICAgICAgICAzMyxcbiAgICAgICAgNDIsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMzcsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMTYsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNixcbiAgICAgICAgMjA3LFxuICAgICAgICAyMjYsXG4gICAgICAgIDEzNixcbiAgICAgICAgNzEsXG4gICAgICAgIDU4LFxuICAgICAgICAxODUsXG4gICAgICAgIDk0LFxuICAgICAgICA2OSxcbiAgICAgICAgNjgsXG4gICAgICAgIDE0LFxuICAgICAgICAyMzYsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjUyLFxuICAgICAgICAyMzEsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNzEsXG4gICAgICAgIDM4LFxuICAgICAgICA5LFxuICAgICAgICA4NCxcbiAgICAgICAgNTgsXG4gICAgICAgIDIwLFxuICAgICAgICA2OCxcbiAgICAgICAgNDYsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTE1LFxuICAgICAgICA0NyxcbiAgICAgICAgNTUsXG4gICAgICAgIDQsXG4gICAgICAgIDU2LFxuICAgICAgICAxMTgsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTksXG4gICAgICAgIDIwMSxcbiAgICAgICAgNTUsXG4gICAgICAgIDhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDEwMSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJaWTFvQVVJZ2NVWUoxUWZJNVpLYldHVzFKcDFnY0Q3OEpRei81c3M3Sm9ZPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDkxMjEzMjY4MTBAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjI0Q0JFRTAyQjgwMkEyQkZGQUZGMTQ2NzNDRkQ2NDJCXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTczNTAxOTgyMVxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDkxMjEzMjY4MTBAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkI1M0M0MDZDRjBDRTJFMEY2RThCNjczOUIyRDI3NjlEXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTczNTAxOTgyMVxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDkxMjEzMjY4MTBAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkUwNURFRTdCMTdBRjVDMDhFQjVBRDZCQzAyMDU3NDIxXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTczNTAxOTgyNVxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDkxMjEzMjY4MTBAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjk5RjFBRTIzM0Q2MzIyRTgwOTcxOEJCMjFEQjg4OTM0XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTczNTAxOTgyNVxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJXSWU4UTFrZlRsbWdjZFd6akQ0aWRBXCIsXG4gIFwicGhvbmVJZFwiOiBcIjI0NjkzYTgzLWI5YTItNDI3Yi04YmRjLTVkNWFiZDJjYzUzN1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMzgsXG4gICAgICAxODgsXG4gICAgICAxNDYsXG4gICAgICAyMzQsXG4gICAgICA0NCxcbiAgICAgIDIyLFxuICAgICAgMTYzLFxuICAgICAgMjU0LFxuICAgICAgMTA1LFxuICAgICAgMjE0LFxuICAgICAgNjAsXG4gICAgICAyMzQsXG4gICAgICAyNTQsXG4gICAgICAzOSxcbiAgICAgIDExMSxcbiAgICAgIDE4MSxcbiAgICAgIDUwLFxuICAgICAgMTczLFxuICAgICAgMTgzLFxuICAgICAgODVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjUsXG4gICAgICAxMzcsXG4gICAgICAyMzIsXG4gICAgICAyOSxcbiAgICAgIDczLFxuICAgICAgMTcyLFxuICAgICAgMjA5LFxuICAgICAgNSxcbiAgICAgIDIzOSxcbiAgICAgIDIwNixcbiAgICAgIDE2MCxcbiAgICAgIDExNixcbiAgICAgIDEwNyxcbiAgICAgIDIxMCxcbiAgICAgIDIzMSxcbiAgICAgIDk1LFxuICAgICAgMjIxLFxuICAgICAgMCxcbiAgICAgIDQyLFxuICAgICAgNzhcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiWEhKNjlTQ0NcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDkxMjEzMjY4MTA6MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIlNvZGlxIEVkaXRcIixcbiAgICBcImxpZFwiOiBcIjM1NDI1NDYwNjgyNzYxOjFAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSXFueExFRkVLYWFxYnNHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCI3UDZGdnk1RUpkc2pVQmE4RDgxenkyeHo1bEt1NFREV2hhekU2OEt4dzI0PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInRJd3VFYkcydzRrWVlNc2k3YVhGS2VwVmF5ekFmdG14Z2toam44eXVBQmdmaHZrL0xKYWdIQUdQVVB3eW9QcERxY21udEZEZEFnQkJCd09PREkvWEFBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlgzTUJsUVRqdjNqQzRRK2xwa0MxY3RLY0UxYklQbjMwTklSSEJYS2hvTVlSU0Y3K2l1WU9rRGFKTVhaOUl3dXRLUFFOVWRVWnNYaHpqVUliRnluZEJBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkxMjEzMjY4MTA6MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICA0NixcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxMTBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczNTAxOTgxOSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUN0clwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQ3RyLmpzb24iOiAie1wia2V5RGF0YVwiOlwiMVprT3ZUSmJ1Q2dGWThIQzJYWjRFSTBBdzhYa3dFSE1vR2dVRVllbXh2VT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNDQ2MDU2ODQyLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MzUwMTk4MjU2NzZcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
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
