module.exports = (sequelize, DataTypes) => {
    const MailTypes =  sequelize.define("MailTypes", {
        tipo: { type: DataTypes.STRING, allowNull: false },
    }
    );
    return MailTypes;
};