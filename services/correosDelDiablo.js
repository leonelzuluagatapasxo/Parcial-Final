import nodemailer from 'nodemailer';


const transporter = nodemailer.createTransport({
    host: 'sandbox.smtp.mailtrap.io',
    port: 2525,
    auth: {
        user: '176ab575242307', // Reemplaza con tu username de Mailtrap
        pass: '82fbc9b4fc2fb0'  // Reemplaza con tu password de Mailtrap
    }
});

 export const enviarCorreo = async (destinatario, asunto, mensaje) => {
    try {
        const info = await transporter.sendMail({
            from: '"Leonel Zuluaga Tapasco" <zuluagaleo727@gmail.com>', 
            to: destinatario, 
            subject: asunto, 
            html: mensaje 
        });

        console.log('Correo enviado:', info.messageId);
    } catch (error) {
        console.error('Error al enviar correo:', error);
    }
};


