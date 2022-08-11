module.exports = (sequelize, DataTypes) => {
    const Groups =  sequelize.define("Groups", {
        responsable: { type: DataTypes.STRING, allowNull: false },
        mienmbros: { type: DataTypes.STRING, allowNull: false },
    }
    );
    return Groups;
};