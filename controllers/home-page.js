const router = require('express').Router();



router.get('/', async (req, res) => {
res.render('loginhomepage')
});


module.exports = router; 