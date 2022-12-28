//user model
module.exports = (sequelize, DataTypes) => {
    const Client = sequelize.define( "client", {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            unique: true,
            isEmail: true, //checks for email format
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        type: {
            type:DataTypes.STRING,
            allowNull: false
        }
    }, {timestamps: false}, )
    return Client
 }