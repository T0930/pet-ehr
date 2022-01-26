const router = require('express').Router();
const withAuth = require('../utils/auth')


router.get('/', withAuth, async (req, res) => {
res.render('homepage')
});

router.get('/login', (req, res) =>{
    if (req.session.loggedIn) {
        res.redirect('/')
       return;
    }
    res.render('loginhomepage')
})

module.exports = router; 