const env = require('env2')('.env')
const client = require('twilio')(process.env.SID, process.env.AUTH)
const whatsAppNumber = 'whatsapp:+447723432240'

client.messages
  .list({
    to: 'whatsapp:+447723432240',
    dateSent: new Date(Date.UTC(2020, 8, 25, 0, 0, 0))
  })
  .then(messages => {
    return messages.forEach(message =>
      client.messages
        .create({
            mediaUrl : ['http://bab1534242fe.ngrok.io/hype.mp4'],
            from: whatsAppNumber,
            body: 'Welcome 🥳',
          to: message.from
        })
        .then(message => console.log(message.sid))
    )
  })
