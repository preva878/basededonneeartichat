const familleAccueilModel = (sequelize,DataTypes) => {
    const FamilleAccueil = sequelize.define("FamilleAccueil",{

        Nom:{
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
        EquipementsFourni:{
            type:DataTypes.STRING,
            allowNull:false
        },
        Artichats:{
            type:DataTypes.STRING,
            allowNull:false 
        },
        Notes:{
            type:DataTypes.STRING,
            allowNull:true
        }
    })
    return FamilleAccueil
}
module.exports=familleAccueilModel