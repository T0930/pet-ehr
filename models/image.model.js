const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Image extends Model {
}

Image.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
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
    pet_id :{
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: 'pet',
            key: 'id'
        }
    },

  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'image',
  }
);

module.exports = Image;