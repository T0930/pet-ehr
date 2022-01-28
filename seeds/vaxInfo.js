const { Vax } = require('../models');

const vaxData = [
    {
        vax_name = 'parvovirus',
        administered_date = 'at 6 weeks',
        next_due = 'at 3 months',
        pet_id = 1
    },
    {
        vax_name = 'rabies',
        administered_date = 'at 8 weeks',
        next_due = 'at 6 months',
        pet_id = 1
    },
    {
        vax_name = 'adenovirus',
        administered_date = 'at 12 weeks',
        next_due = 'at 10 months',
        pet_id = 1
    },
    {
        vax_name = 'hepatitis',
        administered_date = 'at 6 weeks',
        next_due = 'at 3 months',
        pet_id = 1
    }
];

const seedVaxs = () => Vax.bulkCreate(vaxData, {
    individualHooks: true,
    returning: true,
});

module.exports = seedVaxs