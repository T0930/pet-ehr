const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Vaccine extends Model {
}

Vaccine.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    vaccine_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    vaccine_type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    pet_id :{
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'pet',
            key: 'id'
        }
    }

  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'vaccine',
  }
);

module.exports = Pet;