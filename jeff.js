const env = require('env2')('.env')
const client = require('twilio')(process.env.SID, process.env.AUTH)
const whatsAppNumber = 'whatsapp:+447723432240'

client.messages
  .create({
    mediaUrl : ['http://bab1534242fe.ngrok.io/hype.mp4'],
    from: whatsAppNumber,
    body: 'Welcome 🥳',
    to: 'whatsapp:+447984020072'
  })
  .then(message => console.log(message))

