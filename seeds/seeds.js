const sequelize = require('../config/connection');
const seedUsers = require('./userInfo');
const seedPets = require('./petInfo');
const seedDx = require('./dx');
const seedMeds = require('./meds');
const seedVaxs = require('./vaxInfo');
// const seedImage = require('./image')



const seedDatabase = async () => {
  await sequelize.sync({ force: true });
await seedUsers();
await seedPets();
await seedDx();
await seedMeds();
await seedVaxs();
// await seedImage();

 

  process.exit(0);
};

seedDatabase();
