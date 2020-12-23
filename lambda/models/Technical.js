module.exports = ({ sequelize, DataTypes }) => {
    return sequelize.define('Technical', {
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
            type: DataTypes.STRING
        }
    }, {
        tableName: 'Technical',
        timestamps: true,
        indexes: [{ unique: true, fields: ['name'] }]
    });
}
