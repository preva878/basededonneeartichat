


const animalInModel = (Sequelize,DataTypes) => {
    const AnimalIn = Sequelize.define("AnimalIn",{
        Nom:{
            type:DataTypes.STRING,
            allowNull:false
        },
        Sexe:{
            type:DataTypes.STRING,
            allowNull:true
        },
        Age:{
            type:DataTypes.INTEGER,
            allowNull:true
        },
        Poids:{
            type:DataTypes.DECIMAL,
            allowNull:false

        },
        DateEntree:{
            type:DataTypes.DATEONLY,
            
            allowNull:false
        },
        Etat:{
            type:DataTypes.STRING,
            allowNull:false
        },
        Traitement:{
            type:DataTypes.STRING,
            allowNull:false

        },
        FamilleAccueil:{
            type:DataTypes.STRING,
            allowNull:true

        },
        Note:{
            type:DataTypes.TEXT,
            allowNull:true
        },
    })
    return AnimalIn
}
module.exports = animalInModel