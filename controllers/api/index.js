const router = require('express').Router();
const userRoutes = require('./user-routes');
const petRoutes = require('./pet-routes');
const vaxRoutes = require('./vax-routes');

router.use('/user', userRoutes);
router.use('/pet', petRoutes);
router.use('/vax', vaxRoutes);


module.exports = router;