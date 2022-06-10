require ("dotenv").config()
const {Sequelize, DataTypes} = require ("sequelize")
const animalInModel = require("./animalIn-model.js")
const animalOutModel = require("./animalOut-model")
const adoptantModel = require("./adoptant-model")
const equipementModel = require ("./equipement-model")
const familleAccueilModel = require ("./familleAccueil-model")
const sponsorModel = require("./sponsor-model")
const usersModel = require("./users-model")
const veterinaireModel = require ("./veterinaire-model")
const EquipementsModel = require("./equipement-model")
const PorteeModel = require("./productModel")



const sequelize = new Sequelize(process.env.DB_NAME,process.env.DB_USER, process.env.DB_PASSWORD,{
    host:process.env.DB_HOST,
    dialect:"mysql"
})

const db = {
    Sequelize: Sequelize,
    sequelize:sequelize,
    AnimalIn : animalInModel(sequelize,DataTypes),
    Adoptant: adoptantModel(sequelize,DataTypes),
    AnimalOut: animalOutModel(sequelize,DataTypes),
    Equipement: equipementModel(sequelize,DataTypes),
    FamilleAccueil: familleAccueilModel(sequelize,DataTypes),
    Sponsor: sponsorModel(sequelize,DataTypes),
    User: usersModel (sequelize,DataTypes),
    Veterinaire: veterinaireModel(sequelize,DataTypes),
    Equipements: EquipementsModel(sequelize,DataTypes),
    Portees: PorteeModel(sequelize,DataTypes)
}

//db.Equipements = require('./equipement-model')(sequelize,DataTypes)


//relations many to many famille accueil, veterianire, animalin et animalout

db.AnimalIn.belongsToMany(db.FamilleAccueil,{through:'AnimalInFA'});
db.FamilleAccueil.belongsToMany(db.AnimalIn,{through:'AnimalInFA'});

db.AnimalIn.belongsToMany(db.Veterinaire, {through:'AnimalInVeto'});
db.Veterinaire.belongsToMany(db.AnimalIn, {through:'AnimalInVeto'});

db.AnimalOut.belongsToMany(db.FamilleAccueil,{through:'AnimalOutFA'});
db.FamilleAccueil.belongsToMany(db.AnimalOut,{through:'AnimalOutFA'});

db.AnimalOut.belongsToMany(db.Veterinaire, {through:'AnimalOutVeto'});
db.Veterinaire.belongsToMany(db.AnimalOut, {through:'AnimalOutVeto'});

//relations equipement famille accueil et sponsor equipement

db.Equipement.belongsToMany(db.FamilleAccueil,{through:'equipementFA'});
db.FamilleAccueil.belongsToMany(db.Equipement,{through:'equipementFA'});

db.Sponsor.belongsToMany(db.Equipement,{through:'EquipSponsor'});
db.Equipement.belongsToMany(db.Sponsor,{through:'EquipSponsor'});

//relation one to many

//db.AnimalOut.belongsTo(db.Adoptant);
db.Adoptant.hasMany(db.AnimalOut);

//relation one to one

db.User.hasOne(db.FamilleAccueil)
db.FamilleAccueil.belongsTo(db.User)



module.exports = db
