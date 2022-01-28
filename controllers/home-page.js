const router = require('express').Router();
const withAuth = require('../utils/auth')
const Pet = require('../models/Pet')

//commented out while doing chart routes (this is the one we want)
// router.get('/login', (req, res) =>{
//     if (req.session.loggedIn) {
//         res.redirect('/')
//        return;
//     }
//     res.render('loginhomepage')
// })

//delete after making chart routes!
router.get('/login', (req, res) =>{
    // if (req.session.loggedIn) {
    //     res.redirect('/')
    //    return;
    // }
    res.render('chart')
})

router.get('/new', (req, res) =>{
    res.render('new-pet-form', {
        user_id: 1,
    })
})

router.get('/', async (req, res) => {
    try {
      const viewAllPets = await Pet.findAll()
      //   where: {
      //     user_id: 1
      //   }
      // });
      const pets = viewAllPets.map((pet) => pet.get({ plain: true }));

      res.render('homepage', {
        pets,
        loggedIn: req.session.loggedIn,
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });
  

  

module.exports = router; 
