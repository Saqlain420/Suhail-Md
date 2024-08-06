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
global.caption = process.env.CAPTION || global.caption || "KILLER" 


global.devs = "923091436987" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923091436987";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_02_58_08_06_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICAxODMsXG4gICAgICAgIDY0LFxuICAgICAgICAyMjQsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTU2LFxuICAgICAgICAxMTAsXG4gICAgICAgIDE1NyxcbiAgICAgICAgNyxcbiAgICAgICAgMTgwLFxuICAgICAgICAxNDgsXG4gICAgICAgIDI4LFxuICAgICAgICAxOCxcbiAgICAgICAgMjUsXG4gICAgICAgIDkwLFxuICAgICAgICAxNzgsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTIsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjgsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTg2LFxuICAgICAgICAxNDksXG4gICAgICAgIDU2LFxuICAgICAgICAxMzEsXG4gICAgICAgIDYxLFxuICAgICAgICAxNzYsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjksXG4gICAgICAgIDIzNixcbiAgICAgICAgMTMsXG4gICAgICAgIDc0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjU1LFxuICAgICAgICAxNDEsXG4gICAgICAgIDg4LFxuICAgICAgICAzNCxcbiAgICAgICAgMTIzLFxuICAgICAgICAxNzksXG4gICAgICAgIDg3LFxuICAgICAgICAxNDQsXG4gICAgICAgIDExNCxcbiAgICAgICAgODIsXG4gICAgICAgIDEyMCxcbiAgICAgICAgNTUsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNzMsXG4gICAgICAgIDc2LFxuICAgICAgICAxODMsXG4gICAgICAgIDIsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTkwLFxuICAgICAgICAxNzksXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjIsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTYwLFxuICAgICAgICA3NSxcbiAgICAgICAgOTMsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTkyLFxuICAgICAgICAxMzgsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNjdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5MixcbiAgICAgICAgMTc0LFxuICAgICAgICA1NSxcbiAgICAgICAgMTgsXG4gICAgICAgIDI5LFxuICAgICAgICAxMzAsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjQzLFxuICAgICAgICA5OCxcbiAgICAgICAgNTksXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNzQsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjEsXG4gICAgICAgIDEwMCxcbiAgICAgICAgODEsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjE4LFxuICAgICAgICAyMjEsXG4gICAgICAgIDc2LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTkxLFxuICAgICAgICAxNzMsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjE3LFxuICAgICAgICAyMjAsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTg5LFxuICAgICAgICAxNTksXG4gICAgICAgIDk0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExMixcbiAgICAgICAgOTQsXG4gICAgICAgIDc3LFxuICAgICAgICA2MSxcbiAgICAgICAgMTIyLFxuICAgICAgICAxMzcsXG4gICAgICAgIDYzLFxuICAgICAgICAxOTAsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTEyLFxuICAgICAgICAyMjcsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTE4LFxuICAgICAgICA5NSxcbiAgICAgICAgMTM5LFxuICAgICAgICA5NyxcbiAgICAgICAgMjYsXG4gICAgICAgIDYyLFxuICAgICAgICAxMDYsXG4gICAgICAgIDUzLFxuICAgICAgICAyMDAsXG4gICAgICAgIDU4LFxuICAgICAgICAyNDMsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMSxcbiAgICAgICAgMjEwLFxuICAgICAgICAyNDgsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTM3LFxuICAgICAgICA5MyxcbiAgICAgICAgMTE2LFxuICAgICAgICAxMTNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgwLFxuICAgICAgICA5NCxcbiAgICAgICAgMjExLFxuICAgICAgICA2MixcbiAgICAgICAgMzUsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTEyLFxuICAgICAgICA5MSxcbiAgICAgICAgMjAyLFxuICAgICAgICA0MCxcbiAgICAgICAgMTUsXG4gICAgICAgIDYyLFxuICAgICAgICAyMjgsXG4gICAgICAgIDYsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTc1LFxuICAgICAgICA4OSxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNTksXG4gICAgICAgIDU4LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTk0LFxuICAgICAgICA0NCxcbiAgICAgICAgODcsXG4gICAgICAgIDc0LFxuICAgICAgICA2LFxuICAgICAgICAyMzYsXG4gICAgICAgIDE2MyxcbiAgICAgICAgOTdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNDAsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTM3LFxuICAgICAgICAyMjEsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjMxLFxuICAgICAgICA1MCxcbiAgICAgICAgMTUsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTA1LFxuICAgICAgICAyMDQsXG4gICAgICAgIDkwLFxuICAgICAgICAxMDQsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTI5LFxuICAgICAgICAxMDksXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTI2LFxuICAgICAgICAzMixcbiAgICAgICAgMjYsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTA5LFxuICAgICAgICA1MCxcbiAgICAgICAgMTM0LFxuICAgICAgICA2NCxcbiAgICAgICAgMjU0LFxuICAgICAgICAxMjUsXG4gICAgICAgIDk5LFxuICAgICAgICAxOTgsXG4gICAgICAgIDEzLFxuICAgICAgICA4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMCxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICA4MlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAzMlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5MSxcbiAgICAgICAgNDIsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTgzLFxuICAgICAgICA2MSxcbiAgICAgICAgMjIsXG4gICAgICAgIDcsXG4gICAgICAgIDkzLFxuICAgICAgICAyMjAsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTkxLFxuICAgICAgICAyMTEsXG4gICAgICAgIDkyLFxuICAgICAgICAyNTUsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNixcbiAgICAgICAgOSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMDAsXG4gICAgICAgIDk3LFxuICAgICAgICAxODEsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNyxcbiAgICAgICAgMjEzLFxuICAgICAgICAxMzQsXG4gICAgICAgIDY3LFxuICAgICAgICAxNzQsXG4gICAgICAgIDU4LFxuICAgICAgICAxNTcsXG4gICAgICAgIDg4LFxuICAgICAgICAyMyxcbiAgICAgICAgMTg3LFxuICAgICAgICAxNTIsXG4gICAgICAgIDY1LFxuICAgICAgICA0LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTMsXG4gICAgICAgIDM1LFxuICAgICAgICAyMTMsXG4gICAgICAgIDQ5LFxuICAgICAgICA4NyxcbiAgICAgICAgMTYzLFxuICAgICAgICAxMDYsXG4gICAgICAgIDQ0LFxuICAgICAgICAxNjksXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTI5LFxuICAgICAgICA5NCxcbiAgICAgICAgNTcsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjI0LFxuICAgICAgICA5MixcbiAgICAgICAgMjMsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjQzLFxuICAgICAgICA5NSxcbiAgICAgICAgMjU0LFxuICAgICAgICAyNTUsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMjQsXG4gICAgICAgIDU1LFxuICAgICAgICAxMzJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE4MixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJBMzQ2eFRtT2loRUxWbWV6c2lUZEcrNHNCZnpMTmZSbXZBTG5JaUZlWkNVPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkyMzA5MTQzNjk4N0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiREY4RjZBMDhCRDI5Q0UyNjU5NUQ5NUM3QThDNkU2QTNcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIyOTEzMTM0XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTIzMDkxNDM2OTg3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJDMzYwRTZEMkVERERBOUUyQ0JGMjFGQ0YyNkVDOENDMVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjI5MTMxMzRcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiQk1MOWV4LXVTOU9fa1B2cE4wMlpxQVwiLFxuICBcInBob25lSWRcIjogXCI2ZDFkY2U5ZS00NTU4LTQ0YTItOTUxYS04N2QxZjZiNmQxZmNcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgODgsXG4gICAgICA2MyxcbiAgICAgIDYzLFxuICAgICAgNSxcbiAgICAgIDU0LFxuICAgICAgMTMyLFxuICAgICAgOTIsXG4gICAgICA4OSxcbiAgICAgIDcyLFxuICAgICAgMTU1LFxuICAgICAgMjM3LFxuICAgICAgMTU3LFxuICAgICAgMTE1LFxuICAgICAgMTYsXG4gICAgICAxMDQsXG4gICAgICA5MSxcbiAgICAgIDIxNyxcbiAgICAgIDIwNSxcbiAgICAgIDE4NixcbiAgICAgIDg5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDQsXG4gICAgICAxMjQsXG4gICAgICA0OSxcbiAgICAgIDEwMSxcbiAgICAgIDE3OSxcbiAgICAgIDE5MixcbiAgICAgIDM1LFxuICAgICAgMTYzLFxuICAgICAgNTksXG4gICAgICA4MyxcbiAgICAgIDg0LFxuICAgICAgMjUzLFxuICAgICAgMTg2LFxuICAgICAgNzcsXG4gICAgICAxMTIsXG4gICAgICA1NSxcbiAgICAgIDI2LFxuICAgICAgOSxcbiAgICAgIDIzOSxcbiAgICAgIDEyMlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJIOVlDQ0tOS1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzMDkxNDM2OTg3OjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjExMTU4Mzc1MzcwMzU2NDoxQGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIkFzaWYganV0dPCfmIlcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNQL08zdzhRNXFMR3RRWVlBU0FBS0FBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIklBeDk4ck9SWEs4T3djSS9Vbi9TanYwcWV4UElkRy9uT0ttejZ3MlVEMDg9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwicVJjWXUxNnJxZmNseU9ZWGdzY2ZPSzVCV1Bqanord1N1clVpd3JjZjRwVENiOE50Y09lcjlMNHVULzRhVkFrYjA5MXNvTnRrL0xKNTVmRHg3SFRuRHc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwieG5QbVMyQWNzQ29NN3o1Y1htM3dmb3ppRVpZOHhGaVBpNkUvNjl3MmREWE1uTklXa1hobjhObTY2N25zWDZGTHFRL1Q4VytNdUNNZWRkUVdIY2c5Z1E9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMDkxNDM2OTg3OjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDc5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjI5MTMxMjgsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFQaldcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQVBqVy5qc29uIjogIntcImtleURhdGFcIjpcInB2dnluTnAzQ3ZvbzVQeUFIRjhDWFNRSzg2UGVDQkdqekNtOHpIZ0xxS1U9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MzMwMjM4NzEsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyMjkxMzEzMTg4MlwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 PALESTINE ᴅ 』```", //*『FREE • WINNER lice』*\n DINNER),
 
  author : process.env.PACK_AUTHER|| "Lucifer",
  packname: process.env.PACK_NAME || "+923082990885",
  botname : process.env.BOT_NAME  || "KILLER",
  ownername:process.env.OWNER_NAME|| "Asif Jutt",


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
