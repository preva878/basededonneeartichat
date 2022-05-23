
const animalOutModel = (Sequelize,DataTypes) => {
    const AnimalOut = Sequelize.define("AnimalOut",{
        Nom:{
            type:DataTypes.STRING,
            allowNull:false
        },
        NomDefinitif:{
            type:DataTypes.STRING,
            allowNull:false
        },
        SexeDefini:{
            type:DataTypes.STRING,
            allowNull:true
        },
        Particularite:{
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
       
        Etat:{
            type:DataTypes.STRING,
            allowNull:false
        },
        Vaccin:{
            type:DataTypes.BOOLEAN,
            allowNull:false

        },
        DateVaccin:{
            type:DataTypes.DATEONLY,
            allowNull:true,
        },
        
        Puce:{
            type:DataTypes.INTEGER,
            allowNull:true
        },
        Sterilisation:{
            type:DataTypes.BOOLEAN,
            defaultValue:true,
            allowNull:true
        },
        DateSterilisation:{
            type:DataTypes.DATEONLY,
            defaultValue:DataTypes.NOW,
            allowNull:true
        },
        Adoptant:{
            type:DataTypes.STRING,
            allowNull:true

        },
        DateDepart:{
            type:DataTypes.DATEONLY,
            
            allowNull:false
        },
        
    })
    return AnimalOut
}
module.exports = animalOutModel