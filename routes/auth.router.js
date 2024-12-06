import express from 'express';
import passport from 'passport';
export const authRouter = express.Router();


authRouter.get("/login", async (req, res) => {
    res.render("auth/login");
});



authRouter.post("/login", passport.authenticate('local', {
    successRedirect : '/requests',
    failureRedirect : '/auth/login',
     
})
);


authRouter.get("/logout", (req, res) => {
    req.logout((err) => {
        if (err) {
            return next(err);
        }
        res.redirect("/auth/login");
    }
    );
});

