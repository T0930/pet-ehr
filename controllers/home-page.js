const router = require('express').Router();
const withAuth = require('../utils/auth');
const upload = require("../middleware/upload");
// const path = require("path");
const fs = require("fs");
const {Pet, Meds, Vax, Dx, Image } = require('../models')
// const multer = require('multer')
// const upload = multer({dest: 'resources/static/assets/uploads/'})


// commented out while doing chart routes (this is the one we want)
router.get('/', (req, res) =>{
    if (req.session.loggedIn) {
        res.redirect('/profile')
       return;
    }
    res.render('loginhomepage')
})

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
    include: [{model: Meds}, {model: Dx}, {model: Vax}, {model: Image }]});
    const pet = chartData.get({ plain: true });
    res.render('chart', {pet});
  } catch (err) {
    res.status(500).json(err);
  }
})

router.get('/new', (req, res) =>{
    res.render('new-pet-form', {
        user_id: req.session.user_id,
    })
})

router.get('/profile', withAuth, async (req, res) => {
    try {
      const viewAllPets = await Pet.findAll({
        include: [Image],
      where: {
          user_id: req.session.user_id,
        }
      })
      const pets = viewAllPets.map((pet) => pet.get({ plain: true }));
      res.render('homepage', {
        pets,
        loggedIn: req.session.loggedIn,
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });


  router.post('/profile', upload.single("file"), (req, res) => {
    try {
        console.log(req.file);
    
        if (req.file == undefined) {
          return res.send(`You must select a file.`);
        }
    

       const newPet = Pet.create({
          pet_name: req.body.name,
          pet_type: req.body.type,
          gender: req.body.gender,
          breed: req.body.breed,
          age: req.body.age,
          vet_clinic: req.body.clinic,
          vet_name: req.body.vet,
          user_id: req.body.user_id,
          type: req.file.mimetype,
          name: req.file.originalname,
          data: fs.readFileSync(
            __basedir + "/resources/static/assets/uploads/" + req.file.filename
          ),
        }).then((image) => {
          console.log(image)
          fs.writeFileSync(
            __basedir + "/public/images/" + image.name,
            image.data
          );
            return res.redirect('/profile')
        });
      
      
      } catch (err) {
        res.status(400).json(err);
      }
});



router.post('/imageupload', upload.single("file"), (req, res) => {
  try {
      console.log(req.file);
  
      if (req.file == undefined) {
        return res.send(`You must select a file.`);
      }
  
      const newImage = Image.create({
        type: req.file.mimetype,
        name: req.file.originalname,
        pet_id: req.body.pet_id,
        data: fs.readFileSync(
          __basedir + "/resources/static/assets/uploads/" + req.file.filename
        ),
      }).then((image) => {
        console.log(image)
        fs.writeFileSync(
          __basedir + "/public/images/" + image.name,
          image.data
        );
      });
  

      } catch (err) {
        res.status(400).json(err);
      }
});


  

module.exports = router; 
