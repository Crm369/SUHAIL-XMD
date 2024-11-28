const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




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

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_19_43_11_28_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDg5LFxuICAgICAgICAzOCxcbiAgICAgICAgNzQsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTYyLFxuICAgICAgICAzMixcbiAgICAgICAgMTE2LFxuICAgICAgICA3MCxcbiAgICAgICAgMTgzLFxuICAgICAgICA3OCxcbiAgICAgICAgMTA1LFxuICAgICAgICAyMzEsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjE1LFxuICAgICAgICA1MyxcbiAgICAgICAgMTgsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjI0LFxuICAgICAgICAyNTUsXG4gICAgICAgIDczLFxuICAgICAgICAyMjEsXG4gICAgICAgIDg2LFxuICAgICAgICAxNCxcbiAgICAgICAgODMsXG4gICAgICAgIDE1NixcbiAgICAgICAgOTYsXG4gICAgICAgIDE4LFxuICAgICAgICAxNjMsXG4gICAgICAgIDExLFxuICAgICAgICAxMTYsXG4gICAgICAgIDg2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTY5LFxuICAgICAgICA3NyxcbiAgICAgICAgMTUsXG4gICAgICAgIDgzLFxuICAgICAgICAxMCxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMzMsXG4gICAgICAgIDU2LFxuICAgICAgICAyMTIsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjEzLFxuICAgICAgICAxOTksXG4gICAgICAgIDM4LFxuICAgICAgICAxMzksXG4gICAgICAgIDYzLFxuICAgICAgICA5MixcbiAgICAgICAgMTUzLFxuICAgICAgICA3LFxuICAgICAgICA4NSxcbiAgICAgICAgMTc2LFxuICAgICAgICAyNyxcbiAgICAgICAgMTMwLFxuICAgICAgICA2NSxcbiAgICAgICAgMjE2LFxuICAgICAgICAxMTUsXG4gICAgICAgIDYxLFxuICAgICAgICAxMzUsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTEyLFxuICAgICAgICAxODYsXG4gICAgICAgIDY0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3MixcbiAgICAgICAgNzEsXG4gICAgICAgIDY0LFxuICAgICAgICAxMjEsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNTAsXG4gICAgICAgIDE5NixcbiAgICAgICAgODgsXG4gICAgICAgIDUzLFxuICAgICAgICA2NCxcbiAgICAgICAgNTgsXG4gICAgICAgIDUyLFxuICAgICAgICAyNSxcbiAgICAgICAgMjYsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjA0LFxuICAgICAgICAyNSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxODUsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMzksXG4gICAgICAgIDE5MSxcbiAgICAgICAgOTcsXG4gICAgICAgIDEwLFxuICAgICAgICAxNjksXG4gICAgICAgIDg1LFxuICAgICAgICAyMDQsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTk0LFxuICAgICAgICAxNDEsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTAyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTc3LFxuICAgICAgICAxMjMsXG4gICAgICAgIDExNixcbiAgICAgICAgMTc4LFxuICAgICAgICA5MCxcbiAgICAgICAgMTk5LFxuICAgICAgICAxNDMsXG4gICAgICAgIDI0NixcbiAgICAgICAgNzEsXG4gICAgICAgIDAsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTc1LFxuICAgICAgICAyMjcsXG4gICAgICAgIDEyMCxcbiAgICAgICAgNzQsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjEwLFxuICAgICAgICAxNixcbiAgICAgICAgNjUsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTE3LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE3NCxcbiAgICAgICAgOTAsXG4gICAgICAgIDcyLFxuICAgICAgICAxMTgsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjMzLFxuICAgICAgICAxMzUsXG4gICAgICAgIDQyLFxuICAgICAgICAxMjdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyOCxcbiAgICAgICAgNTYsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxOCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMzEsXG4gICAgICAgIDgxLFxuICAgICAgICA5MixcbiAgICAgICAgMTI1LFxuICAgICAgICA1NixcbiAgICAgICAgMTUxLFxuICAgICAgICAxNjgsXG4gICAgICAgIDk5LFxuICAgICAgICAxNTAsXG4gICAgICAgIDQxLFxuICAgICAgICAxNDEsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTU3LFxuICAgICAgICAyMzIsXG4gICAgICAgIDM0LFxuICAgICAgICAxMjcsXG4gICAgICAgIDQsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNzEsXG4gICAgICAgIDg2LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjA0LFxuICAgICAgICA5NixcbiAgICAgICAgMjMsXG4gICAgICAgIDk1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzLFxuICAgICAgICA2NixcbiAgICAgICAgMTE4LFxuICAgICAgICAxMDcsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTkxLFxuICAgICAgICA0MSxcbiAgICAgICAgMjE2LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTg0LFxuICAgICAgICAxMzIsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTE4LFxuICAgICAgICAxMDEsXG4gICAgICAgIDgzLFxuICAgICAgICAyNTAsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjEzLFxuICAgICAgICAyMzksXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTIxLFxuICAgICAgICAxMjAsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjIsXG4gICAgICAgIDg1LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE2NixcbiAgICAgICAgOTEsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTk5LFxuICAgICAgICA5NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICA5OVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMjFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzAsXG4gICAgICAgIDUxLFxuICAgICAgICAxMTUsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTgzLFxuICAgICAgICAyMDgsXG4gICAgICAgIDkwLFxuICAgICAgICAyMDUsXG4gICAgICAgIDE4MixcbiAgICAgICAgNjksXG4gICAgICAgIDcwLFxuICAgICAgICAyNDksXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTEsXG4gICAgICAgIDE0MyxcbiAgICAgICAgOSxcbiAgICAgICAgNyxcbiAgICAgICAgMTU2LFxuICAgICAgICA3LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjIzLFxuICAgICAgICA3MSxcbiAgICAgICAgODIsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMDUsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTY5LFxuICAgICAgICAxOTgsXG4gICAgICAgIDgwLFxuICAgICAgICAxNDMsXG4gICAgICAgIDQ4LFxuICAgICAgICAyNCxcbiAgICAgICAgMTM0LFxuICAgICAgICAxMjAsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTE2LFxuICAgICAgICAxOCxcbiAgICAgICAgMTY2LFxuICAgICAgICAzNyxcbiAgICAgICAgMjAyLFxuICAgICAgICAxMzUsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMTEsXG4gICAgICAgIDc2LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTcsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTM2LFxuICAgICAgICAxMzgsXG4gICAgICAgIDE4NSxcbiAgICAgICAgOTgsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTY0LFxuICAgICAgICAxNTMsXG4gICAgICAgIDIzMSxcbiAgICAgICAgODcsXG4gICAgICAgIDgwLFxuICAgICAgICAyNDAsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTU0LFxuICAgICAgICA3XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA0NCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJRbTlvcU9sR2lwZk5wZTdNNzFXdjYwY2wvaHlBNTU1U2tzcUwrOFErK2lBPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIyNTA3MDQwMzYwMzFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjNBNTQ5QTIzQjY0OUQxQjEzQ0NGXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTczMjgyMzAwMVxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJlOS1vTHVpaFRoMmZ0NmJKSUtIZVh3XCIsXG4gIFwicGhvbmVJZFwiOiBcIjhjMDQ0NmE4LWYwMmMtNDRjNC04MTYzLWI5YzU3NjM3YmYxMVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA1NixcbiAgICAgIDU5LFxuICAgICAgMTI5LFxuICAgICAgNTIsXG4gICAgICAyMSxcbiAgICAgIDEyNyxcbiAgICAgIDIyOSxcbiAgICAgIDY2LFxuICAgICAgODUsXG4gICAgICAxMjEsXG4gICAgICAyMTgsXG4gICAgICA0OCxcbiAgICAgIDEzNCxcbiAgICAgIDEzMyxcbiAgICAgIDIwMSxcbiAgICAgIDUyLFxuICAgICAgNDYsXG4gICAgICAyMzAsXG4gICAgICAxMzQsXG4gICAgICA2NVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IGZhbHNlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNjcsXG4gICAgICAyMDMsXG4gICAgICAyMDIsXG4gICAgICAzLFxuICAgICAgMjIsXG4gICAgICAxMjgsXG4gICAgICAxMDgsXG4gICAgICAxOTgsXG4gICAgICAxODEsXG4gICAgICAxOTQsXG4gICAgICAyMDgsXG4gICAgICA0OCxcbiAgICAgIDE1LFxuICAgICAgMTY2LFxuICAgICAgMzksXG4gICAgICAxNTcsXG4gICAgICAxNCxcbiAgICAgIDIxNyxcbiAgICAgIDg2LFxuICAgICAgMTYzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSUxpcU5NQ0VNNlBvN29HR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJiTHRhTDVodUZzOHdFZlcwUXFybklieFJSK2pwVDFCZGtSUzZ2RmN1emp3PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImY1bjdaMXZmb095emRPblZSRENNajA3RUJFUTJ6VldCSmUxaFJDYlRSdXZ4MDhrRkt2NE4zZTlUbUN0anNOQ25IUzBNQkpiODVXZVQ2cGttdURQT0R3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjRBWjZTUzAwNWN6RU9oTXhFY1RIMitsa2M1c05FVXpBRnNDVXIvK3FuV1J6eEs5Z3lhMHBQdlVWYi9VKy9UMzZ5V0g1dE8vMG5PWkxzNk9EMkYvc0FBPT1cIlxuICB9LFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjI1MDcwNDAzNjAzMTo0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyNjU0ODA3NTM0MTAyNDU6NEBsaWRcIixcbiAgICBcIm5hbWVcIjogXCLgvLpDUk3gvLtcIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIyNTA3MDQwMzYwMzE6NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICA2MFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiaXBob25lXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzI4MjI5OTMsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFIY2ZcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUhjZi5qc29uIjogIntcImtleURhdGFcIjpcIlZwQkNJNUpKVjZ0KytiQlptd3B4RThLVUp0NXc2NEtES0ZBYzNUdG5ucWM9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NzExNjAyNDM0LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMSwwXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MzI4MjI5OTgxMjZcIn0iCn0="  // PUT your SESSION_ID 


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
