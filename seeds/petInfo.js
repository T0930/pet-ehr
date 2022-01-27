const { Pet } = require('../models');

const petData = [
    {
        pet_name: 'Chance',
        pet_type: "Dog",
        user_id: 1
    },
    {
        pet_name: 'Sassy',
        pet_type: "Cat",
        user_id: 1
    },
    {
        pet_name: 'Shadow',
        pet_type: "Dog",
        user_id: "1"
    },
    {
        pet_name: 'Bullseye',
        pet_type: "Horse",
        user_id: 1
    }
];

const seedPets = () => Pet.bulkCreate(petData, {
    individualHooks: true,
    returning: true,
});
module.exports = seedPets