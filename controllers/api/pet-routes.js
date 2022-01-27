const router = require('express').Router();
const { Pet } = require('../../models');
const withAuth = require('../../utils/auth');



router.post('/', withAuth, async (req, res) => {
    try {
      const newPet = await Pet.create({
          pet_name: req.body.pet_name,
          pet_type: req.body.pet_type,
          owner_id: req.body.owner_id, // REMOVE FROM CODE?
      });
      res.status(200).json(newPet);
    } catch (err) {
      res.status(400).json(err);
    }
  });

  //Update Pet by ID *** NOT WORKING AT THIS TIME ***
  router.put('/:id', withAuth, async (req, res) => {
    try {
      const petData = await Pet.update(
        {
          pet_name: req.body.pet_name,
          pet_type: req.body.pet_type,
        },
        {
        where: {
          id: req.params.id
        }
      });
      if (!petData) {
        res.status(404).json({message: 'No pet found with this ID'});
        return;
      }
      res.status(200).json(petData);
    } catch (err){
      res.status(500).json(err);
    }
  });

  router.delete('/:id', async (req, res) => {
    try {
      const petData = await Pet.destroy({
        where: {
          id: req.params.id,
          user_id: req.session.user_id,
        },
      });
  
      if (!petData) {
        res.status(404).json({ message: 'No pet found with this id!' });
        return;
      }
  
      res.status(200).json(petData);
    } catch (err) {
      res.status(500).json(err);
    }
  });


module.exports = router;