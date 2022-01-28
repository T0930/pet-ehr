const { Vax } = require('../models');

const vaxData = [
    {
        vax_name: 'parvovirus',
        administered_date: '01/28/2022',
        next_due: '01/28/2023',
        pet_id: 1
    },
    {
        vax_name: 'rabies',
        administered_date: '12/12/21',
        next_due: '05/12/21',
        pet_id: 1
    },
    {
        vax_name: 'adenovirus',
        administered_date: '10/27/21',
        next_due: '10/27/25',
        pet_id: 1
    },
    {
        vax_name: 'hepatitis',
        administered_date: '09/15/21',
        next_due: '03/21/22',
        pet_id: 1
    }
];

const seedVaxs = () => Vax.bulkCreate(vaxData, {
    individualHooks: true,
    returning: true,
});

module.exports = seedVaxs