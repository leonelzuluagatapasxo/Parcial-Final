import { DataTypes } from 'sequelize';

export function pDefine(sequelize){
   sequelize.define('pqrs', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombrePersona: {
            type: DataTypes.STRING,
            allowNull: false
        },
        correo: {
            type: DataTypes.STRING,
            allowNull: false
        },
        telefono: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        solicitud: {
            type: DataTypes.STRING,
            allowNull: false
        },
        descripcion: {
            type: DataTypes.STRING,
            allowNull: false
        }
        });
}

export function loginDefine(sequelize){
    sequelize.define('login', {
         id: {
             type: DataTypes.INTEGER,
             primaryKey: true,
             autoIncrement: true
         },
         usuario: {
             type: DataTypes.STRING,
             allowNull: false
         },
         contraseña: {
             type: DataTypes.STRING,
             allowNull: false
         }
         });
 }