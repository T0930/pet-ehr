const router = require('express').Router();
const withAuth = require('../utils/auth')
const Pet = require('../models/Pet')


// router.get('/', withAuth, async (req, res) => {
// res.render('homepage', {
//     loggedIn: req.session.loggedIn,
// })
// });

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


router.get('/', async (req, res) => {
    try {
      // Get all pets
      const viewAllPets = await Pet.findAll()
      //   where: {
      //     user_id: 1
      //   }
      // });
      // Serialize data so the template can read it
      const pets = viewAllPets.map((pet) => pet.get({ plain: true }));
      // res.json(pets)
  
      // Pass serialized data and session flag into template
      res.render('homepage', {
        pets,
        // loggedIn: req.session.loggedIn,
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });
  

  

module.exports = router; 