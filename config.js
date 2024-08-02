const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "Lucifer";
global.website=process.env.GURL || "Lucifer" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "LUCIFER" 


global.devs = "923082990885" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923082990885";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
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

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_18_58_08_02_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgMSxcbiAgICAgICAgMjM1LFxuICAgICAgICAxNzUsXG4gICAgICAgIDk4LFxuICAgICAgICAxNDEsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjAyLFxuICAgICAgICAxODgsXG4gICAgICAgIDU4LFxuICAgICAgICAyNDgsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjMwLFxuICAgICAgICA5MixcbiAgICAgICAgMTI4LFxuICAgICAgICAxOTIsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMyxcbiAgICAgICAgMyxcbiAgICAgICAgNTIsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTgyLFxuICAgICAgICAzMSxcbiAgICAgICAgMjUzLFxuICAgICAgICAxNzIsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTI5LFxuICAgICAgICA3LFxuICAgICAgICA1MCxcbiAgICAgICAgMTUyLFxuICAgICAgICA5NCxcbiAgICAgICAgNzBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEsXG4gICAgICAgIDE3LFxuICAgICAgICAyMTMsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjE1LFxuICAgICAgICAxNzQsXG4gICAgICAgIDM0LFxuICAgICAgICAxOTcsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTYzLFxuICAgICAgICAyMCxcbiAgICAgICAgMTAsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTY3LFxuICAgICAgICA2NSxcbiAgICAgICAgMjA4LFxuICAgICAgICA0OSxcbiAgICAgICAgMTQxLFxuICAgICAgICA4MyxcbiAgICAgICAgMjEyLFxuICAgICAgICA4NCxcbiAgICAgICAgNTEsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjAxLFxuICAgICAgICAxOTUsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjM0LFxuICAgICAgICAyMzUsXG4gICAgICAgIDMwLFxuICAgICAgICAzLFxuICAgICAgICAxODgsXG4gICAgICAgIDc4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTYsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjIyLFxuICAgICAgICAxNTUsXG4gICAgICAgIDE0NyxcbiAgICAgICAgNjUsXG4gICAgICAgIDUyLFxuICAgICAgICA2NixcbiAgICAgICAgNzcsXG4gICAgICAgIDIzNixcbiAgICAgICAgMzgsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTY1LFxuICAgICAgICAxMjQsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNDUsXG4gICAgICAgIDY1LFxuICAgICAgICA5OSxcbiAgICAgICAgMTk4LFxuICAgICAgICA0OSxcbiAgICAgICAgMTM2LFxuICAgICAgICAxNzAsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTk5LFxuICAgICAgICA2MixcbiAgICAgICAgMjMyLFxuICAgICAgICAzOSxcbiAgICAgICAgMjAyLFxuICAgICAgICAxMzQsXG4gICAgICAgIDQyLFxuICAgICAgICAyMjYsXG4gICAgICAgIDEyMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzUsXG4gICAgICAgIDUyLFxuICAgICAgICA2MixcbiAgICAgICAgMjUyLFxuICAgICAgICAyNDAsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMDAsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjQxLFxuICAgICAgICAxMzEsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTYwLFxuICAgICAgICAzOSxcbiAgICAgICAgMjE1LFxuICAgICAgICAzNCxcbiAgICAgICAgNjgsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNTMsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTg2LFxuICAgICAgICAxNDgsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTQyLFxuICAgICAgICA4MCxcbiAgICAgICAgMTEyLFxuICAgICAgICAxNDcsXG4gICAgICAgIDM2LFxuICAgICAgICAxNDAsXG4gICAgICAgIDQ0LFxuICAgICAgICAxOTIsXG4gICAgICAgIDE1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjQsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjMzLFxuICAgICAgICAyMDMsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTMxLFxuICAgICAgICA4MyxcbiAgICAgICAgOTcsXG4gICAgICAgIDUxLFxuICAgICAgICAyNTIsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTEzLFxuICAgICAgICA1MCxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMjQsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMTEsXG4gICAgICAgIDE5LFxuICAgICAgICAxMjEsXG4gICAgICAgIDEwLFxuICAgICAgICA5NSxcbiAgICAgICAgNDksXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjUsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjQ4LFxuICAgICAgICA4MSxcbiAgICAgICAgMjA5LFxuICAgICAgICA1NCxcbiAgICAgICAgMTY0LFxuICAgICAgICAyMjYsXG4gICAgICAgIDEwMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzIsXG4gICAgICAgIDExLFxuICAgICAgICAxNjIsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjksXG4gICAgICAgIDIyNSxcbiAgICAgICAgNTcsXG4gICAgICAgIDEzLFxuICAgICAgICA2OCxcbiAgICAgICAgMjIzLFxuICAgICAgICAxMDEsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNDYsXG4gICAgICAgIDYsXG4gICAgICAgIDg3LFxuICAgICAgICAxMCxcbiAgICAgICAgOTMsXG4gICAgICAgIDY3LFxuICAgICAgICAyMDcsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE0LFxuICAgICAgICAyMDIsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNzEsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNTUsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjI0LFxuICAgICAgICAxNDgsXG4gICAgICAgIDYsXG4gICAgICAgIDkwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDcyLFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICA2MyxcbiAgICAgICAgICA5NixcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDc4XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEzMSxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDYsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTYwLFxuICAgICAgICAxNzEsXG4gICAgICAgIDE4NyxcbiAgICAgICAgODIsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyNTEsXG4gICAgICAgIDg3LFxuICAgICAgICAxMzksXG4gICAgICAgIDI1NSxcbiAgICAgICAgMzgsXG4gICAgICAgIDEyOSxcbiAgICAgICAgODQsXG4gICAgICAgIDE5OSxcbiAgICAgICAgOTIsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTkxLFxuICAgICAgICAyNDgsXG4gICAgICAgIDE5NSxcbiAgICAgICAgOTIsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjA2LFxuICAgICAgICAyLFxuICAgICAgICAyMzIsXG4gICAgICAgIDYxLFxuICAgICAgICAyMTgsXG4gICAgICAgIDE4LFxuICAgICAgICAxOTMsXG4gICAgICAgIDIyOCxcbiAgICAgICAgOTcsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMzcsXG4gICAgICAgIDE2MixcbiAgICAgICAgNDUsXG4gICAgICAgIDYwLFxuICAgICAgICAxNjksXG4gICAgICAgIDIwNSxcbiAgICAgICAgNyxcbiAgICAgICAgMTcwLFxuICAgICAgICAyMzcsXG4gICAgICAgIDkzLFxuICAgICAgICAyMDAsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTQsXG4gICAgICAgIDI5LFxuICAgICAgICAxMjIsXG4gICAgICAgIDI4LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTgyLFxuICAgICAgICAxMTksXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjMzLFxuICAgICAgICA4NyxcbiAgICAgICAgMTEsXG4gICAgICAgIDE3OSxcbiAgICAgICAgODAsXG4gICAgICAgIDUyLFxuICAgICAgICAyNDUsXG4gICAgICAgIDgwLFxuICAgICAgICAyMTMsXG4gICAgICAgIDJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIzNixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJPdGU2QWJ3Mkp5M1hhblowNTVUZndua1BRcjRRS3NyUVpIbGZSU0RscnpjPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkyMzA4Mjk5MDg4NUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiMThEMUQwRUYyMzBEQjlFNURGNzY0MTM0NjhCOTAwQkJcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIyNjI1MTAzXG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTIzMDgyOTkwODg1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJDODZGMjY4RTdDNzU0NTQ5NEE3RkU3RkQyRDQ3RTNCNFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjI2MjUxMDNcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiMldMWDlCN21Rcnk4T2hJcmZ3bzdrUVwiLFxuICBcInBob25lSWRcIjogXCJlMWE3NmMwNi1jOGUyLTQwY2UtOWY5Zi1lN2YwNzIwZjJjZTFcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTc3LFxuICAgICAgMjUyLFxuICAgICAgMTAxLFxuICAgICAgNTcsXG4gICAgICAyMTQsXG4gICAgICAxNjMsXG4gICAgICAyMzAsXG4gICAgICAyMjYsXG4gICAgICAyNCxcbiAgICAgIDc2LFxuICAgICAgMTkwLFxuICAgICAgMjQsXG4gICAgICAxMTUsXG4gICAgICAxMDgsXG4gICAgICAxOSxcbiAgICAgIDk2LFxuICAgICAgMTMyLFxuICAgICAgMTQ5LFxuICAgICAgMjI4LFxuICAgICAgMTg0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDMxLFxuICAgICAgODAsXG4gICAgICAxOTEsXG4gICAgICA1NSxcbiAgICAgIDE5NixcbiAgICAgIDcwLFxuICAgICAgNzgsXG4gICAgICA2MCxcbiAgICAgIDIzNCxcbiAgICAgIDU3LFxuICAgICAgMTQ1LFxuICAgICAgNzEsXG4gICAgICAxMTgsXG4gICAgICAyMDYsXG4gICAgICAxMDEsXG4gICAgICAxMTEsXG4gICAgICAxMzIsXG4gICAgICAxMTEsXG4gICAgICAyMzMsXG4gICAgICA5NVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJQQUhBOU42RFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzMDgyOTkwODg1OjYzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiTHVjaWZlclwiLFxuICAgIFwibGlkXCI6IFwiMTE5NTg1MTYwMzI3MjAyOjYzQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ042dnVPSUhFTVRZdExVR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiTFpNYXVVSTY0TUZzbDdTMU9QVldmZDh1bHZGVmFnQ28yd1I4K1hTNnNpMD1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJ3SHdmOVYybzYzZGU2TTk2V3hqR0d0NEk2UGg4Z2JKcjhhMExsdU5iTithNEI4bUJmczdYeHRHb3dpRU1xeFYvTE0vekhhdFcveEVPZmRGSHpjWU5EQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJSanJ3UFBzdlVPN01tUWFFb3paK2NsdWtiRjBVVW1vOGtoS2t5TEp0NWZ6ZndZalRPbnFqZXZYbHlyQnRvQml1TFV0clRJM1NxeVJ5ZFRJK0cxRVlEQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMwODI5OTA4ODU6NjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgNDVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMjYyNTA5NyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUN5VVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQ3lVLmpzb24iOiAie1wia2V5RGF0YVwiOlwiWUFucEJSdk9sc2VJSjdOTVJVcjJZcTdXSGtwOEdDVEszV3p2MUg5TXFiTT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoyMDg1NDkyNzAyLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjI2MjUxMDAzOTRcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 Lucifer ᴅ 』```", //*『lucifer • lucifer lice』*\n Lucifer"),
 
  author : process.env.PACK_AUTHER|| "Lucifer",
  packname: process.env.PACK_NAME || "+923082990885",
  botname : process.env.BOT_NAME  || "Lucifer",
  ownername:process.env.OWNER_NAME|| "Lucifwr",


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
