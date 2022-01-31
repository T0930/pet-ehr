const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Pet extends Model {
}

Pet.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    pet_name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    pet_type: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    gender: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    breed: {
      type: DataTypes.STRING,
      allowNull: true
    },
    age: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    vet_clinic: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    vet_name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    type: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    data: {
      type: DataTypes.BLOB("long"),
    },
    user_id:{
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
          model: 'user',
          key: 'id'
      }
  },

  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'pet',
  }
);

module.exports = Pet;
