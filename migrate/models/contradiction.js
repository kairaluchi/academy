'use strict'
const {
  Model
} = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Contradiction extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate (models) {
      // define association here
    }
  }
  Contradiction.init({
    improveId: DataTypes.INTEGER,
    preserveId: DataTypes.INTEGER,
    principleId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Contradiction'
  })
  return Contradiction
}
