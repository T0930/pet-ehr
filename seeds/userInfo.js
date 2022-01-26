const { User } = require('../models');

const userData = [
    {
        user_name: 'hedbear',
        email: "bear@yahoo.com",
        password: "12345678910"
    },
    {
        user_name: 'sgarter',
        email: "garter@yahoo.com",
        password: "password"
    },
    {
        user_name: 'lillypad',
        email: "lilly@yahoo.com",
        password: "ilikepopcorn"
    },
    {
        user_name: 'ljohnson',
        email: "ljohnson@yahoo.com",
        password: "tillyriggs"
    }
];

const seedUsers = () => User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
});
module.exports = seedUsers