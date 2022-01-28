const { Vax } = require('../models');

const vaxData = [
    {
        vax_name = 'parvovirus'
    },
    {
        vax_name = 'rabies'
    },
    {
        vax_name = 'adenovirus'
    },
    {
        vax_name = 'hepatitis'
    }
];

const seedVaxs = () => Vax.bulkCreate(vaxData, {
    individualHooks: true,
    returning: true,
});

module.exports = seedVaxs