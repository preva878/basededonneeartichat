

const EquipementsModel = (sequelize,DataTypes) => {
    const Equipements= sequelize.define("Equipements",{
       Image:{
           type:DataTypes.STRING
       },
        
        Nom:{
            type:DataTypes.STRING,
            allowNull:false
        },
        Types:{
            type:DataTypes.STRING,
            allowNull:false
        },
        Quantite:{
            type:DataTypes.INTEGER,
            allowNull:false
        },
        DateEntree:{
            type:DataTypes.DATEONLY,
            allowNull:true
        },
        DatePeremption:{
            type:DataTypes.DATEONLY,
            allowNull:true
        },
        Etats:{
            type:DataTypes.STRING,
            allowNull:false
        },
    })
    return Equipements
}
module.exports=EquipementsModel