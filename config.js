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


global.devs = "971547359354" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "971547359354";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_04_46_08_03_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTc0LFxuICAgICAgICAxMDAsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTU4LFxuICAgICAgICA2MyxcbiAgICAgICAgMTg4LFxuICAgICAgICAxODgsXG4gICAgICAgIDQxLFxuICAgICAgICAyMDcsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTUsXG4gICAgICAgIDg1LFxuICAgICAgICAyMTYsXG4gICAgICAgIDUxLFxuICAgICAgICAzOCxcbiAgICAgICAgMjA0LFxuICAgICAgICAyMjksXG4gICAgICAgIDgzLFxuICAgICAgICAyMDIsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMzMsXG4gICAgICAgIDEyLFxuICAgICAgICAxMzcsXG4gICAgICAgIDM2LFxuICAgICAgICA2MyxcbiAgICAgICAgMTYyLFxuICAgICAgICA1LFxuICAgICAgICAxNDQsXG4gICAgICAgIDIwOCxcbiAgICAgICAgODVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTgxLFxuICAgICAgICA4NixcbiAgICAgICAgNDcsXG4gICAgICAgIDgxLFxuICAgICAgICAyMzUsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTc1LFxuICAgICAgICAxMDIsXG4gICAgICAgIDQ1LFxuICAgICAgICAxNDEsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjIsXG4gICAgICAgIDgwLFxuICAgICAgICAxNTQsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjAyLFxuICAgICAgICAyMDcsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjAxLFxuICAgICAgICAxNixcbiAgICAgICAgMCxcbiAgICAgICAgMzgsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTY0LFxuICAgICAgICAxOCxcbiAgICAgICAgNzksXG4gICAgICAgIDI1LFxuICAgICAgICA3NyxcbiAgICAgICAgMjAzLFxuICAgICAgICAxMzAsXG4gICAgICAgIDE1MSxcbiAgICAgICAgNjNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY0LFxuICAgICAgICAxMzMsXG4gICAgICAgIDExMSxcbiAgICAgICAgNjIsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjE1LFxuICAgICAgICA1LFxuICAgICAgICA4MixcbiAgICAgICAgMTkxLFxuICAgICAgICAxMjMsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjAwLFxuICAgICAgICAyMjksXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjMyLFxuICAgICAgICA4LFxuICAgICAgICAzLFxuICAgICAgICA4OCxcbiAgICAgICAgMzIsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNDcsXG4gICAgICAgIDksXG4gICAgICAgIDQ1LFxuICAgICAgICA0LFxuICAgICAgICAxMTIsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTI2LFxuICAgICAgICAxMyxcbiAgICAgICAgNjhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEzLFxuICAgICAgICA1NixcbiAgICAgICAgNDcsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjEyLFxuICAgICAgICAyMjIsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTg0LFxuICAgICAgICA4NSxcbiAgICAgICAgMTU3LFxuICAgICAgICAyMCxcbiAgICAgICAgOTIsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTIsXG4gICAgICAgIDY3LFxuICAgICAgICAzNyxcbiAgICAgICAgNDAsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTQ4LFxuICAgICAgICAxODMsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTQzLFxuICAgICAgICAxNTgsXG4gICAgICAgIDk2LFxuICAgICAgICAxNjQsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTU2LFxuICAgICAgICA2NSxcbiAgICAgICAgMjUzLFxuICAgICAgICAxMDEsXG4gICAgICAgIDU4LFxuICAgICAgICA1OVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICAxMjAsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTQzLFxuICAgICAgICAxNTQsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjcsXG4gICAgICAgIDgsXG4gICAgICAgIDExLFxuICAgICAgICAyMzMsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjMzLFxuICAgICAgICA0NixcbiAgICAgICAgMTg3LFxuICAgICAgICAyMixcbiAgICAgICAgNSxcbiAgICAgICAgOCxcbiAgICAgICAgMTYyLFxuICAgICAgICAyMDEsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjEwLFxuICAgICAgICAxNzYsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjQ4LFxuICAgICAgICA3OSxcbiAgICAgICAgNzksXG4gICAgICAgIDEwLFxuICAgICAgICA3MCxcbiAgICAgICAgMTcsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTEsXG4gICAgICAgIDgzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDM1LFxuICAgICAgICAyNDYsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNTAsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNDUsXG4gICAgICAgIDY0LFxuICAgICAgICAxNDAsXG4gICAgICAgIDEyLFxuICAgICAgICAyMjAsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTI0LFxuICAgICAgICAzLFxuICAgICAgICAxNDQsXG4gICAgICAgIDI1LFxuICAgICAgICAxNjUsXG4gICAgICAgIDI1LFxuICAgICAgICAxNTMsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTk0LFxuICAgICAgICAxNTYsXG4gICAgICAgIDYzLFxuICAgICAgICAzMCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxOTAsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTQ5LFxuICAgICAgICA5MixcbiAgICAgICAgNjQsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTE0LFxuICAgICAgICAxNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDY1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgODEsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTE0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTk4LFxuICAgICAgICA3MCxcbiAgICAgICAgMjM2LFxuICAgICAgICAyLFxuICAgICAgICAyMjAsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNzcsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTI1LFxuICAgICAgICAxNjUsXG4gICAgICAgIDc5LFxuICAgICAgICAyLFxuICAgICAgICAxNzQsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjI5LFxuICAgICAgICA5LFxuICAgICAgICAzMCxcbiAgICAgICAgNjMsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTE0LFxuICAgICAgICA5MixcbiAgICAgICAgMjA3LFxuICAgICAgICAxMzEsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTU3LFxuICAgICAgICA0MixcbiAgICAgICAgMTAzLFxuICAgICAgICAxNzgsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTkzLFxuICAgICAgICAyLFxuICAgICAgICA5LFxuICAgICAgICA0OSxcbiAgICAgICAgMTg1LFxuICAgICAgICA0NCxcbiAgICAgICAgNzcsXG4gICAgICAgIDUyLFxuICAgICAgICA5NSxcbiAgICAgICAgNjMsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjIzLFxuICAgICAgICAxMjQsXG4gICAgICAgIDUzLFxuICAgICAgICAxNSxcbiAgICAgICAgNTMsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyNSxcbiAgICAgICAgODYsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTQxLFxuICAgICAgICAxNTcsXG4gICAgICAgIDIsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjEwLFxuICAgICAgICAyNDksXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjE5LFxuICAgICAgICA2NSxcbiAgICAgICAgMjQxLFxuICAgICAgICAyMzcsXG4gICAgICAgIDY5LFxuICAgICAgICA1NixcbiAgICAgICAgMTI5XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNzYsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiS21QTHMyc2tFdzkwTUlCa1ZiOEpVTXMrbkUyYmVZUEwvNDBjdWNpZytqZz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5NzE1NDczNTkzNTRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjA5MkUyM0I1OUY0RDQ0RjkwNkE0RThCRTM4OUExMDEyXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMjY2MDQxMlxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJlQ2MtVE9nTFRXMmRPSFhvR2YyWkpBXCIsXG4gIFwicGhvbmVJZFwiOiBcIjVlMGY3NzkyLWY4YzUtNGI3Yy05MTE0LTg2NWM2ZmRhOTAzMlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNTEsXG4gICAgICAxMjksXG4gICAgICAyNDIsXG4gICAgICAxNzUsXG4gICAgICA3NSxcbiAgICAgIDM5LFxuICAgICAgODgsXG4gICAgICA3LFxuICAgICAgMjMyLFxuICAgICAgMjcsXG4gICAgICAxMjMsXG4gICAgICAxMSxcbiAgICAgIDE5LFxuICAgICAgMjMsXG4gICAgICAxNTcsXG4gICAgICAxNSxcbiAgICAgIDIwOCxcbiAgICAgIDEyLFxuICAgICAgOCxcbiAgICAgIDExOFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMDksXG4gICAgICAyNDAsXG4gICAgICAzMyxcbiAgICAgIDY4LFxuICAgICAgMjM4LFxuICAgICAgODYsXG4gICAgICAzMSxcbiAgICAgIDIzMixcbiAgICAgIDIsXG4gICAgICAxNDUsXG4gICAgICAyMSxcbiAgICAgIDMyLFxuICAgICAgMTk1LFxuICAgICAgMTEsXG4gICAgICAxODUsXG4gICAgICAzLFxuICAgICAgMTkxLFxuICAgICAgNjUsXG4gICAgICAxMzYsXG4gICAgICAxODhcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiWTlZUjZYWFhcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjk3MTU0NzM1OTM1NDo3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwi8J2ZjfCdmYrwnZmI8J2ZgPCdmYpcIixcbiAgICBcImxpZFwiOiBcIjE3OTc3OTI0NDQwMDgwNjo3QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0lYUTZMY0NFTEhzdHJVR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiWXBzMlBvSW9RTnpubG5XeEVEdEhDdkFza2JwRTR2YjhDaFN3cFByLzdHdz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJNOTFzNDdHRktoZVNBVTJXQ09PcXd1MzJMVFZpVWtocHlBUjJxZXpKc2s3RVhsVmtkY3RxZXQ4b2JKNUdSNmNuS3E4WmlyaHh1Q0xKRUZWVk1xeHVDUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJJbk9acHhpWllwSGpRQVR2UkNxMjVxTWxKeThSTWg0Ym9JRlJ0YkVlWDNZZ256TmxuMy85c0dUV1ZLZDBMRldpMkpHT29WdkZxSnNlbXdUZk84KzNodz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5NzE1NDczNTkzNTQ6N0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAxNixcbiAgICAgICAgICA1OSxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDEwOFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIyNjYwNDA0LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSUhUXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFJSFQuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJwWVUwdG1BaG5DdTdEdTdKeXhKTVFzVExZUVIrVFBjaHRWSzBQcENsS2I4PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjY1MzkyODQ1MyxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzIyNjYwNDA3OTAxXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 PALESTINE ᴅ 』```", //*『FREE • WINNER lice』*\n DINNER),
 
  author : process.env.PACK_AUTHER|| "Lucifer",
  packname: process.env.PACK_NAME || "+923082990885",
  botname : process.env.BOT_NAME  || "Romeo",
  ownername:process.env.OWNER_NAME|| "ROMEO",


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
