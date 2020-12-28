module.exports = ({ sequelize, DataTypes, Model }) => {
  class Contradiction extends Model {
    static associate (models) {
      this.belongsTo(models.Principle, {
        foreignKey: 'improveId'
      });
      this.belongsTo(models.Principle, {
        foreignKey: 'preserveId'
      });
      this.belongsTo(models.Technical, {
        foreignKey: 'principleId'
      });
    }
  }
  Contradiction.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      improveId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Technicals',
          key: 'id'
        }
      },
      preserveId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Technicals',
          key: 'id'
        }
      },
      principleId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Principles',
          key: 'id'
        }
      },
    },
    {
      sequelize,
      modelName: 'Contradiction',
      timestamps: true
    }
  )
  return Contradiction
}
