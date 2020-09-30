const env = require('env2')('.env')
const client = require('twilio')(process.env.SID, process.env.AUTH)
const whatsAppNumber = 'whatsapp:+447723432240'
const mediaUrl = 'https://chestnut-mink-1805.twil.io/assets/hype.mp4'

client.messages
  .list({
    to: whatsAppNumber,
    dateSent: new Date(Date.UTC(2020, 8, 30, 0, 0, 0))
  })
  .then(messages =>
    messages.forEach(message =>
      client.messages
        .create({
          mediaUrl,
          from: whatsAppNumber,
          body: '🥳',
          to: message.from
        })
        .then(message => console.log(message.sid))
    )
  )
