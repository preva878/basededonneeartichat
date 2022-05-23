const userModel = (sequelize,DataTypes) => {
    const User = sequelize.define("User",{
        Login:{
            type:DataTypes.STRING,
            allowNull:false
        },
        Nom:{
            type:DataTypes.STRING,
            allowNull:false
        },
        Password:{
            type:DataTypes.STRING,
            allowNull:false
        },
    })
    return User
}
module.exports=userModel