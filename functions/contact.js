const sgMail = require('@sendgrid/mail')

exports.handler =  async (event, context, callback) => {

    const payload = JSON.parse(event.body)
    const { customData } = payload

    sgMail.setApiKey(process.env.SENDGRID_API_KEY)

    const msg = {
        to: 'info@avvent.io',
        from: 'info@avvent.io',
        subject: 'Contact Form Submission',
        html: `
            <h1> ${customData.name} </h1>
            <h2> ${customData.email} </h2>
            <hr />
            <p> ${customData.projectDesc} </p>
        `,
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