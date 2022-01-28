const sequelize = require('../config/connection');
const seedUsers = require('./userInfo');
const seedPets = require('./petInfo');
const seedDx = require('./dx');
const seedMeds = require('./meds')



const seedDatabase = async () => {
  await sequelize.sync({ force: true });
await seedUsers();
await seedPets();
await seedDx();
await seedMeds();

 

  process.exit(0);
};

seedDatabase();
