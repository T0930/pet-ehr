const router = require('express').Router();
const withAuth = require('../utils/auth')


router.get('/', withAuth, async (req, res) => {
res.render('homepage', {
    loggedIn: req.session.loggedIn,
})
});

router.get('/login', (req, res) =>{
    if (req.session.loggedIn) {
        res.redirect('/')
       return;
    }
    res.render('loginhomepage')
})

router.get('/new', (req, res) =>{
    res.render('new-pet-form', {
        user_id: 1,
    })
})

module.exports = router; 