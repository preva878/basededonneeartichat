

const veterinaireModel = (sequelize,DataTypes) =>{
    const Veterinaire = sequelize.define("Veterinaire",{
        Nom:{
            type: DataTypes.STRING,
            allowNull: false
        },
        Adresse:{
            type: DataTypes.STRING,
            allowNull: false
        },
        Ville:{
            type: DataTypes.STRING,
            allowNull: false
        },
        CP:{
            type: DataTypes.INTEGER,
            allowNull: false
        },
        DateIntervention:{
            type: DataTypes.DATEONLY,
            defaultValue:DataTypes.NOW,
            allowNull: false
        },
        Prix:{
            type: DataTypes.DECIMAL,
            allowNull: false
        },
        TypeIntervention:{
            type: DataTypes.STRING,
            allowNull: false
        },
        Artichats:{
            type: DataTypes.STRING,
            allowNull: false
        },
        Notes:{
            type: DataTypes.STRING,
            allowNull: false
        },
    })
    return Veterinaire
}
module.exports=veterinaireModel