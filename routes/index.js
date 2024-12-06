import express from 'express';
import { pqrsViewsRouter } from './p.views.js';
import { authRouter } from './auth.router.js';
import { requestViewsRouter } from './request.js';
import { userViewRouter } from './users.router.js';


const router = express.Router();

export function routerPs(app){
   app.use("/pqr", pqrsViewsRouter);
   app.use("/auth", authRouter);
   app.use("/requests", requestViewsRouter);
   app.use("/users", userViewRouter);
}


