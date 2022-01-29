const router = require('express').Router();
const withAuth = require('../utils/auth')
const {Pet, Meds, Vax, Dx} = require('../models')

// commented out while doing chart routes (this is the one we want)
// router.get('/', (req, res) =>{
//     // if (req.session.loggedIn) {
//     //     res.redirect('/')
//     //    return;
//     // }
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

router.get('/chart/:id', async (req, res) => {
 try {
  const chartData = await Pet.findOne({
    where: {
      id: req.params.id,
    },
    include: [{model: Meds}, {model: Dx}, {model: Vax}]});
    const pet = chartData.get({ plain: true });
    res.render('chart', {pet});
  } catch (err) {
    res.status(500).json(err);
  }
})

router.get('/new', (req, res) =>{
    res.render('new-pet-form', {
        user_id: 1,
    })
})

router.get('/profile', async (req, res) => {
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
