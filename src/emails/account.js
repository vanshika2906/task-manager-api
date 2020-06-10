const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email,name)=>  {
      sgMail.send({
          to:email,
          from:'vanshikayadavby@gmail.com',
          subject:'Thanks for joining in!',
          text:`Welcome to the app, ${name}.Let me know how you get along with the app.`
      })
}

const sendCancelEmail = (email,name) => {
    sgMail.send({
         to:email,
         from:'vanshikayadavby@gmail.com',
         subject:'Cancellation email!',
         text:`Anthing we can u do to continue our services.${name}`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelEmail
}