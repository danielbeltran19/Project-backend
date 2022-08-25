'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Receipts extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Receipts.belongsTo(models.Incumbent,{
        foreignKey: 'id',
        target_Key: 'idIncumbent'
      })
      Receipts.belongsTo(models.Condition,{
        foreignKey: 'id',
        target_Key: 'idCondition'
      })
    }
  }
  Receipts.init({
    name: DataTypes.STRING,
    lastname: DataTypes.STRING,
    payment_date: DataTypes.DATE,
    cost: DataTypes.STRING,
    months: DataTypes.STRING,
    collector_name: DataTypes.STRING,
    observations: DataTypes.STRING,
    idIncumbent: DataTypes.INTEGER,
    idCondition: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Receipts',
  });
  return Receipts;
};