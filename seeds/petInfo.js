const { Pet } = require('../models');

const petData = [
    {
        pet_name: 'Chance',
        pet_type: "Dog",
        owner_id: 1
    },
    {
        pet_name: 'Sassy',
        pet_type: "Cat",
        owner_id: 1
    },
    {
        pet_name: 'Shadow',
        pet_type: "Dog",
        owner_id: "1"
    },
    {
        pet_name: 'Bullseye',
        pet_type: "Horse",
        owner_id: 1
    }
];

const seedPets = () => Pet.bulkCreate(petData, {
    individualHooks: true,
    returning: true,
});
module.exports = seedPets