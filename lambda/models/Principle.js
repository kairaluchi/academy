module.exports = ({ sequelize, DataTypes, Model }) => {
  class Principle extends Model {
    static associate (models) {
    }
  }
  Principle.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      description: {
        type: DataTypes.TEXT
      },
      examples: {
        type: DataTypes.TEXT
      }
    },
    {
      sequelize,
      modelName: 'Principle',
      timestamps: true,
      indexes: [{ unique: true, fields: ['name'] }]
    }
  )
  return Principle
}
