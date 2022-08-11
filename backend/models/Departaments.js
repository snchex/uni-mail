module.exports = (sequelize, DataTypes) => {
    const Departaments =  sequelize.define("Departaments", {
        departamento: { type: DataTypes.STRING, allowNull: false },
    }
    );
    return Departaments;
};