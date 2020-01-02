const sgMail = require('@sendgrid/mail')

exports.handler =  async (event, context, callback) => {

    const payload = JSON.parse(event.body)
    const { body } = payload

    sgMail.setApiKey(process.env.SENDGRID_API_KEY)

    const msg = {
        to: 'info@avvent.io',
        from: 'info@avvent.io',
        subject: 'Contact Form Submission',
        html: body,
    };

    try{
        await sgMail.send(msg)
        
        return {
            statusCode: 200,
            body: "Message sent"
        }
    } catch(e){
        return {
            statusCode: e.code,
            body: e.message
        }
    }
};