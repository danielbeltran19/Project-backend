'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Incumbent extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Incumbent.hasMany(models.Beneficiary,{
        foreignKey: 'idIncumbent'
      })
      Incumbent.hasMany(models.Receipts,{
        foreignKey: 'idIncumbent'
      })
      Incumbent.belongsTo(models.Package,{
        foreignKey: 'id',
        target_Key: 'idPackage'
      })
    }
  }
  Incumbent.init({
    identification: DataTypes.STRING,
    name: DataTypes.STRING,
    lastname: DataTypes.STRING,
    phone: DataTypes.STRING,
    affiliation: DataTypes.DATE,
    payment: DataTypes.STRING,
    birth_date: DataTypes.DATE,
    idPackage: DataTypes.INTEGER,
    idContract: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Incumbent',
  });
  return Incumbent;
};