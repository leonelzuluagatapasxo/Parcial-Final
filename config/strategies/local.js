import passport from "passport";
import LocalStrategy  from "passport-local";
import { sequelize } from "../../libs/sequelize.js";

passport.use(new LocalStrategy(
    async function(usuario, contraseña, done){
        try {
            const user = await sequelize.models.login.findOne(
                {   where: {
                        usuario: usuario,
                        contraseña: contraseña
                    }
                }
            )
            if(!user){
                return done(null, false, {message: 'Usuario no encontrado'})
            }
            return done(null, user)
        } catch (error) {
           return done(error);
        } 
    })
);