import express from 'express';
import { mostrar2, update} from '../services/crud.services.js';
export const userViewRouter = express.Router();



userViewRouter.use((req, res, next) => {
    if (req.isAuthenticated()) {
        next();
    } else {
        res.redirect("/auth/login");
    }
})



userViewRouter.get("/", async (req, res) => {
    const pqrs = await mostrar2();
    res.render('users', {
        pqrs,
        user: req.user
    });
})

userViewRouter.post("/", async (req, res) => {
    const { username, password } = req.body;
    await signup(username, password);
    res.redirect("/auth/login");
})


userViewRouter.post("/edit/:id", async (req, res) => {
    const {id} = req.params;
    let {usuario, contraseña} = req.body; 
    await update(id, {usuario, contraseña});
    res.redirect('/users');
});

tasksViewsRouter.post("/destroy/:id", async (req, res) => {
    const { id } = req.params;
    await destroy(id);
    res.redirect('/users');
});
