import {loginDefine, pDefine } from './p.models.js'

export function definePqr(sequelize){
    pDefine(sequelize);
}

export function defineLogin(sequelize){
    loginDefine(sequelize);
}