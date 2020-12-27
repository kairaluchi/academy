'use strict'
const {
  Model
} = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Principle extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate (models) {
      // define association here
    }
  }
  Principle.init({
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    examples: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Principle'
  })
  return Principle
}
