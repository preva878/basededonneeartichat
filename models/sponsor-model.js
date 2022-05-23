const sponsorModel = (sequelize,DataTypes) => {
    const Sponsor = sequelize.define("Sponsor",{

        Nom:{
            type:DataTypes.STRING,
            allowNull:false
        },
        Materiel:{
            type:DataTypes.STRING,
            allowNull:false
        },
        DateEntre:{
            type:DataTypes.DATEONLY,
            allowNull:false
        },
        Quantite:{
            type:DataTypes.INTEGER,
            allowNull:false
        },
        Types:{
            type:DataTypes.STRING,
            allowNull:false
        },
        Adresse:{
            type:DataTypes.STRING,
            allowNull:false
        },
        Cp:{
            type:DataTypes.INTEGER,
            allowNull:false
        },
        Ville:{
            type:DataTypes.STRING,
            allowNull:false
        },
    })
    return Sponsor
}
module.exports=sponsorModel