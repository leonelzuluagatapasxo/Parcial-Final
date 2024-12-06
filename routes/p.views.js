import express from 'express';
import { create} from '../services/crud.services.js';
export const pqrsViewsRouter = express.Router();
import { enviarCorreo } from '../services/correosDelDiablo.js';




pqrsViewsRouter.get('/', (req, res) => {
    res.render('index',{
    });

});


pqrsViewsRouter.post('/', async (req, res) => {
    let { nombrePersona, correo, telefono, solicitud, descripcion } = req.body;
    console.log(req.body); // Agrega esto para verificar los datos recibidos
    await create({ nombrePersona, correo, telefono, solicitud, descripcion });
    const mensajeCorreo = `
    <h1>Recepción de PQRS</h1>
    <p>Hola ${nombrePersona},</p>
    <p>Gracias por enviarnos tu solicitud de tipo <strong>${solicitud}</strong>. A continuación se detalla tu mensaje:</p>
    <blockquote>${descripcion}</blockquote>
    <p>Teléfono de contacto: ${telefono || 'No proporcionado'}</p>
    <p>Nos pondremos en contacto contigo pronto.</p>
`;

try {
    // Envía el correo
    await enviarCorreo(correo, 'Recepción de tu solicitud PQRS', mensajeCorreo);
} catch (error) {
    console.error('Error al enviar el correo:', error);
}
    res.redirect('/pqr');
});


