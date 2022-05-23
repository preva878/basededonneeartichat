

const adoptantModel = (sequelize, DataTypes) => {
    const Adoptant = sequelize.define("Adoptant",{
        Nom:{
            type:DataTypes.STRING,
            allowNull:false
        },
        Adresse:{
            type:DataTypes.STRING,
            allowNull:false
        },
        CP:{
            type:DataTypes.INTEGER,
            allowNull:false
        },
        Ville:{
            type:DataTypes.STRING,
            allowNull:false
        },
        ContactMail:{
            type:DataTypes.STRING,
            isEmail:true,
            allowNull:false
        },
        ContactPortable:{
            type:DataTypes.INTEGER,
            allowNull:false
        },
        Artichats:{
            type:DataTypes.STRING,
            allowNull:false
        },
        Note:{
            type:DataTypes.TEXT,
            allowNull:false
        },
       

    })
    return Adoptant
}

module.exports = adoptantModel