module.exports = (sequelize, DataTypes) => {
    const Requests =  sequelize.define("Requests", {
        solicitud: { type: DataTypes.STRING, allowNull: false },
    }
    );
    return Requests;
};