const sequelize = require('../config/connection');
const seedUsers = require('./userInfo');
const seedPets = require('./petInfo');



const seedDatabase = async () => {
  await sequelize.sync({ force: true });
await seedUsers();
await seedPets();

 

  process.exit(0);
};

seedDatabase();
