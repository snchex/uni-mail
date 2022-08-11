module.exports = (sequelize, DataTypes) => {
    const MailTypes =  sequelize.define("mailTypes", {

        tipo: { type: DataTypes.STRING, allowNull: false },
    });
    return MailTypes;
};