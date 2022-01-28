const { Pet } = require('../models');

const petData = [
    {
        pet_name: 'Chance',
        pet_type: "Dog",
        gender: 'Male',
        breed: 'Yellow Lab',
        age: 4,
        user_id: 1
    },
    {
        pet_name: 'Sassy',
        pet_type: "Cat",
        gender: 'Female',
        breed: 'Domestic Short Hair',
        age: 8,
        user_id: 1
    },
    {
        pet_name: 'Shadow',
        pet_type: "Dog",
        gender: 'Male',
        breed: 'Doberman',
        age: 1,
        user_id: "1"
    },
    {
        pet_name: 'Bullseye',
        pet_type: "Horse",
        gender: 'Male',
        breed: 'Clydesdale',
        age: 10,
        user_id: 1
    }
];

const seedPets = () => Pet.bulkCreate(petData, {
    individualHooks: true,
    returning: true,
});
module.exports = seedPets