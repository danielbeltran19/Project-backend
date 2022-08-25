'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Beneficiary extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Beneficiary.belongsTo(models.Incumbent,{
        foreignKey: 'id',
        target_Key: 'idIncumbent'
      })
    }
  }
  Beneficiary.init({
    identification: DataTypes.STRING,
    name: DataTypes.STRING,
    lastname: DataTypes.STRING,
    birth_date: DataTypes.DATE,
    affiliation: DataTypes.DATE,
    relationship: DataTypes.STRING,
    observations: DataTypes.STRING,
    idIncumbent: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Beneficiary',
  });
  return Beneficiary;
};