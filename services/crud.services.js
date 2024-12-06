import { sequelize } from "../libs/sequelize.js";
import { definePqr } from "../db/models/index.js";
import { pDefine } from "../db/models/p.models.js";



async function mostrar() {
    const pq = await sequelize.models.pqrs.findAll();
    return pq
}

async function mostrar2() {
    const lo = await sequelize.models.logins.findAll();
    return lo
}

async function create(pqrs) {
    const newPqr = await sequelize.models.pqrs.create({
        nombrePersona: pqrs.nombrePersona,
        correo: pqrs.correo,
        telefono: pqrs.telefono,
        solicitud: pqrs.solicitud,
        descripcion: pqrs.descripcion
    });
    return newPqr
}



async function signup(usuario, contraseña){
    const user = await sequelize.models.logins.create({
        usuario,
        contraseña
    })
    return user
}



async function update(id, usuario, contraseña) {
    const logs = await sequelize.models.logins.findByPk(id);
    if(!logs){
        return false
    }
    const [rowsAffected, [ulog]] = await sequelize.models.logins.update({
        usuario: usuario.usuario,
        contraseña: contraseña.contraseña
    },{
        where: {
            id
    },
    returning: true
    });
    return ulog;
}

async function destroy(id) {
    const log = await sequelize.models.logins.findByPk(id)
    console.log(log)
    if(!log){
        return false
    }
    await sequelize.models.logins.destroy(
        {
            where: {
                id
            }
        }
    )
    return log
}

export { mostrar, mostrar2, create,  update, destroy, signup };