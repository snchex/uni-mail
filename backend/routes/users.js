/*const express = require('express');
const router = express.Router();
const passport = require('passport')
const pool = require('../database');
const {isLoggedIn, isNOTLoggedIn} = require('../lib/auth');


router.get('/users/signup', isLoggedIn, (req, res) => {
    res.render('users/signup');
});

router.post('/users/signup', passport.authenticate('local.signup', {
   successRedirect: '/users/signin', 
   failureRedirect: '/users/signup', 
   failureFlash: true
}));

router.get('/users/signin', isNOTLoggedIn, (req, res) => {
    res.render('users/signin');
});

////////////////////////////////////lista de Usuarios
router.get('/users/list',isLoggedIn, async (req, res) => {
    const usuarios = await pool.query('SELECT * FROM users');
    res.render('users/users',{users: usuarios});
});


router.get('/users/delete/:id', async (req, res) => {
    const  { id } = req.params;
    await pool.query('DELETE FROM users WHERE ID = ?', [id]);
    req.flash('success', 'Usuario Eliminado');
    res.redirect('/users/list');
});


router.get('/users/edit/:id', async (req, res) => {
    const { id } = req.params;
    const users =  await pool.query('SELECT * FROM users WHERE ID = ?', [id]);
 
    res.render('users/edit', {user: users[0]})
});

//update
router.post('/users/edit/:id', async (req, res) => {
    const { id } = req.params;
    const {username, fullname, email, superuser, password} = req.body;
    const newUser = {
        username,
        fullname,
        email,
        superuser,
        password
    };
   await pool.query('UPDATE users set ? WHERE ID = ?', [newUser, id])
   req.flash('success', 'Usuario Actualizado')
   res.redirect('/users/list');  
});
////////////////////////


router.post('/users/signin', (req, res, next) => {
    
    passport.authenticate('local.signin',{
    
        successRedirect: '/',
        failureRedirect: '/users/signin',
        failureFlash: true
    
    
    })(req, res, next);
});





router.get('/users/logout',isLoggedIn, function(req, res, next) {
    req.logout(function(err) {
      if (err) { return next(err); }
      res.redirect('/users/signin');
    });
});

//route for error page
router.get("/error", function(req, res, next) {
res.render("error", {
    error: req.flash("error"),
});
});


module.exports = router;
*/