module.exports = ({ sequelize, DataTypes, Model }) => {
  class Technical extends Model {
    static associate (models) {
      this.hasMany(models.Contradiction, {
        foreignKey: 'improveId'
      })
      this.hasMany(models.Contradiction, {
        foreignKey: 'preserveId'
      })
      this.belongsToMany(models.Principle, {
        through: models.Contradiction,
        foreignKey: 'id',
        otherKey: 'improveId'
      })
      this.belongsToMany(models.Principle, {
        through: models.Contradiction,
        foreignKey: 'id',
        otherKey: 'preserveId'
      })
    }
  }
  Technical.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      description: {
        type: DataTypes.STRING
      }
    },
    {
      sequelize,
      modelName: 'Technical',
      timestamps: true,
      indexes: [{ unique: true, fields: ['name'] }]
    }
  )
  return Technical
}
