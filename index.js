const env = require('env2')('.env')
const client = require('twilio')(process.env.SID, process.env.AUTH)
const whatsAppNumber = 'whatsapp:+447723432240'
const mediaUrl = 'https://chestnut-mink-1805.twil.io/assets/hype.mp4'
