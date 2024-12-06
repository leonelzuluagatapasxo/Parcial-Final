import express from 'express';
import { mostrar } from '../services/crud.services.js';
export const requestViewsRouter = express.Router();



requestViewsRouter.use((req, res, next) => {
    if (req.isAuthenticated()) {
        next();
    } else {
        res.redirect("/auth/login");
    }
})



requestViewsRouter.get("/", async (req, res) => {
    const pqrs = await mostrar();
    res.render('request', {
        pqrs,
        user: req.user
    });
})