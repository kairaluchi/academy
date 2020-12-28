module.exports = ({ sequelize, DataTypes, Model }) => {
  class Technical extends Model {
    static associate (models) {
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
