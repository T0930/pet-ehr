const router = require('express').Router();
const { Vax, Pet } = require('../../models');
const withAuth = require('../../utils/auth');

// *** /api/vax *** - endpoint

router.get('/', async (req, res) => {
  try {
    const vaxDb = await Vax.findAll({include: [{model: Pet}]});
    res.status(200)
  } catch (err) {
      res.status(500).json;
  }
})

router.post('/', async (req, res) => {
    try {
      const newVax = await Vax.create({
          vax_name: req.body.pet_name,
          vax_type: req.body.pet_type,
      });
      res.status(200).json(newVaX);
    } catch (err) {
      res.status(400).json(err);
    }
  });

  router.delete('/:id', async (req, res) => {
    try {
      const vaxData = await Vax.destroy({
        where: {
          id: req.params.id,
        },
      });
  
      if (!vaxData) {
        res.status(404).json({ message: 'No vaccine found with this id!' });
        return;
      }
  
      res.status(200).json(vaxData);
    } catch (err) {
      res.status(500).json(err);
    }
  });